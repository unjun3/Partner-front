import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        user:{}
    },
    actions: {
        setUser(user) {
           this.user =  user
        },
        getUser(){
            return this.user
        }
    },
    // 开启数据持久化
    persist: true
})
