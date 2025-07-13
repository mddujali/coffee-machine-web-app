<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import api from '@/api'
import type { Container } from '@/types/Container.ts'
import { useMachineStore } from '@/stores/machine.ts'

const props = defineProps<{ type: string }>()

const containers = ref<Container[]>()
const selectedId = ref<number>()

const machineStore = useMachineStore()

const isCheckingStatus = computed(() => machineStore.isCheckingStatus)
const isBrewingCoffee = computed(() => machineStore.isBrewingCoffee)
const isSettingContainer = computed(() => machineStore.isSettingContainer)
const isRefilling = computed(() => machineStore.isRefilling)

const containerInuse =
  {
    coffee: machineStore.coffeeContainerInuse,
    water: machineStore.waterContainerInuse,
  }[props.type] || null

onMounted(async () => {
  const response = await api.get('/machine/containers', { params: { type: props.type } })
  const { data } = response.data

  containers.value = data

  selectedId.value = containerInuse ? containerInuse.id : undefined
})

const handleUseContainer = async (): Promise<void> => {
  if (!selectedId.value) {
    return
  }

  try {
    await machineStore.useContainer(selectedId.value, props.type)
  } catch (error: unknown) {
    console.error(error)
  }
}
</script>

<template>
  <div class="col-8">
    <select
      class="form-select py-4"
      style="padding-top: 1.8rem; padding-bottom: 1.8rem"
      v-model="selectedId"
    >
      <option value="" selected disabled>Select Container</option>
      <option v-for="(item, index) in containers" :key="index" :value="+item.id">
        {{ item.name }}
      </option>
    </select>
  </div>

  <div class="col-4">
    <button
      type="button"
      class="btn btn-primary btn-lg w-100 py-4"
      @click="handleUseContainer()"
      :disabled="isCheckingStatus || isBrewingCoffee || isSettingContainer || isRefilling"
    >
      Use
    </button>
  </div>
</template>
