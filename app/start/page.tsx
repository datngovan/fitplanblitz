"use client"

// imports
import { useEffect, useState } from "react"
import { useStepsStore } from "@/store/store"

import BasicInfoCard from "@/components/basic-information"
import FitGoal from "@/components/fit-goal"
import Loader from "@/components/loader"
import MedicalCard from "@/components/medical"
import SleepCard from "@/components/sleep"
import StepBar from "@/components/step-bar"

export default function Start() {
  // variables
  const step_num = useStepsStore((state) => state.step_num)
  const loadComponent = useStepsStore((state) => state.loadComponent)
  const steps_list = useStepsStore((state) => state.steps_list)
  const getAllAnswers = useStepsStore((state) => state.getAllAnswers)
  const [is_loading, setIsLoading] = useState<boolean>(false)

  // functions
  useEffect(() => {
    loadComponent("BasicInfoCard", BasicInfoCard)
    loadComponent("FitGoal", FitGoal)
    loadComponent("SleepCard", SleepCard)
    // loadComponent("MedicalCard", MedicalCard)
  }, [])
  const generateProgram = async () => {
    try {
      setIsLoading(true)
      const response = await getAllAnswers()
    } catch (err) {
      console.log(err)
    }
  }

  const getStepComponent = () => {
    const { title, description, id, component: Card } = steps_list[step_num]

    if (Card) return <Card id={id} title={title} description={description} />
    return <Loader />
  }
  // returns
  return (
    <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
      <StepBar generateProgram={generateProgram} is_loading={is_loading} />
      {getStepComponent()}
    </div>
  )
}
