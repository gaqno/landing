<template>
  <NuxtLayout>
    <LoadingComponent v-if="app.loading" />
    <NuxtPage
      :transition="{
        name: 'my',
        mode: 'out-in',
        onBeforeEnter
      }"
    />
  </NuxtLayout>
</template>

<script setup>
import LoadingComponent from "./components/loading-component.vue";
import { useAppStore } from "./store/app";
import "./global.css";

const app = useAppStore();
const { finalizePendingLocaleChange } = useI18n();

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};

useHead({ title: "Gabriel Aquino" });
definePageMeta({
  title: "Gabriel Aquino",
  description: "Gabriel Aquino, Software Engineer",
  image: "https://landing-gaqno.vercel.app/static/logo.png",
  url: "https://landing-gaqno.vercel.app",
});

</script>

<style>
.my-enter-active,
.my-leave-active {
  transition: opacity 0.3s;
}

.my-enter,
.my-leave-active {
  opacity: 0;
}
</style>
