import { addDoc, collection } from "firebase/firestore"

import { db } from "./firebaseInit"
import { addOrganization } from "./organizations"

const collection_name: string = "divisions"

export const addDivisions = async (orgName: string, name: string) => {
  try {
    await addDoc(collection(db, collection_name), {
      name: name,
    })
    await addOrganization(orgName)
  } catch (error) {
    console.log("error adding division", error)
  }
}

export const getDivisionsByOrgId = async (orgId: string) => {}
