"use client"

// imports
import { useEffect } from "react"
import { useStepsStore } from "@/store/store"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

export default function CardComponent({
  children,
  title,
  description,
}: {
  children: React.ReactNode
  title: string
  description: string
}) {
  // variables
  const animation = useStepsStore((state) => state.animation)

  // functions
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // returns
  return (
    <Card
      className={`animate__animated relative w-full space-y-6 border-0 bg-white bg-opacity-0 pb-20 shadow-none lg:space-y-12 xl:pb-28 ${animation}`}
    >
      <CardHeader>
        <CardTitle className="text-xl lg:text-3xl 2xl:text-4xl">
          {title}
        </CardTitle>
        <CardDescription className="lg:text-md text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex w-full flex-col gap-10 lg:gap-16">
        {children}
      </CardContent>
    </Card>
  )
}
