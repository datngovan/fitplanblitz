import { memo } from "react"
import { FaInfoCircle } from "react-icons/fa"

import { Card, CardContent } from "@/components/ui/card"

type Props = {
  fat_percentage: number
  is_healthy: boolean
  max_value: number
}
function BodyMassResult({ fat_percentage, is_healthy, max_value }: Props) {
  return (
    <div className="flex size-full flex-col gap-5">
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
        <div className="flex h-8 w-full gap-0 rounded-md text-[0.6rem] md:text-xs font-semibold text-neutral-50 shadow-md">
          <div className="flex h-full w-[48%] items-center rounded-l-md bg-green-400">
            <span className="mx-auto text-center">Healthy</span>
          </div>

          <div className="relative h-full w-[4%] bg-gradient-to-r from-green-400 to-yellow-400">
            <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
              <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
              <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                {max_value}%
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
