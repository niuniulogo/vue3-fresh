

<template>
    <div style="margin: 90px auto; width: 40px; text-align: center;">
        <router-link to="/mySon">过度效果 </router-link>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter, useRoute } from 'vue-router'
const route = useRoute();
const router = useRouter();
</script>
