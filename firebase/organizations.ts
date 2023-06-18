import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "organizations"

// Menambahkan organisasi baru ke dalam database
export const addOrganization = async (name: string) => {
  try {
    await addDoc(collection(db, collection_name), { name })
  } catch (error) {
    console.log("error adding organization", error)
  }
}

// Mendapatkan daftar organisasi
export const getOrganizations = async () => {
  try {
    const orgQuery = await getDocs(collection(db, collection_name))
    const organizations = orgQuery.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log(organizations)
  } catch (error) {
    console.log("error getting organizations", error)
  }
}
