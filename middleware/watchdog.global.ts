import useUser from "~~/composables/useUser";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser()
  console.log('user', user?.value, to.path, from.path)
  if (to.path === '/' && user.value) {
    return navigateTo('/private')
  }
  if (to.path === '/' && !user.value) {
    return navigateTo('/login')
  }
  if (!['/', '/login'].includes(to.path) && !user.value) {
    return navigateTo('/login')
  }
    // if (['/', 'login'].includes(to.path) && !user.value) {
    //   abortNavigation();
    // }
  //   return navigateTo('/')
})