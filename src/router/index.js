import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/common/Login.vue'
import Index from '../components/common/Index.vue'
import Form from '../components/page/Form.vue'
import About from '../components/common/About.vue'
import Blank from '../components/common/Blank.vue'
import AddDb from '../components/database/AddDb.vue'
import Table from '../components/page/Table.vue'
import Comment from '../components/vue/comment/Comment.vue'
import AppTodoList from '../components/vue/todolist/AppTodoList.vue'
import User from '../components/vue/user/User.vue'
import Axios from '../components/vue/axios/Axios.vue'
import Home from '../components/vue/news/Home.vue'
import News from '../components/vue/news/News.vue'
import Message from '../components/vue/news/Message.vue'
import MessageDetail from '../components/vue/news/MessageDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      component: Index,
      children: [
        {
          path: '',
          component: About
        },
        {
          path: '/form',
          component: Form
        },
        {
          path: '/blank',
          component: Blank
        },
        {
          path: '/database',
          component: AddDb
        },
        {
          path: '/table',
          component: Table
        },
        {
          path: '/comment',
          component: Comment
        },
        {
          path: '/todolist',
          component: AppTodoList
        },
        {
          path: '/user',
          component: User
        },
        {
          path: '/axios',
          component: Axios
        },
        {
          path: '/home',
          component: Home,
          children: [
            {
              path: '/about/home/news', // path 最左侧的斜杆永远代表根路径
              component: News
            },
            {
              path: '/about/home/message', // 简化写法
              component: Message,
              children: [
                {
                  path: '/about/home/message/detail/:id',
                  component: MessageDetail
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
