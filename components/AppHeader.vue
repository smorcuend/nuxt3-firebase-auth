<template>
  <div class="flex justify-content-center flex-wrap">
    <img
      alt="Logo Nuxt"
      :src="'/logo.svg'"
      class="logo flex align-items-center justify-content-center"
    />
    <span class="plus flex align-items-center justify-content-center">+</span>
    <img
      alt="Logo Firebase"
      :src="'/firebase.svg'"
      class="logo flex align-items-center justify-content-center"
    />
    <div class="col-12 mt-1 xl:mt-0 text-center">
      <h1>Nuxt3 + Firebase9 Auth demo</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
<style>
.logo {
  width: 200px;
}
.plus {
  color: black;
  font-weight: 900;
  font-size: 3rem;
  padding: 0 1rem 0 2rem;
}
</style>
