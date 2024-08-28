import Link from "next/link"
import { DarkModeToggle } from "./DarkModeToggle"
import { menuItems } from "@/data/menu-items"

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-3 ">
      <Link href='/' className="dark:bg-gray-800 bg-gray-200 hover:brightness-90 rounded-full p-3">JM</Link>
      <div className="flex flex-row gap-x-3">
        {
          menuItems.map(item => (
            <Link key={item.name} className="rounded-lg dark:hover:bg-gray-800 hover:bg-gray-200 px-3 py-2" href={item.url}>{item.name}</Link>
          ))
        }
      </div>
      <DarkModeToggle />
    </header>
  )
}
