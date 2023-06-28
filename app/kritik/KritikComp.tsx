import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

import sampah from "/public/images/sampah.svg"

export default function KritikComp() {
  return (
    <div className="m-2 flex flex-row items-center gap-5 rounded-lg bg-[#FFFFFF] p-2">
      <p>
        Maaf kak, kalo bisa kita sering sering kumpul kak makan makan gitu, aku
        kan ...
      </p>
      <p>15 Juli 2023</p>
      <Button variant="ghost">
        <Image src={sampah} alt="Kritik Logos" width={15} height={15} />
      </Button>
    </div>
  )
}
