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

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    isVisible: boolean;
    url?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (event: 'close'): void;
}>();

const isOpen = computed({
    get: () => props.isVisible,
    set: (value: boolean) => {
        if (!value) {
            emit('close');
        }
    }
});

</script>

<style lang="scss" scoped>

</style>