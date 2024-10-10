"use client"

// imports
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useStepsStore } from "@/store/store"

import BasicInfoCard from "@/components/basic-information"
import FitGoal from "@/components/fit-goal"
import Loader from "@/components/loader"
import SleepCard from "@/components/sleep"
import StepBar from "@/components/step-bar"

export default function Home() {
  // variables
  const step_num = useStepsStore((state) => state.step_num)
  const loadComponent = useStepsStore((state) => state.loadComponent)
  const steps_list = useStepsStore((state) => state.steps_list)
  const getAllAnswers = useStepsStore((state) => state.getAllAnswers)
  const [is_loading, setIsLoading] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false) // For client-side check
  const router = useRouter() // Use router after mount check

  // Check if the component is mounted
  useEffect(() => {
    setIsMounted(true) // Only after the component is mounted
    loadComponent("BasicInfoCard", BasicInfoCard)
    loadComponent("FitGoal", FitGoal)
    loadComponent("SleepCard", SleepCard)
  }, [])

  const generateProgram = async () => {
    if (!isMounted) return // Only use router after the component has mounted

    try {
      setIsLoading(true)
      // Navigate to the program page
      router.push("/program/result") // Navigate using the router after mounting
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const getStepComponent = () => {
    const { title, description, id, component: Card } = steps_list[step_num]

    if (Card) return <Card id={id} title={title} description={description} />
    return <Loader />
  }

  // returns
  return (
    <div className="mx-auto w-full px-1 lg:w-3/4 2xl:w-2/4">
      <StepBar generateProgram={generateProgram} is_loading={is_loading} />
      {getStepComponent()}
    </div>
  )
}
