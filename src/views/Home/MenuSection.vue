<script setup lang="ts">
import MenuButton from '@/components/MenuButton.vue'

const items = [
  {
    key: 'espresso',
    value: 'Espresso',
  },
  {
    key: 'double_espresso',
    value: 'Double Espresso',
  },
  {
    key: 'ristretto',
    value: 'Ristretto',
  },
  {
    key: 'americano',
    value: 'Americano',
  },
] as const
</script>

<template>
  <h4>Select Coffee To Brew</h4>

  <div class="row mb-4">
    <div
      v-for="item in items"
      :key="item.key"
      class="col-12 col-md-6"
      :class="{ 'mb-4': !['ristretto', 'americano'].includes(item.key) }"
    >
      <MenuButton :item />
    </div>
  </div>
</template>
