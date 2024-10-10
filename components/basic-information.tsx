"use client"

// imports
import { useEffect, useState } from "react"
import { useStepsStore } from "@/store/store"

import CardComponent from "./card"
import Picker from "./picker"
import { Separator } from "./separator"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

export default function BasicInfoCard({
  title,
  description,
  id,
}: {
  title: string
  description: string
  id: string
}) {
  // variables
  const getAnswer = useStepsStore((state) => state.getAnswer)
  const updateAnswer = useStepsStore((state) => state.updateAnswer)
  const blockNext = useStepsStore((state) => state.blockNext)
  const allowNext = useStepsStore((state) => state.allowNext)
  const [answers, setAnswers] = useState<any>(getAnswer(id))
  const [is_accurate, setIsAccurate] = useState<boolean>(
    answers.is_fat_accurate === "yes"
  )
  const [is_choose, setIsChoose] = useState<boolean>(answers.is_fat_accurate)

  // functions
  useEffect(() => {
    updateAnswer(id, answers)
    if (answers.is_fat_accurate !== null) allowNext()
    else blockNext()
  }, [answers])

  // returns
  return (
    <CardComponent title={title} description={description}>
      <div className="grid w-full items-center gap-10 lg:gap-16">
        {/* Name */}
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name" className="text-md lg:text-lg">
            Email address{" "}
            <span className="lg:text-md text-xs text-neutral-500">
              (optional)
            </span>
          </Label>
          <Input
            defaultValue={answers.name}
            onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
            id="name"
            placeholder="example@email.com"
            className="text-md py-6 lg:py-7 lg:text-xl"
          />
        </div>

        {/* Age */}
        <div className="flex flex-col space-y-3">
          <Label htmlFor="age" className="text-md lg:text-lg">
            How old are you?
          </Label>
          <Picker
            max={99}
            min={16}
            tag="years old"
            value={answers.age}
            onAdd={() => setAnswers({ ...answers, age: answers.age + 1 })}
            onRemove={() => setAnswers({ ...answers, age: answers.age - 1 })}
            onSlide={(e) => setAnswers({ ...answers, age: e })}
          />
        </div>

        {/* Gender */}
        <div className="flex w-full flex-col space-y-3">
          <Label htmlFor="gender" className="text-md lg:text-lg">
            Sex
          </Label>
          <RadioGroup
            defaultValue={answers.gender}
            onValueChange={(e) => setAnswers({ ...answers, gender: e })}
            className="flex w-full gap-4"
          >
            {/* Male */}
            <div className="w-full">
              <RadioGroupItem value="M" id="M" className="peer sr-only" />
              <Label
                htmlFor="M"
                className="relative flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-xl hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 peer-data-[state=checked]:bg-secondary lg:text-2xl [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-2xl lg:text-3xl">🧑</span>
                Male
              </Label>
            </div>

            {/* Female */}
            <div className="w-full">
              <RadioGroupItem value="F" id="female" className="peer sr-only" />
              <Label
                htmlFor="female"
                className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-xl hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-2xl lg:text-3xl">👩</span>
                Female
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Height and Weight */}
        <div className="flex size-full flex-col gap-4 lg:flex-row">
          <div className="flex size-full flex-col space-y-2">
            <Label htmlFor="age" className="text-md lg:text-lg">
              Height 📏
            </Label>
            <Picker
              max={270}
              min={120}
              tag="cm"
              value={answers.height}
              onAdd={() => {
                setAnswers({ ...answers, height: answers.height + 1 })
              }}
              onRemove={() => {
                setAnswers({ ...answers, height: answers.height - 1 })
              }}
              onSlide={(e) => setAnswers({ ...answers, height: e })}
            />
          </div>

          <Separator orientation="vertical" className="hidden lg:block" />

          <div className="flex size-full flex-col space-y-2">
            <Label htmlFor="age" className="text-md lg:text-lg">
              Weight ⚖️
            </Label>
            <Picker
              max={160}
              min={30}
              tag="Kg"
              value={answers.weight}
              onAdd={() => {
                setAnswers({ ...answers, weight: answers.weight + 1 })
              }}
              onRemove={() => {
                setAnswers({ ...answers, weight: answers.weight - 1 })
              }}
              onSlide={(e) => setAnswers({ ...answers, weight: e })}
            />
          </div>
        </div>

        {/* Measure question */}
        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="name" className="text-md lg:text-lg">
            Do you have measuring tape?
          </Label>
          <RadioGroup
            defaultValue={answers.is_fat_accurate}
            onValueChange={(e) => {
              setAnswers({ ...answers, is_fat_accurate: e })
              setIsChoose(true)
              setIsAccurate(e === "yes")
            }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="text-md">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="text-md">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Body composition - Approximate */}
        {is_choose && !is_accurate && (
          <div className="flex w-full flex-col space-y-3">
            <Label htmlFor="gender" className="text-md lg:text-lg">
              What is your current body fat percentage?
            </Label>

            <RadioGroup
              onValueChange={(e) => setAnswers({ ...answers, body_type: e })}
              defaultValue={answers.body_type}
              className="grid size-full grid-cols-2 gap-4 lg:grid-cols-3"
            >
              {/* Ultra-Lean */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="ultralean"
                  id="ultralean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="ultralean"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🔥</span>
                  Super Lean
                  <span className="text-center text-sm font-normal text-neutral-400">
                    1% - 5% body fat
                  </span>
                </Label>
              </div>

              {/* very Lean */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="verylean"
                  id="verylean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="verylean"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">👌</span>
                  Very Lean
                  <span className="text-center text-sm font-normal text-neutral-400">
                    6% - 10% body fat
                  </span>
                </Label>
              </div>

              {/* Lean */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="lean"
                  id="lean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="lean"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🏋️‍♀️</span>
                  Lean
                  <span className="text-center text-sm font-normal text-neutral-400">
                    11% - 15% body fat
                  </span>
                </Label>
              </div>

              {/* Moderately Lean */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="moderatelylean"
                  id="moderatelylean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="moderatelylean"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🥦</span>
                  Quite Lean
                  <span className="text-center text-sm font-normal text-neutral-400">
                    16% - 20% body fat
                  </span>
                </Label>
              </div>

              {/* Healthy */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="healthy"
                  id="healthy"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="healthy"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">😊</span>
                  Healthy
                  <span className="text-center text-sm font-normal text-neutral-400">
                    21% - 25% body fat
                  </span>
                </Label>
              </div>

              {/* Moderately Overweight */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="moderatelyoverweight"
                  id="moderatelyoverweight"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="moderatelyoverweight"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">😬</span>
                  Quite Overweight
                  <span className="text-center text-sm font-normal text-neutral-400">
                    26% - 30% body fat
                  </span>
                </Label>
              </div>

              {/* overweight */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="overweight"
                  id="overweight"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="overweight"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">😓</span>
                  Overweight
                  <span className="text-center text-sm font-normal text-neutral-400">
                    31% - 35% body fat
                  </span>
                </Label>
              </div>

              {/* obese */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="obese"
                  id="obese"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="obese"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">😔</span>
                  Obese
                  <span className="text-center text-sm font-normal text-neutral-400">
                    36% - 40% body fat
                  </span>
                </Label>
              </div>

              {/* extremly obese */}
              <div className="col-span-1 size-full">
                <RadioGroupItem
                  value="extremly_obese"
                  id="extremly_obese"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="extremly_obese"
                  className="flex h-full flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 text-center text-lg hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 lg:text-2xl [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🆘</span>
                  Extremely Obese
                  <span className="text-center text-sm font-normal text-neutral-400">
                    41% and above body fat
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Body composition - Accurate */}
        {is_choose && is_accurate && (
          <div className="flex w-full flex-col gap-3">
            <Label htmlFor="gender" className="text-md lg:text-lg">
              What is your current body fat percentage?
            </Label>

            <p className="mb-3 text-sm text-neutral-400">
              To accurately determine your body fat percentage, we require two
              or three measurements: your neck, waist and hip &#x28;if you are
              female&#x29; size. These essential measurements enable us to
              calculate your body fat percentage.
            </p>

            <div className="flex size-full flex-col gap-4 md:flex-row">
              <div className="flex size-full flex-col space-y-2">
                <Label htmlFor="age" className="text-md lg:text-lg">
                  Neck
                </Label>
                <Picker
                  max={100}
                  min={20}
                  tag="cm"
                  value={answers.neck}
                  onAdd={() => {
                    setAnswers({ ...answers, neck: answers.neck + 1 })
                  }}
                  onRemove={() => {
                    setAnswers({ ...answers, neck: answers.neck - 1 })
                  }}
                  onSlide={(e) => setAnswers({ ...answers, neck: e })}
                />
              </div>

              <Separator orientation="vertical" />

              <div className="flex size-full flex-col space-y-2">
                <Label htmlFor="age" className="text-md lg:text-lg">
                  Waist
                </Label>
                <Picker
                  max={200}
                  min={50}
                  tag="cm"
                  value={answers.waist}
                  onAdd={() => {
                    setAnswers({ ...answers, waist: answers.waist + 1 })
                  }}
                  onRemove={() => {
                    setAnswers({ ...answers, waist: answers.waist - 1 })
                  }}
                  onSlide={(e) => setAnswers({ ...answers, waist: e })}
                />
              </div>

              {answers.gender === "F" && (
                <>
                  <Separator orientation="vertical" />

                  <div className="flex size-full flex-col space-y-2">
                    <Label htmlFor="age" className="text-md lg:text-lg">
                      Hip
                    </Label>
                    <Picker
                      max={200}
                      min={30}
                      tag="cm"
                      value={answers.hip}
                      onAdd={() => {
                        setAnswers({ ...answers, hip: answers.hip + 1 })
                      }}
                      onRemove={() => {
                        setAnswers({ ...answers, hip: answers.hip - 1 })
                      }}
                      onSlide={(e) => setAnswers({ ...answers, hip: e })}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </CardComponent>
  )
}
