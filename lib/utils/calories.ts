export type CaloriesInput = {
  current_weight: number
  ideal_weight: number
  height: number
  age: number
  workout_days: number
  gender: "M" | "F"
  activity: string
  fitness_goal: "burn_fats" | "build_muscle" | "cardiovascular"
}

// Default values for CaloriesInput
export const defaultCaloriesInput: CaloriesInput = {
  current_weight: 70, // Default weight in kg
  ideal_weight: 70, // Default ideal weight
  height: 170, // Default height in cm
  age: 25, // Default age
  workout_days: 3, // Default workout days
  gender: "M",
  activity: "1", // Default moderate activity
  fitness_goal: "build_muscle",
}

export type CaloriesResult = {
  calories: number
  description: string
  lose_025: number
  lose_05: number
  lose_1: number
  gain_025: number
  gain_05: number
  gain_1: number
  protein_1: number
  protein_2: number
  fats_1: number
  fats_2: number
  carbs_1: number
  carbs_2: number
}

// ✅ Default values for CaloriesResult
export const defaultCaloriesResult: CaloriesResult = {
  calories: 2000, // Default BMR estimate
  lose_025: 1750,
  lose_05: 1500,
  lose_1: 1000,
  gain_025: 2250,
  gain_05: 2500,
  gain_1: 3000,
  description: "Default caloric needs estimation",
  protein_1: 84, // Based on 70kg * 1.2
  protein_2: 126, // Based on 70kg * 1.8
  fats_1: 44, // Based on 30% fat intake
  fats_2: 49, // Based on 35% fat intake
  carbs_1: 250, // Adjusted for macro balance
  carbs_2: 280,
}

export default function calculateCalories({
  current_weight,
  ideal_weight,
  height,
  age,
  gender,
  activity,
  workout_days,
  fitness_goal,
}: CaloriesInput): CaloriesResult {
  // Calculate BMR
  let bmr =
    gender === "M"
      ? 10 * current_weight + 6.25 * height - 5 * age + 5
      : 10 * current_weight + 6.25 * height - 5 * age - 161

  // Adjust BMR for workout days
  if (workout_days <= 2) bmr *= 1.375
  else if (workout_days <= 5) bmr *= 1.55
  else bmr *= 1.725

  // Adjust BMR for activity level
  const activityMap: Record<string, number> = {
    "0": 1.2,
    "1": 1.375,
    "2": 1.55,
    "3": 1.725,
  }
  bmr *= activityMap[activity] || 1.2 // Default to sedentary if unknown

  // Convert BMR to an integer
  bmr = Math.floor(bmr)

  // Protein Intake Calculation
  const protein_1 = Math.floor(
    current_weight * (fitness_goal === "build_muscle" ? 1.6 : 1.2)
  )
  const protein_2 = Math.floor(
    current_weight * (fitness_goal === "build_muscle" ? 2.2 : 1.8)
  )

  // Fat Intake Calculation
  const fatMultiplier =
    fitness_goal === "build_muscle" ? [0.2, 0.25] : [0.3, 0.35]
  const fats_1 = Math.floor((bmr * fatMultiplier[0]) / 9)
  const fats_2 = Math.floor((bmr * fatMultiplier[1]) / 9)

  // Carb Intake Calculation
  let carbs_1, carbs_2
  if (Math.abs(current_weight - ideal_weight) > 4) {
    carbs_1 = Math.floor((bmr - 500 - protein_1 * 4 - fats_1 * 9) / 4)
    carbs_2 = Math.floor((bmr - 500 - protein_2 * 4 - fats_2 * 9) / 4)
  } else {
    carbs_1 = Math.floor((bmr - protein_2 * 4 - fats_2 * 9) / 4)
    carbs_2 = Math.floor((bmr - protein_1 * 4 - fats_1 * 9) / 4)
  }

  return {
    calories: bmr,
    lose_025: bmr - 250,
    lose_05: bmr - 500,
    lose_1: bmr - 1000,
    gain_025: bmr + 250,
    gain_05: bmr + 500,
    gain_1: bmr + 1000,
    description: `Estimated daily calorie needs for a ${age}-year-old ${gender} weighing ${current_weight} kg.`,
    protein_1,
    protein_2,
    fats_1,
    fats_2,
    carbs_1,
    carbs_2,
  }
}
