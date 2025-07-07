<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="min-vh-100 d-flex align-items-center justify-content-center">
      <div class="row w-100 justify-content-center">
        <div class="col-12 col-md-8">
          <div class="alert alert-success fade show" role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div class="alert alert-danger fade show" role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div class="col-12 col-md-8">
          <div class="row mb-4">
            <div class="col-12 col-md-6 mb-4 mb-md-0">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Espresso</button>
            </div>

            <div class="col-12 col-md-6">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">
                Double Espresso
              </button>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-12 col-md-6 mb-4 mb-md-0">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Ristretto</button>
            </div>

            <div class="col-12 col-md-6">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Americano</button>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-12">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Status</button>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-8">
              <input
                type="number"
                class="form-control form-control-lg py-4"
                placeholder="Enter coffee quantity"
              />
            </div>

            <div class="col-4">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Refill Coffee</button>
            </div>
          </div>

          <div class="row">
            <div class="col-8">
              <input
                type="number"
                class="form-control form-control-lg py-4"
                placeholder="Enter water quantity"
              />
            </div>

            <div class="col-4">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Refill Water</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
