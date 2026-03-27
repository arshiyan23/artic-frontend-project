<!-- App.vue -->
<template>
    <div :class="pageClass">
      <NuxtLoadingIndicator 
      height=10
      errorColor="repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)" 
      color="repeating-linear-gradient(to right,#E09235 0%,#E4C300 50%,#f6ca14 100%)"
      />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div> 
 
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Define a ref to manage popup visibility
const isPopupVisible = ref(false);

// Function to show the popup
const showPopup = () => {
  isPopupVisible.value = true;
};

// Function to close the popup
const closePopup = () => {
  isPopupVisible.value = false;
};

// Use useRoute to get the current route
const route = useRoute();

// Define a computed property for pageClass based on the route name
const pageClass = computed(() => {
  return route.name === 'supply-chain' ? 'supply-chain-page' : '';
  
});

// Access Nuxt app context
const { $bs } = useNuxtApp();

// Run onMounted lifecycle hook
onMounted(() => {
  try {
    // Initialize Bootstrap collapse component
    const collapse = new $bs.Collapse('#navbarSupportedContent');
    collapse.show();
  } 
  catch (e) {
    // console.log('Bootstrap error: ', e);
  }
});

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
.supply-chain-page header, .supply-chain-page .footermain {
  /* display: none; */
  background-color: white;
}
</style>
