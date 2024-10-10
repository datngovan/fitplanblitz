import { IoIosAdd, IoIosRemove } from "react-icons/io"

import { Button } from "./ui/button"
import { Slider } from "./ui/slider"

export default function Picker({
  onAdd,
  onRemove,
  onSlide,
  value,
  max,
  min,
  tag,
}: {
  onAdd: () => void
  onRemove: () => void
  onSlide: (e: number) => void
  value: number
  max: number
  min: number
  tag: string
}) {
  // returns
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-fit flex-col gap-2">
        <div className="flex items-center gap-6">
          <Button
            onClick={() => {
              if (value - 1 >= min) onRemove()
            }}
            variant="outline"
            className="size-10 rounded-full p-2 text-2xl"
          >
            <IoIosRemove />
          </Button>
          <div id="age" className="text-5xl font-bold">
            {value}
          </div>
          <Button
            onClick={() => {
              if (value + 1 <= max) onAdd()
            }}
            variant="outline"
            className="size-10 rounded-full p-2 text-2xl"
          >
            <IoIosAdd />
          </Button>
        </div>
        <span className="text-md text-center text-neutral-500">{tag}</span>
      </div>
      <Slider
        defaultValue={[value]}
        value={[value]}
        onValueChange={(e) => onSlide(e[0])}
        max={max}
        min={min}
        step={1}
      />
    </div>
  )
}
