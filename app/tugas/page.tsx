import React from "react"
import { XCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import DialogTugas from "@/components/dialog-tugas"
import TugasComponent from "@/components/tugascomp"

export default function Tugas() {
  return (
    <div className="mb-0 ml-11 mt-6  flex w-11/12 flex-col">
      <h1 className="text-3xl font-bold">Tugas</h1>
      <div className="flex flex-row justify-between">
        <p className="font-light">Menampilkan semua tugas dari organisasi</p>
        <DialogTugas />
      </div>
      <div className="mt-4 flex flex-col rounded-xl bg-[#F5F5F5] ">
        {/* Tugas Belum Selesai */}
        <div className="mx-12 mt-5 flex flex-row justify-around">
          <div className="rounded-xl bg-[#FF5252] p-5">
            <Badge variant="secondary" className="flex flex-row">
              <XCircle />
              Belum
            </Badge>
            <p className="text-xl">
              <span className="text-6xl">6</span> Tugas
            </p>
          </div>
          <div className="h-32 w-1 rounded-xl bg-[#FF5252]"></div>
          <TugasComponent />
          <TugasComponent />
          <TugasComponent />
        </div>
        {/* Tugas Proses */}
        <div className="mx-12 my-5 flex flex-row justify-around">
          <div className="rounded-xl bg-[#FFFF6E] p-5">
            <Badge variant="secondary" className="flex flex-row">
              <XCircle />
              Belum
            </Badge>
            <p className="text-xl">
              <span className="text-6xl">6</span> Tugas
            </p>
          </div>
          <div className="h-32 w-1 rounded-xl bg-[#FFFF6E]"></div>
          <TugasComponent />
          <TugasComponent />
          <TugasComponent />
        </div>
        {/* Tugas Selesai */}
        <div className="mx-12 mb-5 flex flex-row justify-around">
          <div className="rounded-xl bg-[#00BA00] p-5">
            <Badge variant="secondary" className="flex flex-row">
              <XCircle />
              Belum
            </Badge>
            <p className="text-xl">
              <span className="text-6xl">6</span> Tugas
            </p>
          </div>
          <div className="h-32 w-1 rounded-xl bg-[#00BA00]"></div>
          <TugasComponent />
          <TugasComponent />
          <TugasComponent />
        </div>
      </div>
    </div>
  )
}
