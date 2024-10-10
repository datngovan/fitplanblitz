"use client"

// imports
import { useContext, useEffect, useState } from "react"
import { useStepsStore } from "@/store/store"
import { PiSpinnerGap } from "react-icons/pi"

import type { breakpointType, roadType } from "@/types/type"

import Road from "./road"
import { Button } from "./ui/button"

export default function StepBar({
  generateProgram,
  is_loading,
}: {
  generateProgram: () => {}
  is_loading: boolean
}) {
  // variables
  const is_next_btn = useStepsStore((state) => state.is_next_btn)
  const is_previous_btn = useStepsStore((state) => state.is_previous_btn)
  const nextStep = useStepsStore((state) => state.nextStep)
  const previousStep = useStepsStore((state) => state.previousStep)
  const step_num = useStepsStore((state) => state.step_num)
  const is_generate_btn = useStepsStore((state) => state.is_generate_btn)
  const steps_list = useStepsStore((state) => state.steps_list)
  const is_blocked = useStepsStore((state) => state.is_blocked)
  // breakpoints

  const initial_breakpoints: breakpointType[] = steps_list.map((elt: any) => ({
    id: elt.id,
    icon: <span>{elt.icon}</span>,
    status: "not_done",
  }))

  // Road object
  const initial_road: roadType = {
    breakpoints: initial_breakpoints,
    current_breakpoint: initial_breakpoints[0],
    start_icon: <span>🚀</span>,
    finish_icon: <span>⛳️</span>,
  }
  const [road, setRoad] = useState<roadType>(initial_road)
  const [breakpoints, setBPs] = useState<breakpointType[]>(initial_breakpoints)

  // functions
  useEffect(() => {
    setRoad({
      ...road,
      breakpoints,
      current_breakpoint: breakpoints[step_num],
    })
  }, [breakpoints, step_num])

  // returns
  if (is_loading) {
    return (
      <div className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center border-t-2 bg-white bg-opacity-50 px-8 py-3 backdrop-blur-md">
        <div className="mx-auto animate-spin text-4xl">
          <PiSpinnerGap />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`fixed bottom-0 left-0 z-50 flex w-full border-t-2 bg-white bg-opacity-50 px-8 py-3 backdrop-blur-md ${
        !is_previous_btn && is_next_btn ? "justify-end" : "justify-between"
      }`}
    >
      {is_previous_btn && (
        <Button
          onClick={() => {
            previousStep()
            setRoad({
              ...road,
              current_breakpoint: breakpoints[step_num - 1],
            })
          }}
          variant="secondary"
          className="text-lg lg:w-32 lg:py-6 xl:w-40 xl:py-7 xl:text-xl 2xl:w-44 2xl:py-8"
        >
          👈 Previous
        </Button>
      )}
      <Road data={road} />
      {is_next_btn && (
        <Button
          disabled={is_blocked}
          onClick={() => {
            nextStep()
            setBPs(
              breakpoints.map((breakpoint, index) => {
                if (index === step_num) {
                  return {
                    ...breakpoint,
                    status: "done",
                  }
                }
                return breakpoint
              })
            )
          }}
          className={`animate__animated text-lg lg:w-32 lg:py-6 xl:w-40 xl:py-7 xl:text-xl 2xl:w-44 2xl:py-8 ${
            is_blocked ? "" : "animate__pulse"
          } animate__infinite`}
        >
          Next 👉
        </Button>
      )}
      {is_generate_btn && (
        <Button
          onClick={generateProgram}
          className="text-lg lg:w-32 lg:py-6 xl:w-40 xl:py-7 xl:text-xl 2xl:w-44 2xl:py-8"
        >
          Let&apos;s Go 🚀
        </Button>
      )}
    </div>
  )
}
