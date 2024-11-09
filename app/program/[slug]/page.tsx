"use client"

// imports

// import { PrismaClient } from "@prisma/client"
import { useCallback, useEffect, useState } from "react"
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
import useProgramCalculations, {
  OverviewInput,
  OverviewResult,
} from "@/app/hook/useProgramCalculation"

import BodyMassResult from "./components/body-mass-result"
import BodyWeightResult from "./components/body-weight-result"

// const prisma = new PrismaClient()

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const [mockData, setMockData] = useState<any>() // Store combined answers
  const getAllAnswers = useStepsStore((state) => state.getAllAnswers)
  const fetchAllAnswers = useCallback(async () => {
    try {
      const answers = await getAllAnswers() // Get all answers
      console.log("answers:", answers)
      setMockData(answers) // Store in state
    } catch (error) {
      console.error("Error fetching answers:", error)
    }
  }, [getAllAnswers])
  useEffect(() => {
    fetchAllAnswers()
  }, [fetchAllAnswers])
  useEffect(() => {
    console.log("Fetched mockData:", mockData)
  }, [mockData])
  const { bmi_result, composistion_result, calories_result } =
    useProgramCalculations(mockData)
  if (!mockData) return <h1>NO DATA</h1>
  // // bmi
  // const { bmi, bmi_scale, status, ideal_weight } = getBMI({
  //   height: mockData.height,
  //   weight: mockData.weight,
  //   gender: mockData.gender,
  //   fitness_goal: mockData.fitness_goal,
  // })

  // // composition
  // const composition = getCompositionData({
  //   age: mockData.age,
  //   body_type: mockData.body_type,
  //   gender: mockData.gender,
  //   height: mockData.height,
  //   hip: mockData.hip,
  //   is_fat_accurate: mockData.is_fat_accurate,
  //   neck: mockData.neck,
  //   waist: mockData.waist,
  //   fitness_goal: mockData.fitness_goal,
  // })

  // // calories
  // const calories_result = calculateCalories({
  //   activity: mockData.activity,
  //   age: mockData.age,
  //   current_weight: mockData.weight,
  //   fitness_goal: mockData.fitness_goal,
  //   gender: mockData.gender,
  //   height: mockData.height,
  //   ideal_weight,
  //   workout_days: mockData.workout_days,
  // })

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

        {/* weight and fat caculation process result */}
        <div className="flex size-full flex-col justify-between gap-10 lg:flex-row">
          {/* weight */}
          <BodyWeightResult
            status={status}
            weight={mockData.weight}
            height={mockData.height}
            bmi={bmi_result.bmi}
            bmi_scale={bmi_result.bmi_scale}
          />

          <Separator orientation="vertical" className="hidden h-80 lg:block" />

          {/* composition */}
          <BodyMassResult
            fat_percentage={composistion_result.fat_percentage}
            is_healthy={composistion_result.is_healthy}
            max_value={composistion_result.max_value}
          />
        </div>

        {/* suggested weight and fat */}
        <div className="flex size-full flex-col items-center justify-between gap-10 lg:flex-row">
          {/* weight target */}
          <div className="flex size-full flex-col gap-5">
            <h3 className="text-xl font-semibold">Suggested Target Weight</h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {bmi_result.ideal_weight} Kg
            </div>

            {bmi_result.ideal_weight === mockData.weight &&
              mockData.fitness_goal !== "build_muscle" && (
                <p>
                  Based on D.R. Miller&apos;s formula, your current weight is
                  considered perfect. Make sure to maintain this weight.
                </p>
              )}

            {bmi_result.ideal_weight !== mockData.weight &&
              mockData.fitness_goal !== "build_muscle" && (
                <p>
                  Based on D.R. Miller&apos;s formula and your fitness goal, the
                  ideal weight you can achieve is {bmi_result.ideal_weight} Kg.
                </p>
              )}

            {mockData.fitness_goal === "build_muscle" && (
              <p>
                Since your fitness goal is to build muscle, you should aim for{" "}
                {bmi_result.ideal_weight} Kg to look muscular. Keep in mind that
                weight alone is not enough, body fat percentage is also an
                important factor.
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
              {composistion_result.ideal_fat <=
              composistion_result.fat_percentage
                ? composistion_result.ideal_fat
                : composistion_result.fat_percentage}
              %
            </div>
            {composistion_result.ideal_fat >=
            composistion_result.fat_percentage ? (
              <p>
                Your current body fat percentage is already perfect, so our job
                is to ensure that you maintain this body composition.
              </p>
            ) : (
              <p>
                Based on the ideal body fat percentages according to Jackson &
                Pollock and your fitness goal, the ideal body composition to
                work with is {composistion_result.ideal_fat}%.
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
            {mockData.weight > bmi_result.ideal_weight &&
              ` lose ${
                mockData.weight - bmi_result.ideal_weight
              } Kg to reach the suggested ideal weight (${
                bmi_result.ideal_weight
              } kg), `}
            {mockData.weight < bmi_result.ideal_weight &&
              ` gain ${
                bmi_result.ideal_weight - mockData.weight
              } Kg to reach the suggested ideal weight (${
                bmi_result.ideal_weight
              } kg), `}
            {mockData.weight === bmi_result.ideal_weight &&
              " maintain your current weight, "}
            and for the body composition, you should
            {composistion_result.fat_percentage >
              composistion_result.ideal_fat &&
              ` burn ${
                composistion_result.fat_percentage -
                composistion_result.ideal_fat
              } % of body fat to achieve the suggested ideal body composistion (${
                composistion_result.ideal_fat
              } %).`}
            {composistion_result.fat_percentage <=
              composistion_result.ideal_fat &&
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
            {bmi_result.ideal_weight < mockData.weight &&
              calories_result.lose_05}
            {bmi_result.ideal_weight > mockData.weight &&
              calories_result.gain_05}
            {bmi_result.ideal_weight === mockData.weight &&
              calories_result.calories}{" "}
            Calories
          </div>
          <p>
            {bmi_result.ideal_weight < mockData.weight &&
              `To lose 0.5 kg per week, you need to consume ${calories_result.lose_05} calories per day.`}
            {bmi_result.ideal_weight > mockData.weight &&
              `To gain 0.5 kg per week, you need to consume ${calories_result.gain_05} calories per day.`}
            {bmi_result.ideal_weight === mockData.weight &&
              `To maintain your current weight, you need to consume ${calories_result.calories} calories per day.`}
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
                    {calories_result.lose_1} calories
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
                    {calories_result.lose_05} calories
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
                    {calories_result.lose_025} calories
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
                    {calories_result.calories} calories
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
                    {calories_result.gain_025} calories
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
                    {calories_result.gain_05} calories
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
                    {calories_result.gain_1} calories
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
                <TableCell>{calories_result.lose_1}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.5 Kg/week</TableCell>
                <TableCell>{calories_result.lose_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.25 Kg/week</TableCell>
                <TableCell>{calories_result.lose_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Maintain Weight</TableCell>
                <TableCell>{calories_result.calories}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.25 Kg/week</TableCell>
                <TableCell>{calories_result.gain_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.5 Kg/week</TableCell>
                <TableCell>{calories_result.gain_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+1 Kg/week</TableCell>
                <TableCell>{calories_result.gain_1}</TableCell>
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
              {calories_result.protein_1}g to {calories_result.protein_2}g
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
              {calories_result.carbs_1}g to {calories_result.carbs_2}g
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
              {calories_result.fats_1}g to {calories_result.fats_2}g
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
      <div className="flex"></div>
      {/* share */}
      {/* <CopyLink params={params} /> */}
    </div>
  )
}
