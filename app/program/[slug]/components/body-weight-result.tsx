import { memo } from "react"
import { FaInfoCircle } from "react-icons/fa"

import { bmiScale } from "@/lib/utils/bmi"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type Props = {
  readonly weight: number
  readonly height: number
  readonly bmi_scale: bmiScale
  readonly bmi: number
  readonly status: string
}
function BodyWeightResult({ weight, height, bmi_scale, bmi, status }: Props) {
  return (
    <>
      {/* weight */}
      <div className="flex size-full flex-col gap-5">
        <h3 className="text-xl font-semibold">Weight Assessment</h3>
        <div className="flex items-baseline gap-2">
          <div>
            Your current weight (<b>{weight}Kg</b>) is considered
          </div>
          {status === "healthy" && (
            <span className="text-xl font-semibold text-green-400">
              {" "}
              Healthy
            </span>
          )}
          {status === "underweight" && (
            <span className="text-xl font-semibold text-yellow-400">
              {" "}
              Underweight
            </span>
          )}
          {status === "overweight" && (
            <span className="text-xl font-semibold text-yellow-400">
              {" "}
              Overweight
            </span>
          )}
          {status === "obese" && (
            <span className="text-xl font-semibold text-orange-400">
              {" "}
              Obese
            </span>
          )}
        </div>

        {/* chart v2 */}
        <div className="mb-10 flex w-full flex-col gap-0">
          <div className="flex h-8 w-full gap-0 rounded-md text-[0.6rem] md:text-xs font-semibold text-neutral-50 shadow-md">
            <div className="flex h-full w-[18%] items-center rounded-l-md bg-yellow-400">
              <span className="mx-auto text-center">Underweight</span>
            </div>

            <div className="relative h-full w-[4%] bg-gradient-to-r from-yellow-400 to-green-400">
              <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                  {bmi_scale.underweight}Kg
                </div>
              </div>
            </div>

            <div className="flex h-full w-[38%] items-center bg-green-400">
              <span className="mx-auto text-center">Healthy</span>
            </div>

            <div className="relative h-full w-[4%] bg-gradient-to-r from-green-400 to-yellow-400">
              <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                  {bmi_scale.healthy}Kg
                </div>
              </div>
            </div>

            <div className="flex h-full w-1/5 items-center bg-yellow-400">
              <span className="mx-auto text-center">Overweight</span>
            </div>

            <div className="relative h-full w-[4%] bg-gradient-to-r from-yellow-400 to-orange-400">
              <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                <div className="mx-auto h-3 w-0.5 bg-neutral-300" />
                <div className="mx-auto w-10 text-center font-normal text-neutral-400">
                  {bmi_scale.overweight}Kg
                </div>
              </div>
            </div>

            <div className="flex h-full w-1/5 items-center rounded-r-md bg-orange-400">
              <span className="mx-auto text-center">Obese</span>
            </div>
          </div>
        </div>

        <Card className="bg-neutral-50 pt-2 text-sm text-neutral-600">
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-400">
              <FaInfoCircle />
              Note
            </div>
            <p className="flex flex-wrap gap-1">
              This result is calculated based on
              <Sheet>
                <SheetTrigger className="flex items-center gap-1 text-sm text-sky-400 underline-offset-4 hover:underline">
                  BMI.
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="max-w-md text-xl flex flex-col"
                >
                  BMI calculate fomular
                  <div className="flex flex-col gap-6 text-lg">
                    <math className="inline-flex">
                      <mrow>
                        <mi>BMI</mi>
                        <mo>=</mo>
                        <mfrac>
                          <mi>weight (kg)</mi>
                          <msup>
                            <mrow>
                              <mi>height (m)</mi>
                            </mrow>
                            <mn>2</mn>
                          </msup>
                        </mfrac>
                      </mrow>
                    </math>
                    <math className="inline-flex">
                      <mrow>
                        <mi>BMI</mi>
                        <mo>=</mo>
                        <mfrac>
                          <mi>{weight} (kg)</mi>
                          <msup>
                            <mrow>
                              <mi>{height / 100} (m)</mi>
                            </mrow>
                            <mn>2</mn>
                          </msup>
                        </mfrac>
                      </mrow>
                    </math>
                    <math className="inline-flex">
                      <mrow>
                        <mi>BMI</mi>
                        <mo>=</mo>
                        <mi>{bmi}</mi>
                      </mrow>
                    </math>
                  </div>
                </SheetContent>
              </Sheet>
              BMI provides information on your weight status but ignores factors
              like muscle mass and body composition. Two people with the same
              BMI can have different health profiles.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default memo(BodyWeightResult)
