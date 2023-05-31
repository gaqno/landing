<template>
  <NuxtLayout>
    <LoadingComponent v-if="app.loading" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import LoadingComponent from "./components/loading-component.vue";
import { useAppStore } from "./store/app";
import "./global.css";

const app = useAppStore();

</script>
