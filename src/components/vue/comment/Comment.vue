<!-- comment -->
<template>
  <div>
    <!-- <img class="logo" src='./assets/logo.png' alt="logo">
    3.使用组件标签
    <div> -->
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对 Vue 的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment='addComment'/>
      <List :comments='comments' :deleteComment='deleteComment'/>
    </div>
  </div>
</template>

<script>
// 1.引入组件
import Add from './Add.vue'
import List from './List.vue'
export default {
  data () {
    return {
      comments: [ // 数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
        {
          name: 'BOB',
          content: 'Vue 还不错'
        },
        {
          name: 'Tom',
          content: 'Vue teswt'
        },
        {
          name: 'Jack',
          content: 'testsdfasf'
        }
      ]
    }
  },
  methods: {
    // 添加评论
    addComment (comment) {
      this.comments.unshift(comment)
    },
    // 删除指定下标的评论
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  // 2.映射组件标签
  components: {
    Add,
    List
  }
}
</script>
<style scoped>
</style>
