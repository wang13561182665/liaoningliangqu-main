<!--
* @创建人: 王怀德
* @具体功能: 角色管理
-->
<template>
  <div id="userManagement">
    <rightTopTitle :titleText="titleText"></rightTopTitle>
    <div class="content">
      <div class="add_btn">
        <el-input
          v-model="retrieval"
          class="retrievalInput"
          placeholder="请输入用户名进行检索"
          clearable
        />
        <el-button type="primary" @click="addUser">
          <span>+</span> 新增用户</el-button
        >
      </div>
      <div class="table_wrap">
        <el-table
          :data="tableData"
          style="width: 100%"
          height="795px"
          :header-cell-style="{
            background: 'rgba(232,243,255)',
            color: '#0c203d',
            lineHeight: '46px',
          }"
        >
          <el-table-column prop="num" label="序号" width="70" />
          <el-table-column prop="userName" label="用户名" width="120" />
          <el-table-column prop="name" label="角色" width="120" />
          <el-table-column prop="tel" label="联系方式" width="180" />
          <el-table-column prop="mailbox" label="联系邮箱" />
          <el-table-column prop="ascription" label="归属地" />
          <el-table-column prop="remarks" label="备注" />
          <el-table-column prop="date" label="更新时间" width="150" />
          <el-table-column fixed="right" label="操作" width="150">
            <template #default="scope">
              <span class="btn pointer" @click="delRole(scope)"> 删除 </span>
              <span class="btn pointer" @click="editRole(scope)">编辑</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[15, 50, 100, 200]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableWholeData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <el-dialog v-model="userDialogBox.type" :title="userDialogBox.title">
      <el-form :model="userDialogBox.data">
        <el-form-item label="用户姓名" label-width="140px">
          <el-input v-model="userDialogBox.data.userName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="所属角色" label-width="140px">
          <el-input v-model="userDialogBox.data.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="联系方式" label-width="140px">
          <el-input v-model="userDialogBox.data.tel" autocomplete="off" />
        </el-form-item>
        <el-form-item label="联系邮箱" label-width="140px">
          <el-input v-model="userDialogBox.data.mailbox" autocomplete="off" />
        </el-form-item>
        <el-form-item label="归属地" label-width="140px">
          <el-input
            v-model="userDialogBox.data.ascription"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="备注" label-width="140px">
          <el-input v-model="userDialogBox.data.remarks" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="userDialogBox.type = false">取消</el-button>
          <el-button type="primary" @click="determineuserDialogBox"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import rightTopTitle from "../../components/rightTopTitle/index";
export default {
  name: "userManagement",
  // 注册引用的组件
  components: { rightTopTitle },
  data() {
    return {
      titleText: "用户管理",
      currentPage: 2,
      pageSize: 15,
      tableData: [],
      tableWholeData: [],
      userDialogBox: {
        type: false,
        data: {
          num: null,
          date: null,
          name: null,
          userName: null,
          tel: null,
          mailbox: null,
          remarks: null,
          ascription: null,
        },
        index: null,
        title: null,
      },
      retrieval: null,
    };
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {
    console.log();
    for (let i = 1; i < 100; i++) {
      let obj = {
        num: i,
        date: "2016-05-01",
        name: "超级管理员",
        userName: "王怀德",
        tel: "13561182665",
        mailbox: "wanghuaide12311@163.com",
        remarks: "明天一定敲代码",
        ascription: "布吉岛",
      };
      this.tableWholeData.push(obj);
    }
    this.handleCurrentChange(1);
  },
  // 生命vue函数
  methods: {
    // 对话框确定事件
    determineuserDialogBox() {
      // console.log('对话框确定事件')
      if (this.userDialogBox.title === "编辑用户信息") {
        for (const key in this.userDialogBox.data) {
          this.tableWholeData[this.userDialogBox.index][key] =
            this.userDialogBox.data[key];
        }
        this.tableWholeData[this.userDialogBox.index].date =
          this.$common.get_current_time("yyyy-MM-dd");
        this.userDialogBox.type = false;
      } else if (this.userDialogBox.title === "新建用户") {
        this.userDialogBox.data.num = this.tableWholeData.length + 1;
        this.userDialogBox.data.date =
          this.$common.get_current_time("yyyy-MM-dd");
        this.userDialogBox.type = false;
        this.tableWholeData.push(this.userDialogBox.data);
        this.handleCurrentChange(this.currentPage);
        this.userDialogBox.type = false;
      }
    },
    // 根据key值查找全部数据对应的下标
    relyKeyGetIndex(scope, key) {
      let index = -1;
      for (let i = 0; i < this.tableWholeData.length; i++) {
        if (scope.row[key] === this.tableWholeData[i][key]) {
          index = i;
          i = this.tableWholeData.length;
        }
      }
      return index;
    },
    // 编辑角色
    editRole(scope) {
      // console.log("编辑角色", scope);
      // console.log("编辑角色", scope.row.num);
      this.userDialogBox = {
        type: true,
        data: JSON.parse(JSON.stringify(scope.row)),
        index: this.relyKeyGetIndex(scope, "num"),
        title: "编辑用户信息",
      };
      console.log(this.userDialogBox);
    },
    // 删除角色
    delRole(scope) {
      // console.log("删除角色", scope);
      // console.log("删除角色", scope.row.num);
      let index = this.relyKeyGetIndex(scope, "num");
      if (index > -1) {
        this.tableWholeData.splice(index, 1);
        this.handleCurrentChange(this.currentPage);
      }
    },
    // 新增角色
    addUser() {
      // console.log("新增橘色");
      this.userDialogBox = {
        type: true,
        data: {
          num: null,
          date: null,
          name: null,
          userName: null,
          tel: null,
          mailbox: null,
          remarks: null,
        },
        index: null,
        title: "新建用户",
      };
    },
    // 页面显示条数发生了改变
    handleSizeChange(val) {
      // console.log("页面显示条数发生了改变", val);
      // console.log("页面显示条数发生了改变", this.pageSize);
      this.pageSize = val;
      this.handleCurrentChange(1);
    },
    // 页面页数发生了改变
    handleCurrentChange(val) {
      // console.log("页面页数发生了改变", val);
      // console.log("页面页数发生了改变", this.currentPage);
      this.tableData = [];
      for (let i = (val - 1) * this.pageSize; i < val * this.pageSize; i++) {
        if (this.tableWholeData[i]) {
          this.tableData.push(this.tableWholeData[i]);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
#userManagement {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  .content {
    flex: 1;
    padding: 24px;
    background: #f5f6f7;
    .add_btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .el-button {
        span {
          font-size: 20px;
        }
      }
      
    .retrievalInput {
      width: 300px;
    }
    }
    .table_wrap {
      padding: 10px 0;
      .btn {
        margin-right: 10px;
        color: #0077ff;
      }
    }
    .pagination {
      background: #fff;
      height: 75px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
