import type { DecodedIdToken } from 'firebase-admin/auth'
import type { User } from 'firebase/auth'

export default function formatUser(user: User | DecodedIdToken) {
  return {
    uid: user.uid,
    email: user.email || ''
  }
}
