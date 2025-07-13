<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useMachineStore } from '@/stores/machine'

const machineStore = useMachineStore()
const recipes = computed(() => machineStore.recipes)
const containers = computed(() => machineStore.containers)

onMounted(async () => {
  await machineStore.checkStatus()

  console.log(recipes.value)
  console.log(containers.value)
})
</script>

<template>
  <RouterView />
</template>
