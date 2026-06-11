<!-- App.vue -->
<template>
    <div :class="pageClass">
      <div id="Siteloader" :class="{ 'is-hidden': !isLoaderVisible }" role="status" aria-label="Loading ARTIC website">
        <div class="flex flex-column gap-5 text-center align-items-center justify-content-center">
          <img class="img-fluid" src="/logow.svg" alt="ARTIC" />
          <div class="spinner-container">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
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
import { computed, nextTick, onBeforeUnmount, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const nuxtApp = useNuxtApp();
const isLoaderVisible = ref(true);
let loaderHideTimer: ReturnType<typeof window.setTimeout> | null = null;

const pageClass = computed(() => {
  return route.path.startsWith('/supply-chain') ? 'supply-chain-page' : '';
});

const showLoader = () => {
  if (loaderHideTimer) {
    window.clearTimeout(loaderHideTimer);
    loaderHideTimer = null;
  }
  isLoaderVisible.value = true;
};

const hideAfterPagePaint = async () => {
  await nextTick();
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      loaderHideTimer = window.setTimeout(() => {
        isLoaderVisible.value = false;
        loaderHideTimer = null;
      }, 150);
    });
  });
};

nuxtApp.hook('page:start', showLoader);
nuxtApp.hook('page:finish', hideAfterPagePaint);

onBeforeUnmount(() => {
  if (loaderHideTimer) window.clearTimeout(loaderHideTimer);
});
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
