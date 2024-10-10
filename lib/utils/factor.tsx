export default function Factors({
  fitness_goal,
}: {
  fitness_goal: string
}): any {
  // cardiovascular
  if (fitness_goal === "cardiovascular") {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold">
          Factors for Improved Cardiovascular Health
        </h3>

        {/* chart */}
        <div className="relative flex size-full gap-1">
          <div className="flex h-full flex-col" style={{ width: "40%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                40%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center rounded-l-md bg-orange-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Physical Activity
            </div>
          </div>

          <div className="flex h-full flex-col" style={{ width: "30%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                30%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center bg-red-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Diet
            </div>
          </div>

          <div className="flex h-full flex-col" style={{ width: "15%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                15%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center bg-sky-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Rest
            </div>
          </div>

          <div className="flex h-full flex-col" style={{ width: "15%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                15%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center rounded-r-md bg-yellow-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Stress
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 flex flex-col gap-9">
          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-orange-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-orange-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Physical activities - 40%</h3>
              <p>
                Regular exercise is pivotal for cardiovascular health. It helps
                strengthen the heart muscle, improves circulation, and enhances
                the efficiency of oxygen utilization. Cardiovascular exercises
                like brisk walking, running, swimming, or cycling elevate the
                heart rate, promoting heart health and reducing the risk of
                heart disease. It also aids in maintaining healthy blood
                pressure levels and cholesterol profiles.
              </p>
            </div>
          </div>

          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-red-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-red-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Diet - 30%</h3>
              <p>
                A well-balanced diet plays a crucial role in maintaining
                cardiovascular health. Emphasize a diet rich in fruits,
                vegetables, whole grains, and lean proteins. Reduce intake of
                saturated fats, trans fats, and sodium to manage cholesterol
                levels and blood pressure. Incorporate foods rich in omega-3
                fatty acids, like fatty fish, to help reduce the risk of heart
                disease. Limiting processed foods and sugary beverages is also
                essential for maintaining a healthy heart.
              </p>
            </div>
          </div>

          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-sky-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-sky-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Stress - 15%</h3>
              <p>
                Chronic stress can have detrimental effects on the
                cardiovascular system. Implement stress-reduction techniques
                such as mindfulness, meditation, yoga, or deep breathing
                exercises. Adequate stress management helps in maintaining
                healthy blood pressure levels and reducing the risk of
                heart-related ailments.
              </p>
            </div>
          </div>

          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-yellow-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-yellow-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Bad Habits - 15%</h3>
              <p>
                Steering clear of harmful habits such as smoking and excessive
                alcohol consumption is vital for cardiovascular health. Smoking
                damages the blood vessels, leading to atherosclerosis and
                increasing the risk of heart disease. Excessive alcohol
                consumption can elevate blood pressure and contribute to heart
                muscle damage. Avoiding these habits significantly reduces the
                risk of cardiovascular complications.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // build muscle
  if (fitness_goal === "build_muscle") {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold">Factors for Building Muscles</h3>

        {/* chart */}
        <div className="relative flex size-full gap-1">
          <div className="flex h-full flex-col" style={{ width: "40%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                40%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center rounded-l-md bg-orange-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Overload
            </div>
          </div>

          <div className="flex h-full flex-col" style={{ width: "30%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                30%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center bg-red-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Nutrition
            </div>
          </div>

          <div className="flex h-full flex-col" style={{ width: "15%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                15%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center bg-sky-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Rest
            </div>
          </div>

          <div className="flex h-full flex-col" style={{ width: "15%" }}>
            <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
              <div className="mx-auto mb-1 flex text-sm text-neutral-400">
                15%
              </div>
              <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
              <div className="h-4 border-x border-t border-neutral-200" />
            </div>
            <div className="flex items-center justify-center rounded-r-md bg-yellow-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
              Plan
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 flex flex-col gap-9">
          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-orange-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-orange-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">
                Progressive Overload - 40%
              </h3>
              <p className="text-md text-neutral-500">
                Progressive overload is the most critical factor in muscle
                growth. It involves gradually increasing the stress placed on
                the muscle during exercise over time. This can be achieved by
                increasing the weight lifted, the number of repetitions, or the
                intensity of the workout. By consistently challenging your
                muscles, you stimulate muscle fibers to grow in size and
                strength. If you keep doing the same routine over and over
                again, your body is going to plateau! Your body adapts and that
                is why variety is important. So mix it up and adapt your workout
                to focus on different muscles keeping your body surprised and
                confused!
              </p>
            </div>
          </div>

          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-red-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-red-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Nutrition - 30%</h3>
              <p className="text-md text-neutral-500">
                A well-balanced and appropriate diet is essential for muscle
                growth. It should include an adequate amount of protein to
                support muscle repair and growth, complex carbohydrates to
                provide energy, healthy fats for hormone regulation, and a
                variety of vitamins and minerals for overall health. Protein is
                particularly crucial, as it provides the building blocks (amino
                acids) necessary for muscle repair and growth.
              </p>
            </div>
          </div>

          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-sky-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-sky-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Rest - 15%</h3>
              <p className="text-md text-neutral-500">
                Muscle growth occurs during periods of rest, not while you&apos;re
                working out. Sufficient rest is crucial to allow your muscles to
                recover and repair. Overtraining can lead to muscle fatigue,
                injuries, and hindered progress. Aim for 7-9 hours of quality
                sleep each night, and consider incorporating rest days into your
                workout routine to prevent overexertion and promote muscle
                repair.
              </p>
            </div>
          </div>

          <div className="relative flex h-fit items-stretch gap-3">
            <div className="flex flex-col pt-1">
              <div className="h-5 w-4 rounded-full bg-yellow-400" />
              <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-yellow-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Consistency - 15%</h3>
              <p className="text-md text-neutral-500">
                Consistency in your workout routine and discipline in adhering
                to your nutrition plan are key to achieving significant muscle
                growth. Building muscle is a gradual process that requires
                dedication and perseverance. Regular exercise and a consistent
                diet will ensure that your body receives the necessary stimuli
                for muscle growth and repair.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // burn fats
  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="text-xl font-semibold">Factors for Fat Loss</h3>

      {/* chart */}
      <div className="relative flex size-full gap-1">
        <div className="flex h-full flex-col" style={{ width: "70%" }}>
          <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
            <div className="mx-auto mb-1 flex text-sm text-neutral-400">
              70%
            </div>
            <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
            <div className="h-4 border-x border-t border-neutral-200" />
          </div>
          <div className="flex items-center justify-center rounded-l-md bg-orange-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
            Diet
          </div>
        </div>

        <div className="flex h-full flex-col" style={{ width: "15%" }}>
          <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
            <div className="mx-auto mb-1 flex text-sm text-neutral-400">
              15%
            </div>
            <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
            <div className="h-4 border-x border-t border-neutral-200" />
          </div>
          <div className="flex items-center justify-center bg-red-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
            Physical Activity
          </div>
        </div>

        <div className="flex h-full flex-col" style={{ width: "15%" }}>
          <div className="mx-auto mb-2 flex w-[95%] flex-col gap-0">
            <div className="mx-auto mb-1 flex text-sm text-neutral-400">
              15%
            </div>
            <div className="mx-auto flex h-4 w-0.5 bg-neutral-200" />
            <div className="h-4 border-x border-t border-neutral-200" />
          </div>
          <div className="flex items-center justify-center rounded-r-md bg-sky-400 text-sm font-semibold text-neutral-50 shadow-md lg:text-xl">
            Rest
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 flex flex-col gap-9">
        <div className="relative flex h-fit items-stretch gap-3">
          <div className="flex flex-col pt-1">
            <div className="h-5 w-4 rounded-full bg-orange-400" />
            <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-orange-400" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Diet - 70%</h3>
            <p>
              Diet plays the most significant role in fat loss. Around 70% of
              your success in burning fat and losing weight can be attributed to
              the food you consume. Focus on creating a calorie deficit by
              eating whole, nutrient-dense foods that are low in refined sugars
              and saturated fats. Emphasize a balanced diet rich in lean
              proteins, healthy fats, complex carbohydrates, and a variety of
              fruits and vegetables. Portion control and mindful eating are key
              components of a successful nutrition plan.
            </p>
          </div>
        </div>

        <div className="relative flex h-fit items-stretch gap-3">
          <div className="flex flex-col pt-1">
            <div className="h-5 w-4 rounded-full bg-red-400" />
            <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-red-400" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Physical Activity - 15%</h3>
            <p>
              Regular physical activity is essential for burning calories and
              increasing overall energy expenditure. Approximately 15% of your
              weight loss success is attributed to exercise. Include a mix of
              cardiovascular exercises, such as running, cycling, or swimming,
              with strength training exercises to build muscle mass.
            </p>
          </div>
        </div>

        <div className="relative flex h-fit items-stretch gap-3">
          <div className="flex flex-col pt-1">
            <div className="h-5 w-4 rounded-full bg-sky-400" />
            <div className="mx-auto h-full w-0.5 bg-gradient-to-b from-sky-400" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Rest - 15%</h3>
            <p>
              Both sleep and stress management play a crucial role in regulating
              hormones that affect appetite and metabolism. Approximately 10% of
              weight loss can be influenced by adequate sleep and effective
              stress management techniques. Aim for 7-9 hours of quality sleep
              each night and practice stress-reduction techniques like
              meditation, yoga, or deep breathing exercises.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
