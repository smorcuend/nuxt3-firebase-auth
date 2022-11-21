import { initializeApp, getApps, getApp, App, applicationDefault, AppOptions, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

let firebaseAdminApp: App

const {
  FIREBASE_ADMIN_PROJECT_ID,
  FIREBASE_ADMIN_CLIENT_EMAIL,
  FIREBASE_ADMIN_PRIVATE_KEY,
  FIREBASE_ADMIN_STORAGE_BUCKET,
  GOOGLE_APPLICATION_CREDENTIALS
} = process.env

if (!getApps().length) {
  if (GOOGLE_APPLICATION_CREDENTIALS) {
    firebaseAdminApp = initializeApp({
      credential: applicationDefault(),
      storageBucket: FIREBASE_ADMIN_STORAGE_BUCKET
    })
  } else {
    const config: AppOptions = {
      credential: cert({
        projectId: FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
      storageBucket: FIREBASE_ADMIN_STORAGE_BUCKET,
    }
    firebaseAdminApp = initializeApp(config)
  }
} else {
  firebaseAdminApp = getApp()
}

export const auth = getAuth(firebaseAdminApp)
export const db = getFirestore(firebaseAdminApp)
export const storage = getStorage(firebaseAdminApp)
