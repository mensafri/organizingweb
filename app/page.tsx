import Link from "next/link"
import {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Loader,
  XCircle,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import ItemAcara from "@/components/item-acara"
import ItemTim from "@/components/item-tim"

export default function IndexPage() {
  return (
    <>
      {/* Tugas dan Poin */}
      <div className="mb-0 ml-10 mt-6  flex w-8/12 flex-col">
        <h1 className="text-3xl font-bold">Tugas</h1>
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
        <h1 className="mt-2 text-3xl font-bold">Poin</h1>
        <div className="flex flex-row justify-between">
          <p className="font-light">
            Menampilkan poin pelanggaran selama menjabat
          </p>
          <Link href="poin">Lihat Semua</Link>
        </div>
        <div className="mt-4 flex flex-row justify-between rounded-xl bg-[#F5F5F5] p-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mr-52 flex flex-col">
            <p className="font-bold">Yefi Afiatul Ardhani</p>
            <p className="font-light">Ketua</p>
          </div>
          <div className="ml-96 rounded-xl bg-[#ffffff] px-4 py-2">0 Poin</div>
        </div>
      </div>

      {/* Acara dan Tim */}
      <div className="ml-16 p-5">
        <div className="flex flex-row justify-between">
          <p className="text-3xl font-bold">Acara</p>
          <Link href="acara">Lihat Semua</Link>
        </div>
        <div className="mt-4 grid grid-cols-1 justify-between gap-4 rounded-xl bg-[#F5F5F5] p-4">
          <ItemAcara
            tgl={5}
            bulan="Juni"
            nama="Kajian Sore"
            tempat="Kantin Unimus"
            waktu="16.00 am - Selesai"
          />
          <ItemAcara
            tgl={10}
            bulan="Juni"
            nama="Rapat Bid. PSDM"
            tempat="Burjo Kekynian"
            waktu="15.00 am - Selesai"
          />
          <ItemAcara
            tgl={27}
            bulan="Juni"
            nama="Futsal Bareng"
            tempat="Sport Center"
            waktu="18.00 am - Selesai"
          />
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-3xl font-bold">Tim</p>
          <Link href="tim">Lihat Semua</Link>
        </div>
        <div className="grid grid-cols-1 place-items-start justify-center gap-2 rounded-xl bg-[#F5F5F5] p-4">
          <ItemTim nama="Yefi Afiatul Ardhani" jabatan="Ketua" />
          <ItemTim nama="Taufikur Rohman" jabatan="Wakil Ketua" />
          <ItemTim nama="Moch Ichwan" jabatan="Sekretaris II" />
        </div>
      </div>
    </>
  )
}
