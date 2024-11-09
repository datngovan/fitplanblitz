import { useMemo } from "react"

import getBMI, { BMIInput, BMIResult } from "@/lib/utils/bmi"
import calculateCalories, {
  CaloriesInput,
  CaloriesResult,
} from "@/lib/utils/calories"
import getCompositionData, {
  ComposistionInput,
  ComposistionResult,
} from "@/lib/utils/composition"

export type OverviewInput = BMIInput & CaloriesInput & ComposistionInput
// export type OverviewResult = Partial<
//   BMIResult & CaloriesResult & ComposistionResult
// >
export type OverviewResult = {
  bmi_result: BMIResult | null
  calories_result: CaloriesResult | null
  composistion_result: ComposistionResult | null
}
export default function useProgramCalculations(
  result: OverviewInput | null
): OverviewResult {
  const bmiData = useMemo<BMIResult | null>(() => {
    if (!result) return null
    return getBMI({
      height: result.height,
      weight: result.weight,
      gender: result.gender,
      fitness_goal: result.fitness_goal,
    })
  }, [result])

  const compositionData = useMemo<ComposistionResult | null>(() => {
    if (!result) return null
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

  const calorieData = useMemo<CaloriesResult | null>(() => {
    if (!result) return null
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
  }, [result, bmiData?.ideal_weight])

  return {
    bmi_result: bmiData,
    composistion_result: compositionData,
    calories_result: calorieData,
  }
}
