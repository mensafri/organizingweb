import {
  GoogleAuthProvider,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth"
import {
  QueryDocumentSnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore"

import { addDivisions } from "./divisions"
import { db } from "./firebaseInit"

const collection_name: string = "users"

export const addUsers = async (
  orgName: string,
  divisionName: string,
  name: string,
  email: string,
  password: string
) => {
  try {
    await addDoc(collection(db, collection_name), {
      name: name,
      email: email,
      password: password,
    })
    await addDivisions(orgName, divisionName)
  } catch (error) {
    console.log("Error adding user", error)
  }
}
export const getUsers = async () => {
  try {
    const usersQuery = await getDocs(collection(db, collection_name))
    const users = usersQuery.docs.map((doc) => ({
      ...doc.data(),
    }))
    console.log(users)
  } catch (error) {
    console.log("error getting organizations", error)
  }
}

export const auth = getAuth();

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
  const userDocRef = doc(db, "users", userAuth.uid)

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
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
