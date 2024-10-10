import Link from "next/link"
import { AiFillYoutube } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

export default function FatWorkout({ workout_days }: { workout_days: number }) {
  const programs = {
    days_2: [
      {
        workout_type: "Strength Training and Cardio",
        exercices: [
          {
            name: "Bodyweight Squats",
            sets: "3",
            reps: "15 - 20",
          },
          {
            name: "Push-ups ",
            sets: "3",
            reps: "15 - 20",
          },
          {
            name: "Jumping Jacks",
            sets: "3",
            reps: "1 minute",
          },
          {
            name: "Lunges",
            sets: "3",
            reps: "10 - 12 per leg",
          },
          {
            name: "Plank",
            sets: "3",
            reps: "30 - 45 seconds",
          },
          {
            name: "Cardio (Running, Rowing, Cycling, Swimming ...)",
            sets: "1",
            reps: "20 - 30 minutes",
          },
        ],
      },
      {
        workout_type: "HIIT",
        exercices: [
          { name: "Burpees", sets: "3 - 4", reps: "30 seconds" },
          { name: "Mountain climbers", sets: "3 - 4", reps: "30 seconds" },
          { name: "High knees", sets: "3 - 4", reps: "30 seconds" },
          { name: "Jump squats", sets: "3 - 4", reps: "30 seconds" },
          { name: "Bicycle crunches", sets: "3 - 4", reps: "30 seconds" },
          {
            name: "Cardio (Running, Rowing, Cycling, Swimming ...)",
            sets: "1",
            reps: "10 - 15 minutes",
          },
        ],
      },
    ],

    days_3: [
      {
        workout_type: "Strength Training and Cardio",
        exercices: [
          {
            name: "Bodyweight Squats",
            sets: "3",
            reps: "15 - 20",
          },
          {
            name: "Push-ups ",
            sets: "3",
            reps: "15 - 20",
          },
          {
            name: "Jumping Jacks",
            sets: "3",
            reps: "1 minute",
          },
          {
            name: "Lunges",
            sets: "3",
            reps: "10 - 12 per leg",
          },
          {
            name: "Plank",
            sets: "3",
            reps: "30 - 45 seconds",
          },
          {
            name: "Cardio (Running, Rowing, Cycling, Swimming ...)",
            sets: "1",
            reps: "20 - 30 minutes",
          },
        ],
      },
      {
        workout_type: "HIIT",
        exercices: [
          { name: "Burpees", sets: "3 - 4", reps: "30 seconds" },
          { name: "Mountain climbers", sets: "3 - 4", reps: "30 seconds" },
          { name: "High knees", sets: "3 - 4", reps: "30 seconds" },
          { name: "Jump squats", sets: "3 - 4", reps: "30 seconds" },
          { name: "Bicycle crunches", sets: "3 - 4", reps: "30 seconds" },
          {
            name: "Cardio (Running, Rowing, Cycling, Swimming ...)",
            sets: "1",
            reps: "10 - 15 minutes",
          },
        ],
      },
      {
        workout_type: "Active Recovery",
        exercices: [
          {
            name: "Low-Intensity Cardio (walking, light cycling)",
            sets: "1",
            reps: "30 - 45 Minutes",
          },
          { name: "Stretching", sets: "1", reps: "10 - 15 Minutes" },
        ],
      },
    ],

    days_4: [
      {
        workout_type: "Strength Training and Cardio",
        exercices: [
          {
            name: "Bodyweight Squats",
            sets: "3",
            reps: "15 - 20",
          },
          {
            name: "Push-ups ",
            sets: "3",
            reps: "15 - 20",
          },
          {
            name: "Jumping Jacks",
            sets: "3",
            reps: "1 minute",
          },
          {
            name: "Lunges",
            sets: "3",
            reps: "10 - 12 per leg",
          },
          {
            name: "Plank",
            sets: "3",
            reps: "30 - 45 seconds",
          },
          {
            name: "Cardio (Running, Rowing, Cycling, Swimming ...)",
            sets: "1",
            reps: "20 - 30 minutes",
          },
        ],
      },
      {
        workout_type: "HIIT",
        exercices: [
          { name: "Burpees", sets: "3 - 4", reps: "30 seconds" },
          { name: "Mountain climbers", sets: "3 - 4", reps: "30 seconds" },
          { name: "High knees", sets: "3 - 4", reps: "30 seconds" },
          { name: "Jump squats", sets: "3 - 4", reps: "30 seconds" },
          { name: "Bicycle crunches", sets: "3 - 4", reps: "30 seconds" },
          {
            name: "Cardio (Running, Rowing, Cycling, Swimming ...)",
            sets: "1",
            reps: "10 - 15 minutes",
          },
        ],
      },
      {
        workout_type: "Active Recovery",
        exercices: [
          {
            name: "Low-Intensity Cardio (walking, light cycling)",
            sets: "1",
            reps: "30 - 45 Minutes",
          },
          { name: "Stretching", sets: "1", reps: "10 - 15 Minutes" },
        ],
      },
      {
        workout_type: "Light Cardio",
        exercices: [
          {
            name: "light cardio (brisk walking, cycling, or swimming)",
            sets: "1",
            reps: "30 Minutes",
          },
        ],
      },
    ],
  }

  // 2 days
  if (workout_days === 2) {
    return (
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="shrink-0 text-4xl font-bold">Workout Plan</h2>
          <span className="text-sm font-normal text-neutral-400">
            Tailored Workout Program for You (2 days workout as you requested)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_2.map((day, i) => (
            <div key={day.workout_type} className="flex flex-col gap-6">
              {/* day */}
              <h3 className="text-xl font-semibold">
                Day {i + 1} - {day.workout_type}
              </h3>

              {/* exercices */}
              <div className="flex flex-col gap-6">
                {day.exercices.map((exercice) => (
                  <div
                    key={exercice.name}
                    className="relative flex h-fit items-stretch gap-3"
                  >
                    <div className="flex flex-col pt-1">
                      <div className="size-4 rounded-full bg-neutral-300" />
                      <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-neutral-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">{exercice.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Sets:</span>
                        <span>{exercice.sets}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-medium">Reps:</span>
                        <span>{exercice.reps}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-medium">Help:</span>
                        <div className="flex items-center gap-6">
                          <Link
                            target="_blank"
                            className="flex items-center gap-1 text-sm text-sky-500 underline-offset-4 hover:underline"
                            href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                          >
                            <span>Watch Videos</span>
                            <span className="text-xl text-red-500">
                              <AiFillYoutube />
                            </span>
                          </Link>
                          <Link
                            target="_blank"
                            className="flex items-center gap-1 text-sm text-sky-500 underline-offset-4 hover:underline"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
                            <span className="text-xl">
                              <FcGoogle />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 3 days
  if (workout_days === 2) {
    return (
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="shrink-0 text-4xl font-bold">Workout Plan</h2>
          <span className="text-sm font-normal text-neutral-400">
            Tailored Workout Program for You (3 days workout as you requested)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_3.map((day, i) => (
            <div key={day.workout_type} className="flex flex-col gap-6">
              {/* day */}
              <h3 className="text-xl font-semibold">
                Day {i + 1} - {day.workout_type}
              </h3>

              {/* exercices */}
              <div className="flex flex-col gap-6">
                {day.exercices.map((exercice) => (
                  <div
                    key={exercice.name}
                    className="relative flex h-fit items-stretch gap-3"
                  >
                    <div className="flex flex-col pt-1">
                      <div className="size-4 rounded-full bg-neutral-300" />
                      <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-neutral-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">{exercice.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Sets:</span>
                        <span>{exercice.sets}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-medium">Reps:</span>
                        <span>{exercice.reps}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-medium">Help:</span>
                        <div className="flex items-center gap-6">
                          <Link
                            target="_blank"
                            className="flex items-center gap-1 text-sm text-sky-500 underline-offset-4 hover:underline"
                            href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                          >
                            <span>Watch Videos</span>
                            <span className="text-xl text-red-500">
                              <AiFillYoutube />
                            </span>
                          </Link>
                          <Link
                            target="_blank"
                            className="flex items-center gap-1 text-sm text-sky-500 underline-offset-4 hover:underline"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
                            <span className="text-xl">
                              <FcGoogle />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 4 days or more
  return (
    <div className="flex flex-col gap-20">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="shrink-0 text-4xl font-bold">Workout Plan</h2>
        <span className="text-sm font-normal text-neutral-400">
          Tailored Workout Program for You
        </span>
      </div>

      {/* Days - details */}
      <div className="flex flex-col gap-16">
        {programs.days_4.map((day, i) => (
          <div key={day.workout_type} className="flex flex-col gap-6">
            {/* day */}
            <h3 className="text-xl font-semibold">
              Day {i + 1} - {day.workout_type}
            </h3>

            {/* exercices */}
            <div className="flex flex-col gap-6">
              {day.exercices.map((exercice) => (
                <div
                  key={exercice.name}
                  className="relative flex h-fit items-stretch gap-3"
                >
                  <div className="flex flex-col pt-1">
                    <div className="size-4 rounded-full bg-neutral-300" />
                    <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-neutral-300" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">{exercice.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Sets:</span>
                      <span>{exercice.sets}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium">Reps:</span>
                      <span>{exercice.reps}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium">Help:</span>
                      <div className="flex items-center gap-6">
                        <Link
                          target="_blank"
                          className="flex items-center gap-1 text-sm text-sky-500 underline-offset-4 hover:underline"
                          href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                        >
                          <span>Watch Videos</span>
                          <span className="text-xl text-red-500">
                            <AiFillYoutube />
                          </span>
                        </Link>
                        <Link
                          target="_blank"
                          className="flex items-center gap-1 text-sm text-sky-500 underline-offset-4 hover:underline"
                          href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                        >
                          <span>See Images</span>
                          <span className="text-xl">
                            <FcGoogle />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
