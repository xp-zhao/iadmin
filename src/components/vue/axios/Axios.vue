<!-- app -->
<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    // 发送 ajax 请求获取数据
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // 使用 axios 发送 ajax 请求
    axios.get(url).then(response => {
      // 成功
      const result = response.data
      // 得到最受欢迎的 repo
      const mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoName = mostRepo.name
    }).catch(error => {
      if (error) {
        alert('请求失败！')
      }
    })
  }
}
</script>
<style scoped>
</style>
