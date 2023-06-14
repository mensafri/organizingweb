"use client"

import React, { useEffect, useState } from "react"
import { addOrganization, getOrganizations } from "@/firebase/organizations"
import { addUsers } from "@/firebase/users"

export default function Acara() {
  const [org, setOrg] = useState("")
  const [div, setDiv] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeOrg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrg(e.target.value)
  }
  const handleChangeDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiv(e.target.value)
  }
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    getOrganizations()
  }, [name])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addOrganization(name)

    setOrg("")
    setDiv("")
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <form className="ml-9 mt-9 flex flex-col gap-8" onSubmit={handleSubmit}>
        <input
          type="text"
          value={org}
          onChange={handleChangeOrg}
          placeholder="OrgId"
        />
        <input
          type="text"
          value={div}
          onChange={handleChangeDiv}
          placeholder="divisionId"
        />
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="name"
        />
        <input
          type="text"
          value={email}
          onChange={handleChangeEmail}
          placeholder="email"
        />
        <input
          type="text"
          value={password}
          onChange={handleChangePassword}
          placeholder="password"
        />
        <button type="submit">Test</button>
      </form>
    </div>
  )
}
