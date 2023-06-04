import Link from "next/link"
import {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Loader,
  XCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function IndexPage() {
  return (
    <>
      {/* Tugas dan Poin */}
      <div className="mb-0 ml-10 mt-6  flex w-8/12 flex-col">
        <h1 className="text-4xl font-bold">Tugas</h1>
        <div className="flex flex-row justify-between">
          <p className="font-light">Menampilkan semua tugas dari organisasi</p>
          <Link href="tugas">Lihat Semua</Link>
        </div>
        <div className="mt-4 rounded-xl bg-[#F5F5F5]">
          <div className="m-4 grid grid-cols-4 place-items-stretch gap-5">
            <div className="rounded-xl bg-[#FF5252] p-5">
              <Badge variant="secondary" className="flex flex-row">
                <XCircle />
                Belum
              </Badge>
              <p className="text-xl">
                <span className="text-6xl">6</span> Tugas
              </p>
            </div>
            <div className="rounded-xl bg-[#FFFF6E] p-5">
              <Badge variant="secondary" className="flex flex-row">
                <Loader />
                Proses
              </Badge>
              <p className="text-xl">
                <span className="text-6xl">6</span> Tugas
              </p>
            </div>
            <div className="rounded-xl bg-[#00BA00] p-5">
              <Badge variant="secondary" className="flex flex-row">
                <CheckCircle2 />
                Selesai
              </Badge>
              <p className="text-xl">
                <span className="text-6xl">6</span> Tugas
              </p>
            </div>
            <div className="rounded-xl bg-[#FFFFFF] p-5">
              <Badge variant="secondary" className="flex flex-row">
                <XCircle />
                Belum
              </Badge>
              <p className="text-xl">
                <span className="text-6xl">6</span> Tugas
              </p>
            </div>
          </div>
          <p className="mb-2 ml-4 mt-0  text-xl">Tugas Saya</p>
          <div className="m-4 grid grid-cols-5 gap-5">
            <div className="col-span-2 flex flex-col rounded-xl bg-[#FFFFFF] p-4">
              <div className="flex flex-row">
                <ClipboardCheck />
                Membuat Pamflet Hari Pancasila
              </div>
              <div className="flex flex-row">
                <Clock />2 Juni 2023
              </div>
              Status
              <Badge variant="secondary" className="flex flex-row">
                <CheckCircle2 />
                Selesai
              </Badge>
            </div>
            <div className="col-span-2 flex flex-col rounded-xl bg-[#FFFFFF] p-4">
              <div className="flex flex-row">
                <ClipboardCheck />
                Membuat Pamflet Hari Pancasila
              </div>
              <div className="flex flex-row">
                <Clock />2 Juni 2023
              </div>
              Status
              <Badge variant="secondary">
                <Loader />
                Proses
              </Badge>
            </div>
            <div className="flex flex-col rounded-xl bg-[#FFFFFF] p-6"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold">Poin</h1>
        <div className="flex flex-row justify-between">
          <p className="font-light">
            Menampilkan poin pelanggaran selama menjabat
          </p>
          <Link href="poin">Lihat Semua</Link>
        </div>
      </div>

      {/* Acara dan Tim */}
      <div></div>
    </>
  )
}
