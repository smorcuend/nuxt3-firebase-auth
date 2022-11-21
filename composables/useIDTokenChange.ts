import type { Unsubscribe } from 'firebase/auth'
import formatUser from '~/helpers/format-user'
import useUser from './useUser'

/**
 * Sets user composable and token cookie value
 * based on sign-in, sign-out, and token refresh events.
 */
export default function () {
  const { $firebaseAuth } = useNuxtApp()
  const token = useCookie('token')

  const firebaseUser = useUser()

  let unsubscribe: Unsubscribe

  onMounted(() => {
    unsubscribe = $firebaseAuth.onIdTokenChanged(async user => {
      if (user) {
        token.value = await user.getIdToken()
        firebaseUser.value = formatUser(user)
      } else {
        token.value = null
        firebaseUser.value = null
      }
    })
  })

  onUnmounted(() => {
    unsubscribe?.()
  })
}
