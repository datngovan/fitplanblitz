import { Separator } from "@/components/separator"

export default function Suggestion() {
  return (
    <>
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
              {ideal_weight} Kg to look muscular. Keep in mind that weight alone
              is not enough, body fat percentage is also an important factor.
            </p>
          )}
        </div>

        <Separator orientation="vertical" className="hidden h-28 lg:block" />

        {/* composition target */}
        <div className="flex size-full flex-col gap-5">
          <h3 className="text-xl font-semibold">Suggested Body Composition</h3>
          <div className="text-3xl font-semibold text-emerald-500">
            {composition.ideal_fat <= composition.fat_percentage
              ? composition.ideal_fat
              : composition.fat_percentage}
            %
          </div>
          {composition.ideal_fat >= composition.fat_percentage ? (
            <p>
              Your current body fat percentage is already perfect, so our job is
              to ensure that you maintain this body composition.
            </p>
          ) : (
            <p>
              Based on the ideal body fat percentages according to Jackson &
              Pollock and your fitness goal, the ideal body composition to work
              with is {composition.ideal_fat}%.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
