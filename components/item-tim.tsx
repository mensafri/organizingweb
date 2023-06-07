import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

interface ItemTimType {
  nama: string
  jabatan: string
}

const ItemTim = ({ nama, jabatan }: ItemTimType) => {
  return (
    <div className="ml-5 flex flex-row">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="ml-4 flex flex-col">
        <p className="font-bold">{nama}</p>
        <p className="font-light">{jabatan}</p>
      </div>
    </div>
  )
}

export default ItemTim
