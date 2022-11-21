import { useState } from '#app'
import { User } from '~~/models/User'

export default function () {
  return useState<User | null>('user', () => null)
}
