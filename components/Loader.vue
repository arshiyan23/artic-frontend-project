<template>
  <div v-if="loading" class="loader-overlay">
    <img src="/Loader.gif" alt="Loading..." class="loader-icon" />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader-icon {
  width: 180px; /* Adjust size as needed */
  height: 80px; /* Adjust size as needed */
}
</style>
