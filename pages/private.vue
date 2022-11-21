<template>
  <div class="grid">
    <div class="col-12">
      <div v-if="pending">Loading ...</div>
      <Card v-else class="text-center">
        <template #title>Welcome, {{ user?.email }}</template>
        <template #content>
          <div>{{ data }}</div>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Sign out" @click="signOut" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $firebaseAuth } = useNuxtApp()
const { pending, data } = await useLazyFetch('/api/protected')
const user = useUser()
const signOut = async () => {
  await $firebaseAuth.signOut()
  navigateTo('/')
}
</script>
