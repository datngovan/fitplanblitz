"use client"

import { useState } from "react"
import Link from "next/link"
import { useCounterStore } from "@/store/store"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  const count = useCounterStore((state) => state.count)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col gap-2 items-center">
        <OtherComponent count={count} />
      </div>
    </section>
  )
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  )
}
