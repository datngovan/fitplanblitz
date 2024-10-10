// imports
import type { stepType } from "./type"

const steps_list: stepType[] = [
  {
    id: "BasicInfoCard",
    icon: "📝",
    title: "Personal Informations 📝",
    description: "We need some basic information to start",
    component: null,
    answers: {
      name: "",
      age: 22,
      gender: "M",
      height: 175,
      weight: 70,
      body_type: "healthy",
      neck: 50,
      waist: 90,
      hip: 60,
      is_fat_accurate: null,
    },
  },
  {
    id: "FitGoal",
    icon: "🏃",
    title: "Your Fitness Goal 🏃",
    description: "What do you want to achieve in your new fitness journey",
    component: null,
    answers: {
      fitness_goal: "build_muscle",
      workout_days: 3,
      activity: "0",
    },
  },
  {
    id: "SleepCard",
    icon: "🛌",
    title: "Sleep Condition",
    description: "Your sleep conditions",
    component: null,
    answers: {
      avg_sleep_hours: 0, // The average number of sleep hours
      morning_or_night: "", // Either 'morning person' or 'night owl'
      screen_time: "", // Either 'yes' or 'no' for screen time before bed
      difficulty_falling_asleep: "", // Either 'yes' or 'no' for difficulty falling asleep
      sleep_time: 0, // The time in hours for when the user goes to bed
    },
  },
]

export default steps_list
