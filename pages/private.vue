<template>
  <div class="grid">
    <div class="col-12">
      <div v-if="pending">Loading ...</div>
      <Card class="text-center">
        <template #title>Welcome, {{ user.email }}</template>
        <template #content>
          <div>You can access to code here: <a href="https://github.com/smorcuend/nuxt3-firebase-auth">https://github.com/smorcuend/nuxt3-firebase-auth</a></div>
          <div v-for="d in data">{{ d }}</div>
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
const { pending, data } = await useLazyFetch<{ message: string }>('/api/protected')
const router = useRouter()
const user = useUser()
const signOut = async () => {
  await $firebaseAuth.signOut()
  router.push('/')
}
</script>