<template>
    <el-row type="flex" justify="center">
        <el-col :span="16">
            <el-card class="box-card">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="任务名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="任务时间">
                        <el-date-picker
                                v-model="dateLimitPicker"
                                type="datetimerange"
                                value-format="timestamp"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="corn">
                        <el-input v-model="form.cornExpresion"></el-input>
                    </el-form-item>
                    <el-form-item label="URL">
                        <el-input v-model="form.URL"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"
                                   @click="onSubmit">立即创建
                        </el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'DubboDemo',
  data () {
    return {
      form: {
        name: '',
        dateLimit: [],
        cornExpresion: '',
        targetURL: ''
      },
      dateLimitPicker: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
