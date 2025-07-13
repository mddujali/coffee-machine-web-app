<script lang="ts" setup>
defineProps<{
  item: {
    key: string
    value: string
  }
}>()
</script>

<template>
  <button type="button" class="btn btn-primary btn-lg w-100 py-4">{{ item.value }}</button>
</template>
