<!-- user -->
<template>
  <div class="container">
    <search/>
    <users-main/>
  </div>
</template>

<script>
import Search from './Search.vue'
import Main from './Main.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Search,
    UsersMain: Main
  }
}
</script>
<style scoped>
</style>
