"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GradientBar } from "@/components/ui/gardient-bar"
import Shade from "@/components/ui/shade"
import Triangle from "@/components/ui/triangle"
import Body from "@/components/body"

export default function IndexPage() {
  return (
    <div className="mx-auto w-full px-5 py-10 lg:w-4/6 lg:py-28">
      {/* header */}
      <div className="mx-auto flex w-full flex-col gap-6 text-center lg:gap-12">
        <h1 className="text-center text-4xl font-bold leading-relaxed lg:text-6xl lg:leading-snug">
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
        <p className="mx-auto text-lg text-neutral-400 lg:px-24">
          Unlock your potential and take charge of your fitness journey with our
          cutting-edge fitness program generator. Whether you&apos;re aiming to
          build strength, lose weight, or enhance your overall well-being, our
          intuitive app has you covered.
        </p>
        <Body />
        <Link href="/start">
          <Button
            size="lg"
            className="animate__animated animate__infinite animate__pulse mx-auto mt-16 w-60 rounded-full bg-gradient-primary py-7 text-xl shadow-lg"
          >
            Get Started
          </Button>
        </Link>
        <Triangle a={100} b={80} c={120} />{" "}
        <div
          className="flex flex-col"
          style={{
            width: "100%",
            margin: "0 auto",
            border: "1px solid #ccc",
          }}
        >
          <GradientBar
            colors={[
              { w: 20, color: "rgba(250,204,21,1)" },
              { w: 40, color: "rgba(74,222,128,1)" },
              { w: 20, color: "rgba(250,204,21,1)" },
              { w: 20, color: "rgba(251,146,60,1)" },
            ]}
            height={20}
          />
        </div>
        <div className="h-[50px]">
          <Shade
            labelColor="blue"
            colors={[
              { w: 20, color: "rgba(250,204,21,1)" },
              { w: 40, color: "rgba(74,222,128,1)" },
              { w: 20, color: "rgba(250,204,21,1)" },
              { w: 20, color: "rgba(251,146,60,1)" },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
