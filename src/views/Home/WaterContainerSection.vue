<script setup lang="ts">
import UseContainerField from '@/components/UseContainerField.vue'
import RefillContainerField from '@/components/RefillContainerField.vue'
</script>

<template>
  <div class="row mb-4">
    <div class="col-8 align-self-center">
      <h4>Water</h4>
    </div>

    <div class="col-4">
      <button type="button" class="btn btn-primary btn-lg w-100 py-4">Add</button>
    </div>
  </div>

  <div class="row mb-4">
    <UseContainerField />
  </div>

  <div class="row">
    <RefillContainerField />
  </div>
</template>
