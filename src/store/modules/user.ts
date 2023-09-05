import { LoginFormData } from '@/api/user/type'
import { defineStore } from 'pinia'
import { reqLogin } from '../../api/user/index'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      username: '',
    }
  },
  actions: {
    async login(params: LoginFormData) {
      const resp = await reqLogin(params)

      if (resp.code === 200) {
        this.token = resp.data as string
        return 'ok'
      }

      return Promise.reject(new Error(resp.data))
    },
  },
  getters: {},
})

export default useUserStore
