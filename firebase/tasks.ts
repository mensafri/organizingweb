import { addDoc, collection } from "firebase/firestore"

import { db } from "./firebaseInit"

const collection_name: string = "tasks"

export const addTask = async (
  creatorId: string,
  assignedUsers: string[],
  description: string,
  status: string,
  deadline: string
) => {
  try {
    await addDoc(collection(db, collection_name), {
      creatorId,
      assignedUsers,
      description,
      status,
      deadline,
    })
  } catch (error) {
    console.log("error adding task", error)
  }
}
