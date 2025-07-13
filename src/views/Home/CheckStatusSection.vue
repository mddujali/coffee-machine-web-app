<script setup lang="ts">
import { useMachineStore } from '@/stores/machine'

const machineStore = useMachineStore()

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
      <button type="button" class="btn btn-primary btn-lg w-100 py-4" @click="handleCheckStatus()">
        Check Status
      </button>
    </div>
  </div>
</template>
