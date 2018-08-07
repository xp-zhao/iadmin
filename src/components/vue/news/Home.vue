<!-- home -->
<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/about/home/news">News</router-link>
        </li>
        <li>
          <router-link to="/about/home/message">Message</router-link>
        </li>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
