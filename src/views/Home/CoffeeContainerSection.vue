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
    <div class="col-8">
      <select class="form-select py-4" style="padding-top: 1.8rem; padding-bottom: 1.8rem">
        <option value="" selected disabled>Select Container</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="col-4">
      <button type="button" class="btn btn-primary btn-lg w-100 py-4">Use</button>
    </div>
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
<script setup lang="ts"></script>
