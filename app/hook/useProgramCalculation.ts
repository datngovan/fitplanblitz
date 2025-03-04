import { useMemo } from "react"

import getBMI, { BMIInput, BMIResult, defaultBMIResult } from "@/lib/utils/bmi"
import calculateCalories, {
  CaloriesInput,
  CaloriesResult,
  defaultCaloriesResult,
} from "@/lib/utils/calories"
import getCompositionData, {
  CompositionInput,
  CompositionResult,
  defaultCompositionResult,
} from "@/lib/utils/composition"

export type OverviewInput = BMIInput & CaloriesInput & CompositionInput
export type OverviewResult = {
  bmi_result: BMIResult
  calories_result: CaloriesResult
  composition_result: CompositionResult
}

export default function useProgramCalculations(
  result: OverviewInput
): OverviewResult {
  const bmiData = useMemo<BMIResult>(() => {
    if (!result) return defaultBMIResult
    return getBMI({
      height: result.height,
      weight: result.weight,
      gender: result.gender,
      fitness_goal: result.fitness_goal,
    })
  }, [result])

  const compositionData = useMemo<CompositionResult>(() => {
    if (!result) return defaultCompositionResult
    return getCompositionData({
      age: result.age,
      body_type: result.body_type,
      gender: result.gender,
      height: result.height,
      hip: result.hip,
      is_fat_accurate: result.is_fat_accurate,
      neck: result.neck,
      waist: result.waist,
      fitness_goal: result.fitness_goal,
    })
  }, [result])

  const calorieData = useMemo<CaloriesResult>(() => {
    if (!result) return defaultCaloriesResult
    return calculateCalories({
      activity: result.activity,
      age: result.age,
      current_weight: result.weight,
      fitness_goal: result.fitness_goal,
      gender: result.gender,
      height: result.height,
      ideal_weight: bmiData?.ideal_weight || 0,
      workout_days: result.workout_days,
    })
  }, [result, bmiData?.ideal_weight]) // Keeping dependency to avoid stale calculations

  return {
    bmi_result: bmiData,
    composition_result: compositionData,
    calories_result: calorieData,
  }
}
