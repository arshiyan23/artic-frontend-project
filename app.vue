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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const pageClass = computed(() => {
  return route.path.startsWith('/supply-chain') ? 'supply-chain-page' : '';
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