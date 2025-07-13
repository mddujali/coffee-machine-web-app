<script setup lang="ts">
import { useMachineStore } from '@/stores/machine'
import { computed } from 'vue'

const props = defineProps<{
  item: {
    key: string
    value: string
  }
}>()

const machineStore = useMachineStore()

const isBrewingCoffee = computed(() => machineStore.isBrewingCoffee)

const handleBrewCoffee = async (): Promise<void> => {
  const type = props.item.key

  try {
    await machineStore.brewCoffee(type)
  } catch (error: unknown) {
    console.error(error)
  }
}
</script>

<template>
  <button
    type="button"
    class="btn btn-primary btn-lg w-100 py-4"
    @click="handleBrewCoffee()"
    :disabled="isBrewingCoffee"
  >
    {{ item.value }}
  </button>
</template>
