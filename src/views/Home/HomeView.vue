<script setup lang="ts">
import AlertSection from '@/views/Home/AlertSection.vue'
import MenuSection from '@/views/Home/MenuSection.vue'
import CheckStatusSection from '@/views/Home/CheckStatusSection.vue'
import CoffeeContainerSection from '@/views/Home/CoffeeContainerSection.vue'
import WaterContainerSection from '@/views/Home/WaterContainerSection.vue'
</script>

<template>
  <div class="container-fluid container-lg">
    <div class="min-vh-100 d-flex align-items-center justify-content-center">
      <div class="row w-100 justify-content-center">
        <AlertSection />

        <div class="col-12 col-md-8">
          <MenuSection />

          <hr />

          <CheckStatusSection />

          <hr />

          <CoffeeContainerSection />

          <hr />

          <WaterContainerSection />
        </div>
      </div>
    </div>
  </div>
</template>
