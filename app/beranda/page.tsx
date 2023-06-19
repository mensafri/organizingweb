"use client"

import React, { useEffect, useState } from "react"
import { addDivisions, checkDivisions } from "@/firebase/divisions"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/firebase/users"

// import { addUsers, getUsers } from "@/firebase/users"

export default function Beranda() {
  const [namaOrg, setOrgName] = useState("")
  const [namaDiv, setDivname] = useState("")
  const [displayName, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {}, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await createAuthUserWithEmailAndPassword(email, password)
      const user = res?.user

      if (user) {
        await createUserDocumentFromAuth(user, {
          displayName,
          namaOrg,
          namaDiv,
        })
        addDivisions(namaOrg, namaDiv)
      }
    } catch (error) {
      console.log("error di signup", error)
    }

    setOrgName("")
    setDivname("")
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <form className="ml-9 mt-9 flex flex-col gap-8" onSubmit={handleSubmit}>
        <input
          type="text"
          value={namaOrg}
          onChange={(e) => {
            setOrgName(e.target.value)
          }}
          placeholder="Nama Organization"
        />
        <input
          type="text"
          value={namaDiv}
          onChange={(e) => {
            setDivname(e.target.value)
          }}
          placeholder="Nama Division"
        />
        <input
          type="text"
          value={displayName}
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="email"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="password"
        />
        <button type="submit">Test</button>
      </form>
    </div>
  )
}
