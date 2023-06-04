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

// import ItemSidebar from './sidebar'

interface ItemSidebarType {
  path: string
  title: string
  icon: JSX.Element
}

const ItemSidebar = ({ path, title, icon }: ItemSidebarType) => {
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
        <ItemSidebar path="/" title="Beranda" icon={<Home />} />
        <ItemSidebar path="tugas" title="Tugas" icon={<ClipboardCheck />} />
        <ItemSidebar path="acara" title="Acara" icon={<UsersIcon />} />
        <ItemSidebar path="tim" title="Tim" icon={<UsersIcon />} />
        <ItemSidebar path="poin" title="Poin" icon={<MinusCircleIcon />} />
        <ItemSidebar
          path="kritik"
          title="Kritik"
          icon={<MessageSquareIcon />}
        />
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
