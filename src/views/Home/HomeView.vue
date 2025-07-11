<script setup lang="ts"></script>

<template>
  <div class="container-fluid container-lg">
    <div class="min-vh-100 d-flex align-items-center justify-content-center">
      <div class="row w-100 justify-content-center">
        <div class="col-12 col-md-8">
          <div class="alert alert-info fade show" role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div class="alert alert-success fade show" role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div class="alert alert-danger fade show" role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div class="col-12 col-md-8">
          <h4>Select Coffee To Brew</h4>

          <div class="row mb-4">
            <div class="col-12 col-md-6 mb-4">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Espresso</button>
            </div>

            <div class="col-12 col-md-6 mb-4">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">
                Double Espresso
              </button>
            </div>

            <div class="col-12 col-md-6">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Ristretto</button>
            </div>

            <div class="col-12 col-md-6">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Americano</button>
            </div>
          </div>

          <hr />

          <div class="row mb-4">
            <div class="col-12">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Check Status</button>
            </div>
          </div>

          <hr />

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

          <hr />

          <div class="row mb-4">
            <div class="col-8 align-self-center">
              <h4>Water</h4>
            </div>

            <div class="col-4">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Add</button>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-8">
              <select class="form-select" style="padding-top: 1.8rem; padding-bottom: 1.8rem">
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

          <div class="row">
            <div class="col-8">
              <input type="number" class="form-control py-4" placeholder="Enter quantity" />
            </div>

            <div class="col-4">
              <button type="button" class="btn btn-primary btn-lg w-100 py-4">Refill</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
