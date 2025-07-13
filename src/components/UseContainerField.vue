<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '@/api'
import type { Container } from '@/types/Container.ts'

const props = defineProps<{ type: string }>()

const containers = ref<Container[]>()

onMounted(async () => {
  const response = await api.get('/machine/containers', { params: { type: props.type } })
  const { data } = response.data

  containers.value = data
})
</script>

<template>
  <div class="col-8">
    <select class="form-select py-4" style="padding-top: 1.8rem; padding-bottom: 1.8rem">
      <option value="" selected disabled>Select Container</option>
      <option v-for="(item, index) in containers" :key="index">{{ item.name }}</option>
    </select>
  </div>

  <div class="col-4">
    <button type="button" class="btn btn-primary btn-lg w-100 py-4">Use</button>
  </div>
</template>
