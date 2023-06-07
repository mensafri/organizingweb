import { X } from "lucide-react"
import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface ItemAcaraType {
  tgl: number
  bulan: string
  nama: string
  tempat: string
  waktu: string
}

const ItemAcara = ({ tgl, bulan, nama, tempat, waktu }: ItemAcaraType) => {
  return (
    <div className="flex flex-row">
      <div className="mr-4 flex flex-col items-center justify-center rounded-xl bg-[#FF5252] px-4 py-2 text-lg font-bold ">
        <p className="text-3xl">{tgl}</p>
        <p>{bulan}</p>
      </div>
      <div className="mr-4 flex flex-col">
        <h1 className="font-bold">{nama}</h1>
        <p className="mt-4 text-sm">{tempat}</p>
        <p className="text-sm">{waktu}</p>
      </div>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-10 rounded-full p-0">
                <X className="h-4 w-4" />
                <span className="sr-only">hapus</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Batalkan Acara</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

export default ItemAcara
