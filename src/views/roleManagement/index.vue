<!--
* @创建人: 王怀德
* @具体功能: 角色管理
-->
<template>
  <div id="roleManagement">
    <rightTopTitle :titleText="titleText"></rightTopTitle>
    <div class="content">
      <div class="add_btn">
        <el-button type="primary" @click="addRole">
          <span>+</span> 新增角色</el-button
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
          <el-table-column prop="name" label="角色" width="120" />
          <el-table-column prop="function" label="功能权限" />
          <el-table-column prop="data" label="数据权限" width="150" />
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
    <el-dialog v-model="roleDialogBox.type" :title="roleDialogBox.title">
      <el-form :model="roleDialogBox.data">
        <el-form-item label="角色名称" label-width="140px">
          <el-input v-model="roleDialogBox.data.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="功能权限" label-width="140px">
          <el-input v-model="roleDialogBox.data.function" autocomplete="off" />
        </el-form-item>
        <el-form-item label="数据权限" label-width="140px">
          <el-input v-model="roleDialogBox.data.data" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="roleDialogBox.type = false">取消</el-button>
          <el-button type="primary" @click="determineRoleDialogBox"
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
  name: "roleManagement",
  // 注册引用的组件
  components: { rightTopTitle },
  data() {
    return {
      titleText: "角色管理",
      currentPage: 2,
      pageSize: 15,
      tableData: [],
      tableWholeData: [],
      roleDialogBox: {
        type: false,
        data: {
          num: null,
          name: null,
          function: null,
          data: null,
        },
        index: null,
        title: null,
      },
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
        name: "超级管理员" + i,
        function: "功能权限",
        data: "数据权限",
      };
      this.tableWholeData.push(obj);
    }
    this.handleCurrentChange(1);
  },
  // 生命vue函数
  methods: {
    // 对话框确定事件
    determineRoleDialogBox() {
      // console.log('对话框确定事件')
      if (this.roleDialogBox.title === "编辑角色信息") {
        for (const key in this.roleDialogBox.data) {
          this.tableWholeData[this.roleDialogBox.index][key] =
            this.roleDialogBox.data[key];
        }
        this.tableWholeData[this.roleDialogBox.index].date =
          this.$common.get_current_time("yyyy-MM-dd");
        this.roleDialogBox.type = false;
      } else if (this.roleDialogBox.title === "新建角色") {
        this.roleDialogBox.data.num = this.tableWholeData.length + 1;
        this.roleDialogBox.data.date =
          this.$common.get_current_time("yyyy-MM-dd");
        this.roleDialogBox.type = false;
        this.tableWholeData.push(this.roleDialogBox.data);
        this.handleCurrentChange(this.currentPage);
        this.roleDialogBox.type = false;
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
      this.roleDialogBox = {
        type: true,
        data: JSON.parse(JSON.stringify(scope.row)),
        index: this.relyKeyGetIndex(scope, "num"),
        title: "编辑角色信息",
      };
      console.log(this.roleDialogBox);
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
    addRole() {
      // console.log("新增橘色");
      this.roleDialogBox = {
        type: true,
        data: {
          num: null,
          name: null,
          function: null,
          data: null,
        },
        index: null,
        title: "新建角色",
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
#roleManagement {
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
