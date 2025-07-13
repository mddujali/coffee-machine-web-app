<script setup lang="ts">
import UseContainerField from '@/components/UseContainerField.vue'
</script>

<template>
  <div class="row mb-4">
    <div class="col-8 align-self-center">
      <h4>Coffee</h4>
    </div>

    <div class="col-4">
      <button type="button" class="btn btn-primary btn-lg w-100 py-4">Add</button>
    </div>
  </div>

  <div class="row mb-4">
    <UseContainerField />
  </div>

  <div class="row mb-4">
    <div class="col-8">
      <input type="number" class="form-control py-4" placeholder="Enter quantity" />
    </div>

    <div class="col-4">
      <button type="button" class="btn btn-primary btn-lg w-100 py-4">Refill</button>
    </div>
  </div>
</template>
