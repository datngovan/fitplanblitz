"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="w-full px-5 lg:w-4/6 mx-auto py-10 lg:py-28">
      {/* header */}
      <div className="flex flex-col gap-6 lg:gap-12 text-center w-full mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-center leading-relaxed lg:leading-snug">
          Create a Full{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Fitness Program
          </span>{" "}
          <span>💪</span>
          in{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            30
          </span>{" "}
          seconds ⏱
        </h1>

        <p className="text-lg text-neutral-400 lg:px-24 mx-auto">
          Unlock your potential and take charge of your fitness journey with our
          cutting-edge fitness program generator. Whether you&apos;re aiming to
          build strength, lose weight, or enhance your overall well-being, our
          intuitive app has you covered.
        </p>

        <Link href="/start">
          <Button
            size="lg"
            className="w-60 mt-16 py-7 text-xl animate__animated animate__infinite animate__pulse rounded-full shadow-lg mx-auto bg-gradient-primary"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}
