import { addDoc, collection } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "users"

export const addUsers = async (
  orgId: string,
  divisionId: string,
  name: string,
  email: string,
  password: string
) => {
  try {
    await addDoc(collection(db, collection_name), {
      orgId: orgId,
      divisionId: divisionId,
      name: name,
      email: email,
      password: password,
    })
  } catch (error) {
    console.log("Error adding user", error)
  }
}
