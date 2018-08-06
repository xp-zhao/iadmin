<!-- add database -->
<template>
  <div>
    <Button type="primary" shape="circle" icon="md-add" @click="addmodal = true">数据库连接</Button><br><br>
    <Table style=""></Table>
    <Modal
        title="新建数据库连接"
        v-model="addmodal"
        footer-hide
        class-name="vertical-center-modal">
        <!-- <i-form ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="120"> -->
        <i-form ref='dbForm' :model="formValidate" :rules="ruleValidate" :label-width="120">
            <Form-item label="保存名称" prop="savename">
                <i-input v-model="formValidate.savename" placeholder="保存名称"></i-input>
            </Form-item>
            <Form-item label="数据库类型" prop="dbtype">
                <i-select :value.sync="formValidate.dbtype" placeholder="请选择数据库类型">
                    <i-option value="mysql">mysql</i-option>
                </i-select>
            </Form-item>
            <Form-item label="主机名或ip地址" prop="address">
                <i-input v-model="formValidate.address" placeholder="请输入主机名或ip地址"></i-input>
            </Form-item>
            <Form-item label="用户名" prop="name">
                <i-input v-model="formValidate.name" placeholder="请输入用户名"></i-input>
            </Form-item>
            <Form-item label="密码" prop="password">
                <i-input v-model="formValidate.password" placeholder="请输入密码" type='password'></i-input>
            </Form-item>
            <Form-item label="数据库" prop="db">
                <i-input v-model="formValidate.db" placeholder="请输入数据库名称"></i-input>
            </Form-item>
            <Form-item label="描述" prop="desc">
                <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" @click.native="handleSubmit('dbForm')">测试连接</i-button>
                <i-button type="ghost" @click.native="handleReset('dbForm')" style="margin-left: 8px;color:black">重置</i-button>
                <i-button type="save" @click.native="save('dbForm')" style="margin-left: 8px;color:black">保存</i-button>
            </Form-item>
        </i-form>
    </Modal>
  </div>
</template>

<script>
import Table from '../page/Table.vue'

export default {
  components: {
    Table
  },
  data () {
    return {
      addmodal: false,
      formValidate: {
        savename: '',
        dbtype: 'mysql',
        address: '',
        name: '',
        password: '',
        db: '',
        desc: ''
      },
      ruleValidate: {
        savename: [{
          required: true,
          message: '保存名称不能为空',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: '地址不能为空',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }],
        db: [{
          required: true,
          message: '数据库不能为空',
          trigger: 'blur'
        }],
        desc: [{
          required: false,
          message: '请输入描述',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    save (name) {
    this.$refs[name].validate( (valid) => {
      if (valid) {
        alert('验证成功')
      } else {
        alert('验证失败')
      }
    })
   } 
  }
}
</script>
<style scoped>
</style>
