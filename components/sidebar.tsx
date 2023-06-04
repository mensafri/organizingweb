"use client"

import React from "react"
import Link from "next/link"
import {
  ClipboardCheck,
  Home,
  LogOutIcon,
  MessageSquareIcon,
  MinusCircleIcon,
  UsersIcon,
} from "lucide-react"

import { ThemeToggle } from "./theme-toggle"

interface ItemType {
  path: string
  title: string
  icon: JSX.Element
}

const Item = ({ path, title, icon }: ItemType) => {
  return (
    <Link href={path} className="flex flex-row gap-2">
      {icon}
      {title}
    </Link>
  )
}

export default function Sidebar() {
  return (
    <div className="flex h-screen w-56 flex-col items-center">
      <h1 className="mt-7 text-4xl ">Hima</h1>
      {/* Item Menu */}
      <div className="mt-9 flex flex-col gap-7 ">
        <p>Menu</p>
        <Item path="/" title="Beranda" icon={<Home />} />
        <Item path="tugas" title="Tugas" icon={<ClipboardCheck />} />
        <Item path="acara" title="Acara" icon={<UsersIcon />} />
        <Item path="tim" title="Tim" icon={<UsersIcon />} />
        <Item path="poin" title="Poin" icon={<MinusCircleIcon />} />
        <Item path="kritik" title="Kritik" icon={<MessageSquareIcon />} />
      </div>
      {/* Lainnya */}
      <div className="mt-20 flex flex-col gap-7 ">
        <p>Lainnya</p>
        <ThemeToggle />
        <Link href="/tugas" className="flex flex-row gap-2">
          <LogOutIcon />
          Keluar
        </Link>
      </div>
    </div>
  )
}
