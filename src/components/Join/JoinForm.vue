<template>
  <div class="join-form">
    <div class="form-items">

      <el-form class="el-form" :model="user" ref="apply" :rules="rules" label-position="right" label-width="80px">

        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="user.name" placeholder="请输入你的姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年级:" prop="grade">
              <el-input v-model="user.grade" placeholder="请输入你的年级"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="邮箱:" prop="email">
            <el-input v-model="user.email" placeholder="请输入你的e-mail"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="电话:" prop="phone">
            <el-input v-model="user.phone" placeholder="请输入你的电话"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="指导老师:" prop="teacher">
            <el-input v-model="user.teacher" placeholder="请输入你的指导老师"></el-input>
          </el-form-item>
        </el-row>

        <el-row class="flex-center">
          <el-form-item label="通过六级" prop="passGET6" style="margin: 0 10px 0 0;">
            <el-radio-group v-model="user.passGET6">
              <div style="display: inline-block;width:90px;"></div>
              <el-radio label="是" style="color: #ffffff;"></el-radio>
              <div style="display: inline-block;width:90px;"></div>
              <el-radio label="否" style="color: #ffffff;"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>

        <el-row class="flex-center">
          <el-form-item>
            <el-button type="primary" @click="submitForm('apply')" style="background: #0066FF;
            width: 400.5px;
            border-radius: 56px;">提交申请</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'JoinForm',
  data () {
    return {
      user: {
        name: '',
        grade: '',
        email: '',
        phone: '',
        teacher: '',
        passGET6: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        grade: [
          { required: true, message: '请输入你的年级', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入你的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入你的电话', trigger: 'blur' },
          { pattern: /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/, message: '请输入正确的电话号码', trigger: 'blur' }

        ],
        teacher: [
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        passGET6: [
          { required: true, message: '请选择是否通过英语六级', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
  .join-form {
    min-width: 1075px;
    height: 620px;
    overflow: hidden;

    display: flex;
    justify-content: center;
  }

  .form-items {
    margin-top: 60px;
    width: 90%;
  }

  .el-form-item__label {
    color: #ffffff;
  }

  .el-form-item .el-input__inner {
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }

  .el-row {
    margin: 20px auto;
  }

  .el-button {
    border: 0px #ffffff solid;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
</style>
