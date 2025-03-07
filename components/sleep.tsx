"use client"

// imports
import { useEffect, useState } from "react"
import { useStepsStore } from "@/store/store"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { TimeClock } from "@mui/x-date-pickers/TimeClock"
import dayjs from "dayjs"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// Custom debounce hook
import { useDebounce } from "@/app/hook/useDebounce"

import CardComponent from "./card"
import Picker from "./picker"

export default function SleepCard({
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

  // Debounce the answers state to avoid updating too frequently
  const debouncedAnswers = useDebounce(answers, 300)

  // functions
  useEffect(() => {
    // Only update the answer when debouncedAnswers change
    updateAnswer(id, debouncedAnswers)
  }, [debouncedAnswers, id, updateAnswer])

  // returns
  return (
    <CardComponent title={title} description={description}>
      <div className="grid w-full items-center gap-12">
        {/* AVG hours */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="age" className="text-lg">
            How many sleep hours are you getting ⏰ ?
          </Label>
          <Picker
            max={12}
            min={4}
            tag="Hours"
            value={answers.avg_sleep_hours}
            onAdd={() =>
              setAnswers({
                ...answers,
                avg_sleep_hours: answers.avg_sleep_hours + 1,
              })
            }
            onRemove={() => {
              setAnswers({
                ...answers,
                avg_sleep_hours: answers.avg_sleep_hours - 1,
              })
            }}
            onSlide={(e) => setAnswers({ ...answers, avg_sleep_hours: e })}
          />
        </div>

        {/* morning vs night */}
        <div className="flex w-full flex-col space-y-2 text-lg">
          <Label htmlFor="gender" className="text-lg">
            Are you a morning person or a night owl 🌞🌙 ?
          </Label>
          <RadioGroup
            onValueChange={(e) =>
              setAnswers({ ...answers, morning_or_night: e })
            }
            defaultValue={answers.morning_or_night}
            className="flex w-full gap-4"
          >
            {/* Morning person */}
            <div className="w-full">
              <RadioGroupItem
                value="morning person"
                id="male"
                className="peer sr-only"
              />
              <Label
                htmlFor="male"
                className="flex flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">☀️</span>
                Morning
              </Label>
            </div>

            {/* Night owl */}
            <div className="w-full">
              <RadioGroupItem
                value="night owl"
                id="female"
                className="peer sr-only"
              />
              <Label
                htmlFor="female"
                className="flex flex-col items-center justify-between gap-2 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🌑</span>
                Night
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* screen time */}
        <div className="flex flex-col space-y-2 text-lg">
          <Label htmlFor="name" className="text-lg">
            Do you spend screen time before bed 📱 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, screen_time: e })}
            defaultValue={answers.screen_time}
            className="flex items-center gap-6"
          >
            <div className="flex items-center space-x-2 text-lg">
              <RadioGroupItem value="yes" id="yes" />
              <Label className="text-lg" htmlFor="yes">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <RadioGroupItem value="no" id="no" />
              <Label className="text-lg" htmlFor="no">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* clock */}
        <div className="flex size-full items-center gap-3">
          {/* bed time */}
          <div className="flex size-full flex-col space-y-1.5">
            <Label htmlFor="name" className="text-center text-lg">
              At what time you usually go to bed 🛏️ ?
            </Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimeClock
                ampm={false}
                views={["hours"]}
                value={dayjs().set("hour", answers.sleep_time)} // Change to "value"
                onChange={(e) =>
                  setAnswers({ ...answers, sleep_time: dayjs(e).get("hour") })
                }
              />
            </LocalizationProvider>
            <h3 className="text-center text-2xl font-bold">
              {answers.sleep_time}
              :00 {answers.sleep_time >= 12 ? "PM" : "AM"}
            </h3>
          </div>
        </div>
      </div>
    </CardComponent>
  )
}
