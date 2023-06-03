"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ClipboardCheck, Home } from "lucide-react"
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar"

// interface MenuItem {
//   title: string
//   path: string
//   icon: JSX.Element
//   selected: string
//   setSelected(selected: string): void
// }

const Item = ({ title, path, icon, selected, setSelected }: any) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link href={path}>
        <p>{title}</p>
      </Link>
    </MenuItem>
  )
}

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Beranda")

  return (
    <div className="">
      <ProSidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}>
            <h1>Hima</h1>
            <p>Menu</p>
          </MenuItem>
        </Menu>
        {/* Item Menu */}
        <div>
          <Item
            title="Beranda"
            path="/beranda"
            icon={<i className="fas fa-tachometer-alt"></i>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Tugas"
            path="/tugas"
            icon={<i className="fas fa-users"></i>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Acara"
            path="/acara"
            icon={<i className="fas fa-cog"></i>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Tim"
            path="/tim"
            icon={<i className="fas fa-sign-out-alt"></i>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Poin"
            path="/poin"
            icon={<i className="fas fa-sign-out-alt"></i>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Kritik"
            path="/kritik"
            icon={<i className="fas fa-sign-out-alt"></i>}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        {/* Lainnya */}
      </ProSidebar>
    </div>
  )
}
