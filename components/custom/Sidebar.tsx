"use client"

import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { menuItems } from "@/data/menu-items"
import Link from "next/link"
import { useState } from "react"
import { DarkModeToggle } from "./DarkModeToggle"

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={'right'}>
        <div className="grid gap-6 p-6">
          {
            menuItems.map((item) => (
              <Link key={item.name} className="text-lg font-medium hover:text-gray-300"
                onClick={() => setOpen(false)}
                href={item.url}>
                {item.name}
              </Link>
            ))
          }
          <DarkModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
