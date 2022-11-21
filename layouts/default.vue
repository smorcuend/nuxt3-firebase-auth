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
    <Toast />
  </div>
</template>
