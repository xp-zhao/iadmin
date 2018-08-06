<!-- table -->
<template>
  <div>
    <Table border :columns="columns" :data="data"></Table>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      columns: [{
        title: '名称',
        key: 'name',
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('Icon', {
              props: {
                type: 'person'
              }
            }),
            h('strong', params.row.name)
          ]);
        }
      },
      {
        title: '类型',
        key: 'type',
        align: 'center'
      },
      {
        title: '地址',
        key: 'address',
        align: 'center'
      },
      {
        title: '用户名',
        key: 'address',
        align: 'center'
      },
      {
        title: '密码',
        key: 'address',
        align: 'center'
      },
      {
        title: '描述',
        key: 'address',
        align: 'center'
      },
      {
        title: '操作',
        key: 'action',
        width: 150,
        align: 'center',
        render: (h, params) => {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'primary',
                        size: 'small'
                    },
                    style: {
                        marginRight: '5px'
                    },
                    on: {
                        click: () => {
                            this.show(params.index)
                        }
                    }
                }, 'View'),
                h('Button', {
                    props: {
                        type: 'error',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            this.remove(params.index)
                        }
                    }
                }, 'Delete')
            ]);
        }
    }],
    data: [
      {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park'
    },
    {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park'
    }
]
}
  },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove (index) {
            this.data.splice(index, 1);
        }
    }
}
</script>
<style scoped>
</style>
