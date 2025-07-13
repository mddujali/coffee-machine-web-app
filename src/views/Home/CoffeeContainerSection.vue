<script setup lang="ts">
import UseContainerField from '@/components/UseContainerField.vue'
import RefillContainerField from '@/components/RefillContainerField.vue'

const type = 'coffee'
</script>

<template>
  <div class="row mb-4">
    <div class="col-8">
      <h4>Coffee</h4>
    </div>
  </div>

  <div class="row mb-4">
    <UseContainerField :type />
  </div>

  <div class="row mb-4">
    <RefillContainerField :type />
  </div>
</template>
