<script setup lang="ts">
import { useMachineStore } from '@/stores/machine'
import { computed } from 'vue'

const machineStore = useMachineStore()

const isCheckingStatus = computed(() => machineStore.isCheckingStatus)
const isBrewingCoffee = computed(() => machineStore.isBrewingCoffee)
const isSettingContainer = computed(() => machineStore.isSettingContainer)
const isRefilling = computed(() => machineStore.isRefilling)

const handleCheckStatus = async (): Promise<void> => {
  try {
    await machineStore.checkStatus()
  } catch (error: unknown) {
    console.error(error)
  }
}
</script>

<template>
  <div class="row mb-4">
    <div class="col-12">
      <button
        type="button"
        class="btn btn-primary btn-lg w-100 py-4"
        @click="handleCheckStatus()"
        :disabled="isCheckingStatus || isBrewingCoffee || isSettingContainer || isRefilling"
      >
        Check Status
      </button>
    </div>
  </div>
</template>
