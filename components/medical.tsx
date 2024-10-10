"use client"

// imports
import { useEffect, useState } from "react"
import { useStepsStore } from "@/store/store"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import CardComponent from "./card"
import { Input } from "./ui/input"

export default function MedicalCard({
  title,
  description,
  id,
}: {
  title: string
  description: string
  id: string
}) {
  console.log({
    title,
    description,
    id,
  })
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
      <div className="grid w-full items-center gap-12">
        {/* Medical issues */}
        <div className="flex flex-col space-y-2 text-lg">
          <Label htmlFor="name" className="text-lg">
            Do you have any existing medical conditions ?
          </Label>
          <RadioGroup
            onValueChange={(e) => {
              setAnswers({ ...answers, medical_conditions: e })
            }}
            defaultValue={answers.medical_conditions}
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
          {answers.medical_conditions === "yes" && (
            <Input
              defaultValue={answers.medical_conditions_details}
              onChange={(e) => {
                setAnswers({
                  ...answers,
                  medical_conditions_details: e.target.value,
                })
              }}
              className=""
              placeholder="Any details want to add ?"
            />
          )}
        </div>

        {/* Diet */}
        <div className="flex flex-col space-y-2 text-lg">
          <Label htmlFor="name" className="text-lg">
            Is there any specific dietary restrictions ?
          </Label>
          <RadioGroup
            defaultValue={answers.specific_dietary}
            onValueChange={(e) => {
              setAnswers({ ...answers, specific_dietary: e })
            }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes-2" />
              <Label htmlFor="yes-2" className="text-md">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no-2" />
              <Label htmlFor="no-2" className="text-md">
                No
              </Label>
            </div>
          </RadioGroup>
          {answers.specific_dietary === "yes" && (
            <Input
              defaultValue={answers.specific_dietary_details}
              onChange={(e) => {
                setAnswers({
                  ...answers,
                  specific_dietary_details: e.target.value,
                })
              }}
              className=""
              placeholder="Any details want to add ?"
            />
          )}
        </div>
      </div>
    </CardComponent>
  )
}
