<!-- App.vue -->
<template>
    <div :class="pageClass">
      <NuxtLoadingIndicator 
      :height="10"
      errorColor="repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)" 
      color="repeating-linear-gradient(to right,#E09235 0%,#E4C300 50%,#f6ca14 100%)"
      />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div> 
 
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const nuxtApp = useNuxtApp();
let loaderHideTimer: ReturnType<typeof setTimeout> | null = null;

const pageClass = computed(() => {
  return route.path.startsWith('/supply-chain') ? 'supply-chain-page' : '';
});

const showLoader = () => {
  if (loaderHideTimer) {
    clearTimeout(loaderHideTimer);
    loaderHideTimer = null;
  }
  document.documentElement.classList.add('artic-is-loading');
};

const hideAfterPagePaint = async () => {
  await nextTick();
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      loaderHideTimer = setTimeout(() => {
        document.documentElement.classList.remove('artic-is-loading');
        loaderHideTimer = null;
      }, 150);
    });
  });
};

nuxtApp.hook('page:start', showLoader);
nuxtApp.hook('page:finish', hideAfterPagePaint);
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
.supply-chain-page header,
.supply-chain-page .footermain {
  /* display: none; */
  background-color: white;
}
</style>
