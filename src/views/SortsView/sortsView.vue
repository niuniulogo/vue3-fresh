<style scoped lang="scss">
.sorts-header {
    height: 50px;
}

.sorts-body {
    display: flex;

    .left {
        height: calc(100vh - 120px);
        overflow-y: auto;
        width: 90px;
        /* 隐藏滚动条 */
        scrollbar-width: none;
        /* firefox */
        -ms-overflow-style: none;

        /* IE 10+ */
        .left-item {
            width: 90px;
        }
    }

    .left::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
    }
}
</style>

<template>
    <van-search class="sorts-header" v-model="value" background="#acd7a8" shape="round" show-action placeholder="吃出美好生活"
        @search="onSearch">
        <template #action>

            <div @click="onClickButton">🛒</div>
        </template>
    </van-search>


    <div class="sorts-body">
        <div class="left">
            <van-sidebar class="left-item" v-model="active" @change="onChange">
                <van-sidebar-item v-for="(item) in 100 " :key="item" :title="'标签名' + item" />
            </van-sidebar>
        </div>

        <div class="right">2</div>
    </div>
</template>

<script setup>
import { ref, inject } from "vue"
import { showToast } from 'vant';


const active = ref(0);
const onChange = (index) => showToast(`标签名 ${index + 1}`);


const bus1 = inject("eventBus1")
const onClickButton = () => {
    bus1.emit("swichTab", 'shopCar')

};



</script>