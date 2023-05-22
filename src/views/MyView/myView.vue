<style lang="scss" scoped>
.top {
    width: 100%;
    height: 300px;
    background-image: url("src/assets/topbg.png");
    background-size: 100% 100%;

    .top-top {
        height: 150px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        padding-top: 60px;
        box-sizing: border-box;
    }

    .top-footer {
        display: flex;
        justify-content: space-around;

        .top-footer-item {
            text-align: center;
            color: #fff;
        }
    }
}

.my-order {
    text-align: center;
    margin-top: -60px;

    .image {
        width: 90%;
    }
}

.my-order-1 {
    text-align: center;
    margin-top: 20px;

    .image {
        width: 90%;
    }
}
</style>

<template>
    <div class="top">
        <div class="top-top">
            <div>
                <img src="src/assets/头像部分.png" alt="">
            </div>
            <div>
                <img src="src/assets/设置.png" alt="">
                <span style="width: 10px; opacity: 0;"> . </span>
                <img src="src/assets/客服.png" alt="">
            </div>
        </div>
        <div class="top-footer">
            <div class="top-footer-item">
                <div>500</div>
                <div>余额(元)</div>
            </div>
            <div class="top-footer-item">
                <div>5</div>
                <div>优惠券</div>
            </div>
            <div class="top-footer-item">
                <div>5</div>
                <div>电子券</div>
            </div>
            <div class="top-footer-item">
                <div>5000</div>
                <div>积分</div>
            </div>

        </div>
    </div>
    <div class="my-order">
        <img class="image" src="src/assets/我的订单.png" alt="">
    </div>

    <div class="my-order-1">
        <img class="image" src="src/assets/我的订单 (1).png" alt="">
    </div>

    <div>

    </div>
    <div>

    </div>
</template>

<script lang="ts" setup></script>
