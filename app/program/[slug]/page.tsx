"use client"

// imports

// import { PrismaClient } from "@prisma/client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useStepsStore } from "@/store/store"
import { FaInfoCircle } from "react-icons/fa"

import getBMI from "@/lib/utils/bmi"
import calculateCalories from "@/lib/utils/calories"
import CardiovascularWorkout from "@/lib/utils/cardiovascular-workout"
import getCompositionData from "@/lib/utils/composition"
import Factors from "@/lib/utils/factor"
import FatWorkout from "@/lib/utils/fat-workout"
import MuscleWorkout from "@/lib/utils/muscle-workout"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
// import CopyLink from "@/components/copy"
import { Separator } from "@/components/separator"

// const prisma = new PrismaClient()

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const [mockData, setMockData] = useState<any>(null) // Store combined answers
  const getAllAnswers = useStepsStore((state) => state.getAllAnswers)

  useEffect(() => {
    const fetchAllAnswers = async () => {
      try {
        const answers = await getAllAnswers() // Get all answers
        setMockData(answers) // Store in state
      } catch (error) {
        console.error("Error fetching answers:", error)
      }
    }

    fetchAllAnswers()
  }, [getAllAnswers])
  if (!mockData) return <h1>NO DATA</h1>

  // bmi
  const { bmi, healthy, overweight, status, underweight, ideal_weight } =
    getBMI({
      height: mockData.height,
      weight: mockData.weight,
      gender: mockData.gender,
      fitness_goal: mockData.fitness_goal,
    })

  // composition
  const composition = getCompositionData({
    age: mockData.age,
    body_type: mockData.body_type,
    gender: mockData.gender,
    height: mockData.height,
    hip: mockData.hip,
    is_fat_accurate: mockData.is_fat_accurate,
    neck: mockData.neck,
    waist: mockData.waist,
    fitness_goal: mockData.fitness_goal,
  })

  // calories
  const calory_data = calculateCalories({
    activity: mockData.activity,
    age: mockData.age,
    current_weight: mockData.weight,
    fitness_goal: mockData.fitness_goal,
    gender: mockData.gender,
    height: mockData.height,
    ideal_weight,
    workout_days: mockData.workout_days,
  })

  return (
    <div className="text-md mx-auto flex flex-col gap-20 px-6 py-10 xl:w-3/4">
      {/* share */}
      {/* <CopyLink params={params} /> */}

      {/* overview */}
      <div className="flex flex-col gap-20">
        {/* Header - General overview */}
        <div className="flex flex-col gap-3">
          <h2 className="shrink-0 text-3xl font-bold lg:text-4xl">
            General Overview
          </h2>
          <span className="text-sm font-normal text-neutral-400">
            A general overview of the fitness plan and current health
          </span>
        </div>

        {/* */}
        <div className="flex size-full flex-col items-center justify-between gap-10 lg:flex-row">
          {/* weight */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">Weight Assessment</h3>
            <div>
              Your current weight ({mockData.overview?.weight} Kg) is considered
              {status === "healthy" && (
                <span className="text-xl font-semibold text-green-400">
                  {" "}
                  Healthy
                </span>
              )}
              {status === "underweight" && (
                <span className="text-xl font-semibold text-yellow-400">
                  {" "}
                  Underweight
                </span>
              )}
              {status === "overweight" && (
                <span className="text-xl font-semibold text-yellow-400">
                  {" "}
                  Overweight
                </span>
              )}
              {status === "obese" && (
                <span className="text-xl font-semibold text-orange-400">
                  {" "}
                  Obese
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="mb-10 flex w-full flex-col gap-0">
              <div className="flex h-8 w-full gap-0 rounded-md text-xs font-semibold text-neutral-50 shadow-md">
                <div className="flex h-full w-[18%] items-center rounded-l-md bg-yellow-400">
                  <span className="mx-auto text-center">Underweight</span>
                </div>

                <div className="relative h-full w-[4%] bg-gradient-to-r from-yellow-400 to-green-400">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                    <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                      {underweight}
                    </div>
                  </div>
                </div>

                <div className="flex h-full w-[38%] items-center bg-green-400">
                  <span className="mx-auto text-center">Healthy</span>
                </div>

                <div className="relative h-full w-[4%] bg-gradient-to-r from-green-400 to-yellow-400">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                    <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                      {healthy}
                    </div>
                  </div>
                </div>

                <div className="flex h-full w-1/5 items-center bg-yellow-400">
                  <span className="mx-auto text-center">Overweight</span>
                </div>

                <div className="relative h-full w-[4%] bg-gradient-to-r from-yellow-400 to-orange-400">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                    <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                      {overweight}
                    </div>
                  </div>
                </div>

                <div className="flex h-full w-1/5 items-center rounded-r-md bg-orange-400">
                  <span className="mx-auto text-center">Obese</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 pt-2 text-sm text-neutral-600">
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-lg font-semibold text-sky-400">
                  <FaInfoCircle />
                  Note
                </div>
                <p className="flex flex-wrap gap-1">
                  This result is calculated based on
                  <Sheet>
                    <SheetTrigger className="flex items-center gap-1 text-sm text-sky-400 underline-offset-4 hover:underline">
                      BMI.
                    </SheetTrigger>
                    <SheetContent side="left" className="max-w-md">
                      <div className="flex flex-col gap-6">
                        <div className="text-xl font-semibold">
                          Body Mass Index (BMI)
                        </div>
                        <div>
                          bmi = weight
                          <span className="text-sm text-neutral-400">
                            {" "}
                            (in kg){" "}
                          </span>{" "}
                          / height ^ 2{" "}
                        </div>
                        <div>
                          bmi = {mockData.weight} / ({mockData.height / 100} ^
                          2)
                        </div>
                        <div>bmi ={bmi}</div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  BMI provides information on your weight status but ignores
                  factors like muscle mass and body composition. Two people with
                  the same BMI can have different health profiles.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator orientation="vertical" className="hidden h-80 lg:block" />

          {/* composition */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">Body Composition Analysis</h3>
            <div className="flex items-center gap-2">
              Your current body composition ({composition.fat_percentage}
              %) is considered
              {composition.is_healthy ? (
                <span className="text-xl font-semibold text-green-400">
                  Healthy
                </span>
              ) : (
                <span className="text-xl font-semibold text-yellow-400">
                  Overweight
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="mb-10 flex w-full flex-col gap-0">
              <div className="flex h-8 w-full gap-0 rounded-md text-xs font-semibold text-neutral-50 shadow-md">
                <div className="flex h-full w-[48%] items-center rounded-l-md bg-green-400">
                  <span className="mx-auto text-center">Healthy</span>
                </div>

                <div className="relative h-full w-[4%] bg-gradient-to-r from-green-400 to-yellow-400">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                    <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                      {composition.max_value}%
                    </div>
                  </div>
                </div>

                <div className="flex h-full w-[48%] items-center rounded-r-md bg-yellow-400">
                  <span className="mx-auto text-center">Overweight</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 pt-3 text-sm text-neutral-600">
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-lg font-semibold text-sky-400">
                  <FaInfoCircle />
                  Note
                </div>
                <p>
                  The current health result of your body composition is
                  calculated considering your gender and age. This personalized
                  approach helps provide a more accurate assessment of your
                  specific health condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* suggested weight and fat */}
        <div className="flex size-full flex-col items-center justify-between gap-10 lg:flex-row">
          {/* weight target */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">Suggested Target Weight</h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {ideal_weight} Kg
            </div>

            {ideal_weight === mockData.weight &&
              mockData.fitness_goal !== "build_muscle" && (
                <p>
                  Based on D.R. Miller&apos;s formula, your current weight is
                  considered perfect. Make sure to maintain this weight.
                </p>
              )}

            {ideal_weight !== mockData.weight &&
              mockData.fitness_goal !== "build_muscle" && (
                <p>
                  Based on D.R. Miller&apos;s formula and your fitness goal, the
                  ideal weight you can achieve is {ideal_weight} Kg.
                </p>
              )}

            {mockData.fitness_goal === "build_muscle" && (
              <p>
                Since your fitness goal is to build muscle, you should aim for{" "}
                {ideal_weight} Kg to look muscular. Keep in mind that weight
                alone is not enough, body fat percentage is also an important
                factor.
              </p>
            )}
          </div>

          <Separator orientation="vertical" className="hidden h-28 lg:block" />

          {/* composition target */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">
              Suggested Body Composition
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {composition.ideal_fat <= composition.fat_percentage
                ? composition.ideal_fat
                : composition.fat_percentage}
              %
            </div>
            {composition.ideal_fat >= composition.fat_percentage ? (
              <p>
                Your current body fat percentage is already perfect, so our job
                is to ensure that you maintain this body composition.
              </p>
            ) : (
              <p>
                Based on the ideal body fat percentages according to Jackson &
                Pollock and your fitness goal, the ideal body composition to
                work with is {composition.ideal_fat}%.
              </p>
            )}
          </div>
        </div>

        <Factors fitness_goal={mockData.fitness_goal} />

        {/* summary */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p>
            In conclusion, your goal is to
            {mockData.weight > ideal_weight &&
              ` lose ${
                mockData.weight - ideal_weight
              } Kg to reach the suggested ideal weight (${ideal_weight} kg), `}
            {mockData.weight < ideal_weight &&
              ` gain ${
                ideal_weight - mockData.weight
              } Kg to reach the suggested ideal weight (${ideal_weight} kg), `}
            {mockData.weight === ideal_weight &&
              " maintain your current weight, "}
            and for the body composition, you should
            {composition.fat_percentage > composition.ideal_fat &&
              ` burn ${
                composition.fat_percentage - composition.ideal_fat
              } % of body fat to achieve the suggested ideal body composition (${
                composition.ideal_fat
              } %).`}
            {composition.fat_percentage <= composition.ideal_fat &&
              " maintain your current body fat percentage."}
          </p>
        </div>
      </div>

      {/* workout */}
      {mockData.fitness_goal === "build_muscle" && (
        <MuscleWorkout workout_days={mockData.workout_days} />
      )}
      {mockData.fitness_goal === "cardiovascular" && (
        <CardiovascularWorkout workout_days={mockData.workout_days} />
      )}
      {mockData.fitness_goal === "burn_fats" && (
        <FatWorkout workout_days={mockData.workout_days} />
      )}

      {/* Diet */}
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="shrink-0 text-4xl font-bold">Diet Plan</h2>
          <span className="text-sm font-normal text-neutral-400">
            Your weekly meal plan
          </span>
        </div>

        {/* Calories */}
        <div className="flex size-full flex-col gap-5">
          <h3 className="text-xl font-semibold">Daily Calorie Requirement</h3>
          <div className="text-3xl font-semibold text-emerald-500">
            {ideal_weight < mockData.weight && calory_data.lose_05}
            {ideal_weight > mockData.weight && calory_data.gain_05}
            {ideal_weight === mockData.weight && calory_data.calories} Calories
          </div>
          <p>
            {ideal_weight < mockData.weight &&
              `To lose 0.5 kg per week, you need to consume ${calory_data.lose_05} calories per day.`}
            {ideal_weight > mockData.weight &&
              `To gain 0.5 kg per week, you need to consume ${calory_data.gain_05} calories per day.`}
            {ideal_weight === mockData.weight &&
              `To maintain your current weight, you need to consume ${calory_data.calories} calories per day.`}
          </p>

          {/* chart v2 */}
          <div className="mb-10 hidden w-full flex-col gap-0 lg:flex">
            <div className="flex h-8 w-full gap-0 rounded-md text-xs font-bold text-white shadow-md">
              <div className="flex h-full w-[10%] items-center rounded-l-md bg-red-400">
                <span className="mx-auto text-center">-1 Kg/week</span>
              </div>

              <div className="relative h-full w-[5%] bg-gradient-to-r from-red-400 to-orange-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                  <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                    {calory_data.lose_1} calories
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[10%] items-center bg-orange-400">
                <span className="mx-auto text-center">- 0.5 Kg/week</span>
              </div>

              <div className="relative h-full w-[5%] bg-gradient-to-r from-orange-400 to-lime-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                  <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                    {calory_data.lose_05} calories
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[10%] items-center bg-lime-400">
                <span className="mx-auto text-center">- 0.25 Kg/week</span>
              </div>

              <div className="relative h-full w-[5%] bg-gradient-to-r from-lime-400 to-green-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                  <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                    {calory_data.lose_025} calories
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[10%] items-center bg-green-400">
                <span className="mx-auto text-center">Maintain Weight</span>
              </div>

              <div className="relative h-full w-[5%] bg-gradient-to-r from-green-400 to-cyan-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                  <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                    {calory_data.calories} calories
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[10%] items-center bg-cyan-400">
                <span className="mx-auto text-center">+ 0.25 Kg/week</span>
              </div>

              <div className="relative h-full w-[5%] bg-gradient-to-r from-cyan-400 to-sky-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                  <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                    {calory_data.gain_025} calories
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[10%] items-center bg-sky-400">
                <span className="mx-auto text-center">+ 0.5 Kg/week</span>
              </div>

              <div className="relative h-full w-[5%] bg-gradient-to-r from-sky-400 to-indigo-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                  <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                    {calory_data.gain_05} calories
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[10%] items-center bg-indigo-400">
                <span className="mx-auto text-center">+ 1 Kg/week</span>
              </div>

              <div className="relative h-full w-[5%] rounded-r-md bg-gradient-to-r from-indigo-400 to-indigo-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1 rounded-r-md">
                  <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                  <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                    {calory_data.gain_1} calories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table for Mobile */}
          <Table className="block w-full lg:hidden">
            <TableHeader>
              <TableRow>
                <TableHead>Kg</TableHead>
                <TableHead>Calories</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">-1 Kg/week</TableCell>
                <TableCell>{calory_data.lose_1}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.5 Kg/week</TableCell>
                <TableCell>{calory_data.lose_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.25 Kg/week</TableCell>
                <TableCell>{calory_data.lose_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Maintain Weight</TableCell>
                <TableCell>{calory_data.calories}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.25 Kg/week</TableCell>
                <TableCell>{calory_data.gain_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.5 Kg/week</TableCell>
                <TableCell>{calory_data.gain_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+1 Kg/week</TableCell>
                <TableCell>{calory_data.gain_1}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col items-start gap-10 lg:flex-row">
          {/* Protein */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">
              Daily Protein Requirements
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.protein_1}g to {calory_data.protein_2}g
            </div>
            <p>
              {mockData.fitness_goal === "build_muscle" &&
                "Since your goal is to build muscles, high protein intake is an important factor to build lean muscle mass"}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-inside list-disc">
                <li>Meat</li>
                <li>Eggs</li>
                <li>Fish</li>
                <li>Poultry</li>
                <li>Legumes (e.g., lentils, chickpeas)</li>
                <li>Nuts (e.g., almonds, peanuts)</li>
                <li>Seeds (e.g., chia seeds, sunflower seeds)</li>
                <li>Tofu</li>
                <li>Quinoa</li>
                <li>Dairy products (e.g., cheese, yogurt)</li>
                <li>Beans (e.g., black beans, kidney beans)</li>
                <li>Greek yogurt</li>
                <li>Cottage cheese</li>
              </ul>
            </div>
          </div>

          {/* Carbs */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">
              Daily Carbohydrate Requirements
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.carbs_1}g to {calory_data.carbs_2}g
            </div>
            <p>
              {mockData.fitness_goal === "build_muscle" &&
                "Carbohydrates are a crucial macronutrient for bodybuilders due to their role in providing energy for intense workouts and aiding in muscle recovery"}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-inside list-disc">
                <li>Rice (e.g., white rice, brown rice)</li>
                <li>Pasta (e.g., spaghetti, macaroni)</li>
                <li>Bread (e.g., whole wheat bread, baguette)</li>
                <li>Potatoes</li>
                <li>Quinoa</li>
                <li>Oats</li>
                <li>Cereals (e.g., cornflakes, oatmeal)</li>
                <li>Beans (e.g., black beans, kidney beans)</li>
                <li>Lentils</li>
                <li>Sweet potatoes</li>
                <li>Barley</li>
                <li>Millet</li>
                <li>Fruits (e.g., banana, apple)</li>
              </ul>
            </div>
          </div>

          {/* Fats */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">Daily Fat Requirements</h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.fats_1}g to {calory_data.fats_2}g
            </div>
            <p>
              {mockData.fitness_goal === "build_muscle" &&
                "You need to take from 20% to 25% fats of total calories"}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-inside list-disc">
                <li>Avocado</li>
                <li>Olive oil</li>
                <li>Coconut oil</li>
                <li>Fatty fish (e.g., salmon, mackerel)</li>
                <li>Nuts (e.g., almonds, walnuts)</li>
                <li>Seeds (e.g., chia seeds, flaxseeds)</li>
                <li>Nut butters (e.g., almond butter, peanut butter)</li>
                <li>Dark chocolate (high cocoa content)</li>
                <li>Full-fat yogurt</li>
                <li>Cheese (in moderation)</li>
                <li>Eggs (contain healthy fats in the yolk)</li>
                <li>Olives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
          
      </div>
      {/* share */}
      {/* <CopyLink params={params} /> */}
    </div>
  )
}
