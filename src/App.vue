<style>
/* 路由切换动画 */
/* slide-left-transform */
.slide-left-leave-active,
.slide-left-enter-active {
    width: 100vw;
    height: 100vh;
    transition: all 0.25s;
    position: fixed;
    left: 0;
    top: 0;
}

/* 可能为enter失效，拆分为 enter-from和enter-to */
.slide-left-enter-from {
    opacity: 1;
    transform: translateX(100%);
}

.slide-left-enter-to {
    opacity: 1;
    height: 100vh;
    width: 100vw;
}

.slide-left-leave-to {
    opacity: 1;
    transform: translateX(-100%);
}

.slide-right-leave-active,
.slide-right-enter-active {
    width: 100vw;
    height: 100vh;
    transition: all 0.25s;
    position: fixed;
    left: 0;
    top: 0;
}

/* 可能为enter失效，拆分为 enter-from和enter-to */
.slide-right-enter-from {
    opacity: 1;
    transform: translateX(-100%);
}

.slide-right-enter-to {
    opacity: 1;
    height: 100vh;
    width: 100vw;
}

.slide-right-leave-to {
    opacity: 1;
    transform: translateX(100%);
}
</style>
<template>
    <!--  添加过渡动画 -->
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition as string || 'slide-left'" appear>
            <keep-alive :max="10">
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import EventEmitter from './utils/EventEmitter'

provide('eventBus1', new EventEmitter()) //定义事件总线
</script>
