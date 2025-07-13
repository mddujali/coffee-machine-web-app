<script setup lang="ts">
import { useMachineStore } from '@/stores/machine.ts'
import { ref } from 'vue'
import _ from 'lodash'

const props = defineProps<{ type: string }>()
const quantity = ref<number | null>()

const machineStore = useMachineStore()

const containerInuse =
  {
    coffee: machineStore.coffeeContainerInuse,
    water: machineStore.waterContainerInuse,
  }[props.type] || null

const handleRefillContainer = async (): Promise<void> => {
  machineStore.clearAlerts()

  const type = props.type

  if (!quantity.value) {
    const container = containerInuse ? containerInuse.name : type

    machineStore.errorMessage = `Please enter the quantity of the ${container} container you want to refill.`

    return
  }

  try {
    const response = await machineStore.refillContainer(type, quantity.value)

    if (_.get(response, 'status', null) === 200) {
      quantity.value = null
    }
  } catch (error: unknown) {
    console.error(error)
  }
}
</script>

<template>
  <div class="col-8">
    <input
      type="number"
      class="form-control py-4"
      placeholder="Enter quantity"
      v-model="quantity"
    />
  </div>

  <div class="col-4">
    <button
      type="button"
      class="btn btn-primary btn-lg w-100 py-4"
      @click="handleRefillContainer()"
    >
      Refill
    </button>
  </div>
</template>
