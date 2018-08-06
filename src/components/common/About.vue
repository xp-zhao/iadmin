<!-- about -->
<template>
  <div class="about">
    <vue-markdown># 后台管理系统</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 基于Vue2 + iView2.0 </vue-markdown>
    <br/><br/>
    <vue-markdown># 自述</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### iView 是一套高效美观的 Vue2 UI 框架。主要适合大中型中后台产品，比如某产品的运营平台、数据监控平台、管理平台等，从工程配置、到样式布局，甚至后面规划的业务套件，是一整套的解决方案，十分适合快速开发。
    </vue-markdown>
     <vue-markdown>### 我出于学习的目的，完成了这样一个简单的后台管理系统的示例。</vue-markdown>
    <br/><br/>
    <vue-markdown># 目前实现的功能及用到的组件</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 页面： [iView2.0](https://github.com/iview/iview)</vue-markdown>
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
