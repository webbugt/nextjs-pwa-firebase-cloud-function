import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const firebaseDB = firebaseApp.firestore()
// if (isClientSide()) firebase.analytics()

// Helpers
const docWithId = doc => ({ id: doc.id, ...doc.data() })

const getDocumentItem = async docRef => docWithId(await docRef.get())

const getCollectionItems = async collectionRef => {
    const collectionSnapshots = await collectionRef.get()
    const snapshots = []
    collectionSnapshots.forEach(snapshot => {
        snapshots.push(docWithId(snapshot))
    })
    return snapshots
}

// To avoid “cannot be serialized as JSON” error
const convertDates = doc => ({
    ...doc,
    dateCreated: doc.dateCreated ? doc.dateCreated.toDate().toString() : null,
    dateUpdated: doc.dateUpdated ? doc.dateUpdated.toDate().toString() : null
})

export {
    firebase,
    firebaseApp,
    firebaseDB,

    docWithId,
    getDocumentItem,
    getCollectionItems,

    convertDates
}
