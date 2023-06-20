import { User, createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { QueryDocumentSnapshot, doc, getDoc, setDoc } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "users"

export const auth = getAuth()

export type additionalInformation = {
  displayName?: string
  namaOrg: string
  namaDiv: string
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation: additionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return
  const userDocRef = doc(db, collection_name, userAuth.uid)

  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log("error di: ", error)
    }
  }

  // return userDocRef;
  return userSnapShot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
