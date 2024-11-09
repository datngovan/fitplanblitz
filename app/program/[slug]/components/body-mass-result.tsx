import { memo } from "react"
import { FaInfoCircle } from "react-icons/fa"

import { Card, CardContent } from "@/components/ui/card"
import { GradientBar } from "@/components/ui/gardient-bar"

type Props = {
  fat_percentage: number
  is_healthy: boolean
  max_value: number
}
function BodyMassResult({ fat_percentage, is_healthy, max_value }: Props) {
  return (
    <div className="flex w-full flex-col gap-5">
      <h3 className="text-xl font-semibold">Body Composition Analysis</h3>
      <div className="flex items-baseline gap-2">
        <div>
          Your current body composition (<b>{fat_percentage}%</b>) is considered
        </div>
        {is_healthy ? (
          <span className="text-xl font-semibold text-green-400">Healthy</span>
        ) : (
          <span className="text-xl font-semibold text-yellow-400">
            Overweight
          </span>
        )}
      </div>

      {/* chart v2 */}
      <div className="mb-10 flex w-full flex-col gap-0">
        <GradientBar
          className="text-lg"
          colors={[
            {
              w: 50,
              color: "rgba(74,222,128,1)",
              label: "Healthy",
              measurementValue: `${max_value} %`,
            },
            {
              w: 50,
              color: "rgba(250,204,21,1)",
              label: "Overweight",
            },
          ]}
          height={32}
        />
      </div>
      <Card className="bg-neutral-50 pt-3 text-sm text-neutral-600 grow">
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-lg font-semibold text-sky-400">
            <FaInfoCircle />
            Note
          </div>
          <p>
            The current health result of your body composition is calculated
            considering your gender and age. This personalized approach helps
            provide a more accurate assessment of your specific health
            condition.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default memo(BodyMassResult)
