<style scoped lang="scss">
.my-swipe {
    height: 150px;
    margin: 15px 10px;
    margin-top: 70px;
    border-radius: 20px;
    overflow: hidden;
    background-color: aquamarine;
}

.my-swipe .van-swipe-item .image {
    width: 100%;
    height: 150px;
}

.jingang {
    display: flex;
    justify-content: space-around;
    height: 100px;
    width: 100vw;
}

.jingang .jingang-item {
    font-size: 14px;
    text-align: center;
}

.jingang .jingang-item .jingang-item-image {
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
}

.body-1 {
    background-color: #fbfafa;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px;

    .body-1-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            flex: 2;
            font-size: 18px;
            display: flex;
            align-items: center;

            .left-2 {
                margin-left: $margin5;
                font-size: $textSize10;
                background-color: $textBgcolor;
                color: #fff;
                padding: 0 2px;
                zoom: 0.8;
            }
        }

        .right {
            flex: 1;
            color: $themeColor;
            font-size: $textSize14;
            text-align: right;
        }
    }

    .body-1-footer {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        .item {
            width: 30%;
            text-align: center;

            .image {
                width: 92px;
                height: 92px;
                border-radius: 10px;
            }

            .item-2 {
                margin: 0 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .item-3 {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            .item-3 span {
                color: #f55726;
            }
        }
    }
}

.body-2 {
    padding: 10px;
    box-sizing: border-box;
    margin: 10px;
    display: flex;
    justify-content: space-between;

    .image {
        width: 48%;
        height: 128px;
    }
}

.list {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .list-item {
        width: 48%;
        margin-bottom: 10px;
        height: 250px;
        text-align: center;
    }
}
</style>

<template>
    <header style="top: 0; position: fixed; z-index: 99; width: 100vw">
        <van-search shape="round" background="#40AE36" readonly placeholder="吃出美好生活" @click-input="onClick">
            <template #left>
                <div style="color: white; margin-left: 5px; margin-right: 20px">郑州</div>
            </template>
        </van-search>
    </header>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in swiperImages" :key="index">
                    <img class="image" :src="item" />
                </van-swipe-item>
            </van-swipe>

            <div class="jingang">
                <div class="jingang-item" v-for="(item, index) in jingangImages" :key="index">
                    <img class="jingang-item-image" :src="item.image" />
                    <div>
                        {{ item.title }}
                    </div>
                </div>
            </div>

            <div class="body-1">
                <div class="body-1-top">
                    <div class="left">
                        <van-notice-bar style="width: 150px; height: 25px" left-icon="volume-o"
                            text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
                    </div>
                    <div class="right">查看全部</div>
                </div>

                <div class="body-1-footer">
                    <div class="item" v-for="(item, index) in dataList1" :key="index">
                        <div>
                            <img class="image" :src="item.image" alt="" />
                        </div>
                        <div class="item-2">{{ item.title }}</div>
                        <div class="item-3">
                            <span>¥{{ item.price }}</span>
                            <img src="@/assets/car.webp" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="body-2">
                <img class="image" src="@/assets/吃好点.webp" alt="" />
                <img class="image" src="@/assets/产地量贩.png" alt="" />
            </div>

            <!-- 时令 当季 tab栏 -->
            <van-sticky :offset-top="50">
                <van-tabs v-model:active="active">
                    <van-tab style="height: 100px" v-for="(item, index) in dataList2" :key="index"
                        :title="item.title"></van-tab>
                </van-tabs>
            </van-sticky>

            <van-list class="list" v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="list-item" v-for="(item, index) in list" :key="index">
                    <van-image width="100%" height="250" fit="fill" lazy-load :src="item">
                        <template v-slot:loading>
                            <van-loading type="spinner" size="20" />
                        </template>
                    </van-image>
                </div>
            </van-list>
        </div>
    </van-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 点击头部输入框跳转
const onClick = () => {
    console.log('sss')
    router.push({ path: '/searchView' })
}

//轮播图
const swiperImages = [
    'src/assets/banner-4.webp',
    'src/assets/banner-1.jpg',
    'src/assets/banner-2.webp',
    'src/assets/banner-3.webp'
]

//金刚区
const jingangImages = [
    { image: 'src/assets/jingang-1.webp', title: '水果蔬菜' },
    { image: 'src/assets/jingang-2.webp', title: '肉禽蛋品' },
    { image: 'src/assets/jingang-3.webp', title: '海鲜水产' },
    { image: 'src/assets/jingang-4.webp', title: '速食冷冻' },
    { image: 'src/assets/jingang-5.webp', title: '粮油米面' }
]

//金刚区
const dataList1 = [
    { image: 'src/assets/cezi.webp', title: '四川爱媛39号', price: '40.0' },
    { image: 'src/assets/jianzirou.webp', title: '上品黄牛腱子肉', price: '60.0' },
    { image: 'src/assets/juanxincai.webp', title: '有机蔬菜啵啵菜', price: '20.0' }
]

//
const active = ref(0)
const dataList2 = [
    { title: '全部', subTitle: '猜你喜欢', id: 1 },
    { title: '时令', subTitle: '当季优选', id: 2 },
    { title: '进口', subTitle: '国际直采', id: 3 },
    { title: '人气', subTitle: '大家在买', id: 4 }
]

const list: any = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

const onLoad = () => {
    setTimeout(() => {
        if (refreshing.value) {
            list.value = []
            refreshing.value = false
        }

        for (let i = 0; i < 6; i++) {
            list.value.push('src/assets/list-item-' + (i + 1) + '.png')
        }
        loading.value = false

        if (list.value.length >= 40) {
            finished.value = true
        }
    }, 1000)
}

const onRefresh = () => {
    // 清空列表数据
    finished.value = false

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true
    onLoad()
}
</script>
