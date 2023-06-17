import { addDoc, collection, getDocs } from "firebase/firestore"

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
