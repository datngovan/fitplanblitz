"use client"

// imports
import { useContext, useEffect, useState } from "react"
import { useStepsStore } from "@/store/store"
import Lottie from "lottie-react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import fireAnimation from "../public/animations/fire.json"
import healthAnimation from "../public/animations/health.json"
import strongAnimation from "../public/animations/strong.json"
import CardComponent from "./card"
import Picker from "./picker"
import { Input } from "./ui/input"

export default function FitGoal({
  title,
  description,
  id,
}: {
  title: string
  description: string
  id: string
}) {
  console.log(id)
  // variables
  const getAnswer = useStepsStore((state) => state.getAnswer)
  const updateAnswer = useStepsStore((state) => state.updateAnswer)
  const [answers, setAnswers] = useState<any>(getAnswer(id))

  // functions
  useEffect(() => {
    updateAnswer(id, answers)
  }, [answers])

  // returns
  return (
    <CardComponent title={title} description={description}>
      {/* Fitness goal */}
      <div className="flex flex-col space-y-3">
        <Label htmlFor="name" className="text-md lg:text-lg">
          Choose your fitness goal 🎯
        </Label>

        <RadioGroup
          defaultValue={answers.fitness_goal}
          onValueChange={(e) => setAnswers({ ...answers, fitness_goal: e })}
          className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3"
        >
          {/* Burn Fat */}
          <div className="col-span-1 size-full">
            <RadioGroupItem
              value="burn_fats"
              id="burn_fats"
              className="peer sr-only"
            />
            <Label
              htmlFor="burn_fats"
              className="flex h-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-2xl font-black hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-3xl [&:has([data-state=checked])]:border-primary"
            >
              Burn Fats
              <Lottie loop animationData={fireAnimation} className="w-14" />
              <span className="text-center text-sm font-normal text-neutral-400">
                Burn fats and lose weight
              </span>
            </Label>
          </div>

          {/* Cardiovascular Health */}
          <div className="col-span-1 size-full">
            <RadioGroupItem
              value="cardiovascular"
              id="cardiovascular"
              className="peer sr-only"
            />
            <Label
              htmlFor="cardiovascular"
              className="flex h-full cursor-pointer flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-2xl font-black hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-3xl [&:has([data-state=checked])]:border-primary"
            >
              Cardiovascular health
              <Lottie loop animationData={healthAnimation} className="w-14" />
              <span className="text-center text-sm font-normal text-neutral-400">
                Better heart health and blood vessels
              </span>
            </Label>
          </div>

          {/* build muscles */}
          <div className="col-span-1 size-full">
            <RadioGroupItem
              value="build_muscle"
              id="build_muscle"
              className="peer sr-only"
            />
            <Label
              htmlFor="build_muscle"
              className="flex h-full cursor-pointer flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-2xl font-black hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-3xl [&:has([data-state=checked])]:border-primary"
            >
              Build Muscles
              <Lottie loop animationData={strongAnimation} className="w-14" />
              <span className="text-center text-sm font-normal text-neutral-400">
                Burn fats and gain muscle
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <br />

      {/* days */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="age" className="text-md lg:text-lg">
          How many days a week are you willing to commit to your fitness routine
          🗓️ ?
        </Label>
        <Picker
          max={7}
          min={2}
          tag="Days per week"
          value={answers.workout_days}
          onAdd={() =>
            setAnswers({ ...answers, workout_days: answers.workout_days + 1 })
          }
          onRemove={() => {
            setAnswers({ ...answers, workout_days: answers.workout_days - 1 })
          }}
          onSlide={(e) => setAnswers({ ...answers, workout_days: e })}
        />
      </div>

      {/* active */}
      <div className="flex w-full flex-col space-y-1.5">
        <Label htmlFor="gender" className="text-md lg:text-lg">
          How active are you during the day 🏃‍♂️ ?
        </Label>
        <RadioGroup
          onValueChange={(e) => setAnswers({ ...answers, activity: e })}
          defaultValue={answers.activity}
          className="jfull grid w-full grid-cols-1 gap-4 lg:grid-cols-2"
        >
          {/* none */}
          <div className="col-span-1 size-full">
            <RadioGroupItem value="0" id="none" className="peer sr-only" />
            <Label
              htmlFor="none"
              className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">💻</span>
              No movements at all
              <span className="text-center text-sm font-normal text-neutral-400">
                I spend almost all day on my chair
              </span>
            </Label>
          </div>

          {/* low */}
          <div className="col-span-1 size-full">
            <RadioGroupItem value="1" id="low" className="peer sr-only" />
            <Label
              htmlFor="low"
              className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">🧘‍♂️</span>
              Few movements
              <span className="text-center text-sm font-normal text-neutral-400">
                I take break during daytime and do some physical movements
              </span>
            </Label>
          </div>

          {/* Moderately Active */}
          <div className="col-span-1 size-full">
            <RadioGroupItem value="2" id="moderate" className="peer sr-only" />
            <Label
              htmlFor="moderate"
              className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">⚡️</span>
              Moderately Active
              <span className="text-center text-sm font-normal text-neutral-400">
                I spend average 60 minutes a day doing physical activites
              </span>
            </Label>
          </div>

          {/* Very Active */}
          <div className="col-span-1 size-full">
            <RadioGroupItem value="3" id="active" className="peer sr-only" />
            <Label
              htmlFor="active"
              className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">🔥</span>
              Super Active
              <span className="text-center text-sm font-normal text-neutral-400">
                I love physical activities and spend big amount of time to
                pratice
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </CardComponent>
  )
}
