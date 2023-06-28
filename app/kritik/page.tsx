import React from "react"
import Image from "next/image"
import KritikComp from "./KritikComp"

import kritik from "/public/images/kritik.png"

export default function Kritik() {
  return (
    <div className="ml-9 mt-9 flex flex-col gap-7">
      <div className="flex flex-row items-center rounded-2xl bg-[#0000FF26]">
        <Image src={kritik} alt="Kritik Logos" width={200} height={100} />
        <div>
          <h1 className="text-2xl text-[#0000C6]">KRITIK & SARAN</h1>
          <p className="text-[#0000FF80]">
            Terima dan baca semua kritik dan saran dari orang yang tidak anda
            ketahui.
          </p>
        </div>
        <div>
          <p className="text-[#0000FF80]">Total</p>
          <p className="text-[#0000FFB2]">26</p>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl bg-[#F5F5F5]">
        <div className="m-5 flex flex-row place-content-between">
          <h1>Kritik & Saran</h1>
          <h1>Tanggal</h1>
        </div>
        <KritikComp/>
        <KritikComp/>
        <KritikComp/>
        <KritikComp/>
        <KritikComp/>
      </div>
    </div>
  )
}
