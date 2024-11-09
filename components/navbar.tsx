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
      className={`flex items-center justify-between py-6 ${className} w-full`}
    >
      {/* LOGO */}
      <div className="w-36 md:w-40 xl:w-60">
        <Link href="/">
          <Icons.logo width="150" height="50" />
        </Link>
      </div>

      {/* BURGER MENU FOR SMALL SCREENS */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* NAVIGATION LINKS FOR DESKTOP */}
      <NavigationMenu className="hidden md:flex mx-auto w-2/6 justify-between">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <Button
                variant="ghost"
                className="rounded-xl text-lg font-semibold hover:bg-neutral-100"
                size="lg"
              >
                Home
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/program/result">
              <Button
                variant="ghost"
                className="rounded-xl text-lg font-semibold hover:bg-neutral-100"
                size="lg"
              >
                Result
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          {/* Blurred background */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar menu */}
          <div className="relative w-2/3 h-full bg-white shadow-lg p-6">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
              className="absolute top-4 right-4"
            >
              <X className="h-6 w-6" />
            </button>
            <NavigationMenuBurger>
              <NavigationMenuList className="space-y-6 mt-20">
                <NavigationMenuItem>
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full font-semibold text-3xl"
                    >
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/program/result" onClick={() => setOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full font-semibold text-3xl"
                    >
                      Result
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuBurger>
          </div>
        </div>
      )}

      {/* BUTTON & THEME TOGGLE FOR DESKTOP */}
      <div className="hidden w-36 items-center justify-end gap-2 md:flex md:w-40 xl:w-60">
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
