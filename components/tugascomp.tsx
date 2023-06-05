import { CheckCircle, ClipboardCheck, Clock } from "lucide-react"

import { Badge } from "./ui/badge"

interface TugasComponentType {}

const TugasComponent = () => {
  return (
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
        <CheckCircle />
        Selesai
      </Badge>
    </div>
  )
}

export default TugasComponent
