"use client"

import React, { useEffect, useState } from "react"
import { addDivisions } from "@/firebase/divisions"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/firebase/users"

import { DatePickerFix } from "@/components/datepicker"

// import { addUsers, getUsers } from "@/firebase/users"

export default function Beranda() {
  const [namaOrg, setOrgName] = useState("")
  const [namaDiv, setDivname] = useState("")
  const [displayName, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [time, setTime] = useState<string>("")

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value)
  }

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

  const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(time)
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
      <form className="m-7 p-5" onSubmit={handleSubmit2}>
        <DatePickerFix />
        <div className="m-10">
          <input type="time" value={time} onChange={handleTimeChange} />
        </div>
        <button type="submit">Test22</button>
      </form>
    </div>
  )
}
