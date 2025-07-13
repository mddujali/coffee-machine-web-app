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

const isCheckingStatus = computed(() => machineStore.isCheckingStatus)
const isBrewingCoffee = computed(() => machineStore.isBrewingCoffee)
const isSettingContainer = computed(() => machineStore.isSettingContainer)
const isRefilling = computed(() => machineStore.isRefilling)

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
    :disabled="isCheckingStatus || isBrewingCoffee || isSettingContainer || isRefilling"
  >
    {{ item.value }}
  </button>
</template>
