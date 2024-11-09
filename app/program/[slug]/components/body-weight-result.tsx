import { memo } from "react"
import { FaInfoCircle } from "react-icons/fa"

import { bmiScale } from "@/lib/utils/bmi"
import { Card, CardContent } from "@/components/ui/card"
import { GradientBar } from "@/components/ui/gardient-bar"
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
      <div className="flex w-full flex-col gap-5">
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
        <div className="mb-10 flex w-full flex-col gap-0 font-semibold">
          <GradientBar
            className="text-lg"
            colors={[
              {
                w: 20,
                color: "rgba(250,204,21,1)",
                label: "Underweight",
                measurementValue: `${bmi_scale.underweight}Kg`,
              },
              {
                w: 40,
                color: "rgba(74,222,128,1)",
                label: "Healthy",
                measurementValue: `${bmi_scale.healthy}Kg`,
              },
              {
                w: 20,
                color: "rgba(250,204,21,1)",
                label: "Overweight",
                measurementValue: `${bmi_scale.overweight}Kg`,
              },
              { w: 20, color: "rgba(251,146,60,1)", label: "Obese" },
            ]}
            height={32}
          />
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
