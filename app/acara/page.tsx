"use client"

import React, { useEffect, useState } from "react"
import { addOrganization, getOrganizations } from "@/firebase/organizations"
import { addUsers, getUsers } from "@/firebase/users"

export default function Acara() {
  const [orgName, setOrgName] = useState("")
  const [divname, setDivname] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    getUsers()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addUsers(orgName, divname, name, email, password)

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
          value={orgName}
          onChange={(e) => {
            setOrgName(e.target.value)
          }}
          placeholder="Nama Organization"
        />
        <input
          type="text"
          value={divname}
          onChange={(e) => {
            setDivname(e.target.value)
          }}
          placeholder="Nama Division"
        />
        <input
          type="text"
          value={name}
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
