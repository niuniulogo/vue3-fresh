
<style>
.v-enter-active {
    transition: all 0.3s ease;
}


.v-leave-active {
    transition: all 0.3s ease;
}

.v-enter-from {
    transform: translateX(100%);
    opacity: 0;
    position: absolute;
}

.v-leave-to {
    transform: translateX(100%);
    position: absolute;
    top: 0;
    opacity: 0;
}
</style>
<template>
    <!-- todo 添加过渡动画 -->


    <router-view v-slot="{ Component }">
        <transition>
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">

</script>
