import { addDoc, collection } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "schedules"

export const addSchedule = async (
  userId: string,
  dateTime: string,
  description: string,
  location: string
) => {
  try {
    await addDoc(collection(db, collection_name), {
      userId,
      dateTime,
      description,
      location,
    })
  } catch (error) {
    console.log("error adding feedback", error)
  }
}
