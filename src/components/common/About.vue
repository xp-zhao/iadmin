<!-- about -->
<template>
  <div class="about">
    <vue-markdown># 后台管理系统</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 基于Vue2 + iView2.0 </vue-markdown>
    <br/><br/>
     <vue-markdown>### 出于学习的目的，完成了这样一个简单的后台管理系统的示例,记录学习过程中的小 demo。</vue-markdown>
    <br/><br/>
    <vue-markdown># 目前实现的功能及用到的组件</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 页面： [iView2.0](https://github.com/iview/iview)</vue-markdown>
    <br/><br/>
    <br/><br/>
    <vue-markdown># 其他</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 如无特殊情况，本项目会持续维护</vue-markdown>
</div>

</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  data () {
    return {
    }
  },
  components: {
    VueMarkdown
  }
}
</script>
<style scoped>
.about {
  margin: 10px 20px 0 30px;
  color: black;
}
</style>
