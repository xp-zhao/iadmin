<!-- app -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo='addTodo'/>
      <todo-list :todos='todos' :deleteTodo='deleteTodo'/>
      <todo-footer :todos="todos" :deleteCompleteTodos='deleteCompleteTodos' :selectAllTodos='selectAllTodos'/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todos: [
        {title: '吃饭', complete: false},
        {title: '睡觉', complete: true},
        {title: '撸代码', complete: false}
      ]
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选中的 todo
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选/全不选
    selectAllTodos (check) {
      this.todos.forEach(todo => { todo.complete = check })
    }
  }
}
</script>
<style scoped>
/*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
