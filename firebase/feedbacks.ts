import { addDoc, collection } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "feedbacks"

export const addFeedback = async (
  senderId: string,
  receiverId: string,
  content: string
) => {
  try {
    await addDoc(collection(db, collection_name), {
      senderId,
      receiverId,
      content,
    })
  } catch (error) {
    console.log("error adding feedback", error)
  }
}
