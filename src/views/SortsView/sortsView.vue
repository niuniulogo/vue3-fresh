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

    .right {
        flex: 1;
        height: calc(100vh - 120px);
        overflow-y: auto;
        /* 隐藏滚动条 */
        scrollbar-width: none;
        /* firefox */
        -ms-overflow-style: none;
        text-align: center;

        .image {
            width: 95%;
        }
    }

    .right::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
    }
}
</style>

<template>
    <van-search class="sorts-header" disabled background="#acd7a8" shape="round" show-action placeholder="吃出美好生活">
        <template #action>
            <div @click="onClickButton">🛒</div>
        </template>
    </van-search>

    <div class="sorts-body">
        <div class="left">
            <van-sidebar @click="onClick" class="left-item" v-model="activeIndex" @change="onChange">
                <van-sidebar-item v-for="(item, index) in dataList1" :id="'li' + index" :key="index" :title="item.title" />
            </van-sidebar>
        </div>

        <div class="right">
            <!-- <div class="right-item" v-for="(item,) in 20 " :key="item">
                <img class="image" src="src/assets/sorts-list-item.png">
            </div> -->

            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="right-item" v-for="(item) in list " :key="item">
                    <img class="image" src="src/assets/sorts-list-item.png">
                </div>

            </van-list>
        </div>



    </div>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted, nextTick, type Ref } from 'vue'
import { showToast } from 'vant'
import type EventEmitter from '@/utils/EventEmitter';
import { onActivated } from 'vue';

const activeIndex = ref(0); //记录点击标签名
const onChange = (index: number) => { }

const dataList1 = ref([
    { title: '好货推荐', id: 1 },
    { title: '热带水果', id: 2 },
    { title: '苹果梨蕉', id: 3 },
    { title: '樱桃莓类', id: 4 },
    { title: '柑橘橙柚', id: 5 },
    { title: '奇异果', id: 6 },
    { title: '瓜类葡萄', id: 7 },
    { title: '瓜类葡萄', id: 8 },
    { title: '青菜菌菇', id: 9 },
    { title: '粮油米面', id: 10 },
    { title: '葱姜蒜', id: 11 },
    { title: '汽水饮料', id: 12 },
    { title: '生抽老抽', id: 13 },
    { title: '火锅底料', id: 14 },
]);
const scrooll = (e: any) => {
    console.log(e.target.scrollTop);

};


const list: Ref<number[]> = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 1000);

    console.log("load");

};

//记录 左侧 菜单
const onClick = (e: any) => {
    if (e.clientY > window.innerHeight - 200) {  //快点击到 底部了 
        document.getElementById('li' + (activeIndex.value + 3))?.scrollIntoView({ behavior: "smooth", block: 'end' });
    } else if (e.clientY < 200) {
        document.getElementById('li' + (activeIndex.value - 1))?.scrollIntoView({ behavior: "smooth", block: 'start' });
    } else { /* empty */ }

}


const bus1: EventEmitter | undefined = inject('eventBus1')
const onClickButton = () => {
    bus1?.emit('swichTab', 'shopCar')
}


onActivated(() => {
    document.getElementById('li' + activeIndex.value)?.scrollIntoView({ block: 'center' });
});

onMounted(() => {



});


</script>
