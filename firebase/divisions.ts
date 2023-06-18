import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

import { db } from "./firebaseInit"
import { addOrganization } from "./organizations"

const collection_name: string = "divisions"

export const checkDivisions = async (name: string) => {
  const q = query(collection(db, "divisions"), where("name", "==", name))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.length
}

export const checkOrgs = async (name: string) => {
  const q = query(collection(db, "organizations"), where("name", "==", name))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.length
}

export const addDivisions = async (orgName: string, name: string) => {
  const divisionExists = await checkDivisions(name)
  const orgsExist = await checkOrgs(orgName)
  if (!divisionExists && !orgsExist) {
    try {
      await addDoc(collection(db, collection_name), {
        orgName: orgName,
        name: name,
      })
      await addOrganization(orgName)
    } catch (error) {
      console.log("error adding division", error)
    }
  } else if (!divisionExists && orgsExist) {
    try {
      await addDoc(collection(db, collection_name), {
        orgName: orgName,
        name: name,
      })
    } catch (error) {
      console.log("error adding division", error)
    }
  }
}
