<template>
    <div>
        <UModal v-model="isOpen" class="globeModal" prevent-close>
            <h1>test pop up</h1>
        <!-- <div class="p-4">
            <div class="popupglob">
            <div class="flex items-center justify-between">
            <h1 class="fs-4 text-primary">{{ selectedMapData.name }}</h1>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        </div>
            <p>{{ selectedMapData.city }}, {{ selectedMapData.country }}</p>
            <p>{{ selectedMapData.lat }} , {{ selectedMapData.long }}</p>
            <a :href="selectedMapData.website?.uri" target="_blank" class="fs-6">Visit Website</a>
            </div>
        </div> -->
        </UModal>
    </div>
</template>

<script setup>

const props = defineProps<Props>();
  interface Props {
    isVisible: Boolean,
    url: String
}

// const props = defineProps({
//   isVisible: Boolean,
//   url: String,
// });

</script>

<style lang="scss" scoped>

</style>