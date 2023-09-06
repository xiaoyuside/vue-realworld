<template>
  <div class="login-container">
    <el-row :gutter="20">
      <!-- :xs 屏幕宽度调整到 小于 798px , 占位栅格宽度变为 0 份, 表单为全部 24 份 -->
      <el-col :span="12" :offset="0" :xs="0"></el-col>
      <el-col :span="12" :offset="0" :xs="24">
        <el-form class="login-form" ref="form" :inline="false" size="default">
          <h1>Hello</h1>
          <h2>element plus demo</h2>

          <el-form-item label="">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder="username"
            ></el-input>
          </el-form-item>

          <el-form-item label="">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
              placeholder="password"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleClickLogin">登录</el-button>
            <!-- <el-button>取消</el-button> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
  verifyCode: '1234',
})

const userStore = useUserStore()
const router = useRouter()

const handleClickLogin = async () => {
  try {
    await userStore.login(loginForm)
    router.push('/')
  } catch (error) {
    const err = error as Error
    ElNotification({
      type: 'error',
      message: err.message,
    })
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/back.jpeg') no-repeat;
  background-size: cover; // 图片刚好覆盖盒子

  .login-form {
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 40px;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      margin: 20px 0;
      font-size: 20px;
    }
  }
}
</style>
