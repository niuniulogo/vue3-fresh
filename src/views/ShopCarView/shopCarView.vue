
<style scoped lang="scss">
.header {
    position: fixed;
    top: 0;
    width: 100%;
}

.shop-car-body {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

.shop-car-tuijian {
    margin-top: 60px;
    text-align: center;
}

.shop-car-list {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .list-item {
        width: 48%;
        margin-bottom: 10px;
    }
}



.c {
    height: calc(100vh - 70px);

    overflow: auto;
}

.c::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}
</style>

<template>
    <div class="c">


        <van-nav-bar class="header" title="购物车" right-text="删除" />

        <div class="shop-car-body">
            <van-image fit="contain" src="src/assets/shop-car-1.png" />
        </div>

        <div class="shop-car-tuijian">
            <van-image fit="contain" src="src/assets/tit.png" />
        </div>

        <div class="shop-car-list">
            <div class="list-item" v-for="(item, index) in list" :key="index">
                <van-image width="100%" height="250" fit="fill" lazy-load :src="item">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const list: any = ref([])

for (let i = 0; i < 6; i++) {
    list.value.push('src/assets/list-item-' + (i + 1) + '.png')
} 
</script>
