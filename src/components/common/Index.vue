<!-- 首页 -->
<template>
  <div class="layout">
    <Layout>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <!-- <div class="layout-logo"></div> -->
                <div class="layout-title">
                    <span>后台管理系统</span>
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </MenuItem>
                    <!-- <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem> -->
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4" @click="logout">
                        <Icon type="md-exit" />
                        <a @click="logout">退出登录</a>
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Layout>
            <Sider ref="side" hide-trigger :style="{background: '#fff'}" v-model="isCollapsed">
                <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" @on-select='routeTo' accordion>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            数据库工具
                        </template>
                        <MenuItem name="about">关于</MenuItem>
                        <MenuItem name="form">表单</MenuItem>
                        <MenuItem name="database">数据库</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            iview 学习
                        </template>
                        <MenuItem name="table">Table 表格</MenuItem>
                        <MenuItem name="blank">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            vue 学习
                        </template>
                        <MenuItem name="home">Home</MenuItem>
                        <MenuItem name="comment">Comment</MenuItem>
                        <MenuItem name="todolist">TodoList</MenuItem>
                        <MenuItem name="user">User</MenuItem>
                        <MenuItem name="axios">Axios</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{padding: '0 24px 24px'}">
                <Breadcrumb :style="{margin: '24px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>{{this.$route.path.replace('/','')}}</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    <Footer class="layout-footer-center">2018-2018 &copy; iadmin</Footer>
    </Layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false,
      modal2: false
    }
  },
  methods: {
    logout () {
      this.$router.push('/')
    },
    routeTo (e) {
      // console.log(this.$router,e)
      this.$router.push('/' + e)
    }
  }
}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
}
.layout-title{
    /* width: 100px; */
    /* height: 30px; */
    /* background: #5b6270; */
    /* border-radius: 3px; */
    float: left;
    position: relative;
    top: 5px;
    /* left: 5px; */
    color: #ffffff;
    font-size: 16px
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
