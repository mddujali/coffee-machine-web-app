<script setup lang="ts">
import { useMachineStore } from '@/stores/machine'
import { computed } from 'vue'

const machineStore = useMachineStore()
const infoMessage = computed(() => machineStore.infoMessage)
const errorMessage = computed(() => machineStore.errorMessage)
const errors = computed(() => machineStore.errors)
</script>

<template>
  <div class="col-12 col-md-8">
    <div class="alert alert-info fade show" role="alert" v-if="infoMessage">
      {{ infoMessage }}
    </div>

    <!--    <div class="alert alert-success fade show" role="alert">-->
    <!--      Lorem ipsum dolor sit amet, consectetur adipiscing elit.-->
    <!--    </div>-->

    <div class="alert alert-danger fade show" role="alert" v-if="errorMessage">
      {{ errorMessage }}

      <ul class="mb-0">
        <template v-for="(item, index) in errors" :key="index">
          <li v-for="(value, key) in item" :key>
            {{ value }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
