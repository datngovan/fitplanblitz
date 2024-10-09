"use client"

// imports
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuBurger,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Icons } from "./icons"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export default function Navbar({ className }: { className: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`flex py-6 justify-between items-center ${className} w-full`}
    >
      {/* LOGO */}
      <div className="w-36 md:w-40 xl:w-60">
        <Link href="/">
          <Icons.logo width="150" height="50" />
        </Link>
      </div>

      {/* BURGER MENU FOR SMALL SCREENS */}
      <div className="md:hidden">
        <button
          onClick={() => {
            setOpen(!open)
            console.log(open)
          }}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* LINKS */}
      <NavigationMenu className="justify-between mx-auto w-2/6 hidden md:flex">
        <NavigationMenuList>
          {/* HOME */}
          <NavigationMenuItem>
            <Link href="/">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover:bg-neutral-100"
                size="lg"
              >
                Home
              </Button>
            </Link>
          </NavigationMenuItem>

          {/* ABOUT */}
          <NavigationMenuItem>
            <Link href="/about">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover:bg-neutral-100"
                size="lg"
              >
                About
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <NavigationMenuBurger>
            <NavigationMenuList className="flex flex-col items-center space-y-4 p-4">
              {/* HOME */}
              <NavigationMenuItem>
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="text-lg font-semibold rounded-xl w-full hover:bg-neutral-100"
                    size="lg"
                    onClick={() => setOpen(false)} // Close menu on click
                  >
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>

              {/* ABOUT */}
              <NavigationMenuItem>
                <Link href="/about">
                  <Button
                    variant="ghost"
                    className="text-lg font-semibold rounded-xl w-full hover:bg-neutral-100"
                    size="lg"
                    onClick={() => setOpen(false)} // Close menu on click
                  >
                    About
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuBurger>
        </div>
      )}
      {/* BUTTON */}
      <div className="w-36 md:w-40 xl:w-60 hidden md:flex justify-end gap-2 items-center">
        <Link href="/start">
          <Button
            size="lg"
            className="rounded-3xl bg-gradient-primary hover:bg-gradient-hover"
          >
            Get Started
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  )
}
