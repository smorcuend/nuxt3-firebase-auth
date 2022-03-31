import { applicationDefault, initializeApp } from 'firebase-admin/app'

const app = initializeApp({
  credential: applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
})

export default app