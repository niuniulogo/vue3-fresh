<style scoped></style>

<template>
    <van-nav-bar right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #title>
            <van-search v-model="searchValue" placeholder="吃出美好生活" />
        </template>
    </van-nav-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchValue = ref('')

const onClickLeft = () => {
    router.back()
}

const onClickRight = () => {
    router.push({ path: '/mySon' })
}
</script>
