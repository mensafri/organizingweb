import Link from "next/link"

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

export default ItemSidebar
