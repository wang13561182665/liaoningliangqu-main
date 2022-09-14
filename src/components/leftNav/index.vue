<!--
* @创建人: 王怀德
* @具体功能: 左侧导航栏
-->
<template>
  <div id="left_nav" ref="page">
    <div id="left_nav_title"></div>
    <el-menu
      id="left_nav_main"
      text-color="#000000"
      active-text-color="#0077ff"
      background-color="#ffffff00"
      default-active="1-1"
      @open="handleOpen"
    >
      <el-submenu v-for="item in navList" :key="item.index" :index="item.index">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="childrenItem in item.children"
            :key="childrenItem.index"
            :index="childrenItem.index"
            @click="navClick(childrenItem)"
            >{{ childrenItem.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div id="left_nav_user">
      <div id="user" class="pointer text_ellipsis">
        {{ userName }}
      </div>
      <div id="logOut" class="pointer" @click="logOut"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftNav",
  // 注册引用的组件
  components: {},
  data() {
    return {
      navList: [
        {
          name: "两区动态监测监管",
          index: "1",
          path: "",
          children: [
            {
              name: "综合门户一张图",
              index: "1-1",
              path: "",
            },
            {
              name: "两区可视化",
              index: "1-2",
              path: "",
            },
            {
              name: "数据存储管理",
              index: "1-3",
              path: "",
            },
            {
              name: "监管报告管理",
              index: "1-4",
              path: "",
            },
          ],
        },
        {
          name: "全域种植业监测",
          index: "2",
          path: "",
          children: [
            {
              name: "全域历史种植业信息一张图",
              index: "2-1",
              path: "",
            },
          ],
        },
        {
          name: "系统管理",
          index: "4",
          path: "",
          children: [
            {
              name: "角色管理",
              index: "4-1",
              path: "/roleManagement",
            },
            {
              name: "用户管理",
              index: "4-2",
              path: "/userManagement",
            },
            {
              name: "日志管理",
              index: "4-3",
              path: "/logManagement",
            },
          ],
        },
      ],
      userName: "王怀德先生，欢迎您使用本系统",
    };
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {},
  // 生命vue函数
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    navClick(item) {
      console.log(item);
      if (item.path) {
        this.$router.replace(item.path);
      }
    },
    // logOut登出事件
    logOut() {
      console.log("登出事件");
    },
  },
};
</script>

<style scoped lang="scss">
#left_nav {
  z-index: 9;
  width: 265px;
  box-shadow: 2px 0 10px 0px #00000050;
  > #left_nav_title {
    background-color: rgba(10, 125, 255);
    background-image: url("./image/left_nav_title.png");
    background-repeat: no-repeat;
    background-size: 265px 95px;
    height: 95px;
  }
  > #left_nav_main {
    background-image: url("./image/left_nav_bg.png");
    background-repeat: no-repeat;
    background-size: 265px 900px;
    height: 900px;
  }
  > #left_nav_user {
    border-top: 1px #0c203d solid;
    height: 85px;
    background: rgba(210, 238, 254);
    padding: 0 10px 0 20px;
    display: flex;
    > #user {
      background-image: url("./image/user.png");
      background-repeat: no-repeat;
      background-position: left center;
      padding-left: 40px;
      font-size: 16px;
      height: 85px;
      line-height: 85px;
      flex: 1;
    }
    > #logOut {
      background-image: url("./image/log_out.png");
      background-repeat: no-repeat;
      background-position: center;
      margin-left: 10px;
      width: 30px;
      height: 85px;
    }
  }
}
</style>
