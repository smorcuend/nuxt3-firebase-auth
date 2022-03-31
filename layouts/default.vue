<template>
  <div class="layout-main-container">
    <div class="layout-header">
      <AppHeader />
    </div>
    <div class="layout-main">
      <div class="grid">
        <div class="col-12">
          <slot />
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
  
<script setup lang="ts">
useIDTokenChange()
const showHideSpinner = ref(true)
// onBeforeMount(() =>{
//   showHideSpinner.value = false
// })
onMounted(() => {
  showHideSpinner.value = false
})
</script>
<style>
html,
body {
  font-family: "Lato", sans-serif;
}
:root {
  --error-color: brown;
  --success-color: teal;
}
</style>
