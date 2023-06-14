import { addDoc, collection } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "divisions"

export const addDivisions = async (orgId: string, name: string) => {
  try {
    await addDoc(collection(db, collection_name), {
      orgId: orgId,
      name: name,
    })
  } catch (error) {
    console.log("error adding division", error)
  }
}

export const getDivisionsByOrgId = async (orgId: string) => {

}
