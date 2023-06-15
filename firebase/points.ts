import { addDoc, collection } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "points"

export const addPoint = async (
  userId: string,
  points: number,
  reason: string
) => {
  try {
    await addDoc(collection(db, collection_name), { userId, points, reason })
  } catch (error) {
    console.log("error adding feedback", error)
  }
}
