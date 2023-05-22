import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        isShowTabbar: true //控制底部导航栏显示与隐藏  因为android端 键盘
    }),
    getters: {
        getIsShowTabbar: (state) => {
            return state.isShowTabbar
        }
    },
    actions: {
        setIsShowTabbar: (status) => {
            this.isShowTabbar = status
        }
    }
})
