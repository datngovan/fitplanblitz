import React, { useId } from "react"
import { VariantProps, cva } from "class-variance-authority"

type Color = {
  w: number
  color: string
  label?: string
  measurementValue?: string
}

type GradientBarProps = VariantProps<typeof gradientBarStyles> & {
  colors: Color[]
  height: number
  blendPercent?: number
  className?: string
}

// Define `cva` utility for GradientBar styles
const gradientBarStyles = cva("w-full", {
  variants: {
    round: {
      full: "rounded-full",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      sx: "rounded-sx",
      none: "rounded-none",
    },
    labelSize: {
      lg: "text-md md:text-lg",
      md: "text-sm: md:text-md",
      sm: "text-sx md:text-sm",
      xs: "text-[.7rem] md:text-sx",
    },
  },
  defaultVariants: {
    round: "md",
    labelSize: "xs",
  },
})

export const GradientBar: React.FC<GradientBarProps> = ({
  colors,
  height,
  blendPercent = 4,
  className,
  round,
  labelSize,
}) => {
  const gradientId = useId()
  const generateGradient = () => {
    let currentOffset = 0
    const stops: JSX.Element[] = []
    const size = colors.length
    colors.forEach((shade, index) => {
      const startOffset = currentOffset
      const endOffset = currentOffset + shade.w - blendPercent
      currentOffset = endOffset + blendPercent
      console.log(
        `start-end-startblened: ${startOffset} - ${endOffset} - ${endOffset}`
      )
      //Add color stop
      stops.push(
        <stop
          key={`${index}-start`}
          offset={`${startOffset}%`}
          style={{ stopColor: shade.color }}
        />
      )

      if (index < size - 1) {
        //Add color transistion
        stops.push(
          <stop
            key={`${index}-transistion`}
            offset={`${endOffset}%`}
            style={{ stopColor: shade.color, opacity: 0.95 }}
          />
        )
      }
    })
    console.log("stops:", stops)
    return stops
  }

  const generateLabel = () => {
    const labels: JSX.Element[] = []
    let currentOffset = 0
    colors.forEach((shade, index) => {
      const startOffset = currentOffset
      const endOffset = currentOffset + shade.w
      const midpoint = (startOffset + endOffset - blendPercent / 2) / 2 // Midpoint of each color section
      currentOffset = endOffset

      console.log(
        `Color ${index + 1}:  ${startOffset} - ${endOffset} - ${midpoint}`
      )

      labels.push(
        <text
          key={`label-${index}`}
          x={`${midpoint}%`} // Adjust midpoint for total width
          y="50%" // Center vertically in the rectangle
          textAnchor="middle"
          alignmentBaseline="middle"
          className={gradientBarStyles({ labelSize: labelSize })}
          fill={"white"} // Text color, adjust as needed
        >
          {shade.label || null}
        </text>
      )
    })
    return labels
  }
  const generateMeasurement = () => {
    const labels: JSX.Element[] = []
    let currentOffset = 0
    colors.forEach((shade, index) => {
      const endOffset = currentOffset + shade.w
      const targetPoint = endOffset - blendPercent / 2
      currentOffset = endOffset
      console.log(targetPoint)
      labels.push(
        <g key={`label-group-${index}`}>
          {/* Small line above the number */}
          {index < colors.length - 1 && (
            <line
              x1={`${targetPoint}%`}
              y1="5%" // Position just above the label
              x2={`${targetPoint}%`}
              y2="30%" // Adjust to control line height
              stroke="grey" // Line color, adjust as needed
              strokeWidth="1.5" // Line thickness, adjust as needed
            />
          )}
          {/* Measurement label */}
          <text
            x={`${targetPoint}%`}
            y="50%" // Center vertically in the rectangle
            textAnchor="middle"
            alignmentBaseline="middle"
            className={gradientBarStyles({ labelSize: labelSize })}
          >
            {shade.measurementValue || null}
          </text>
        </g>
      )
    })
    return labels
  }

  return (
    <>
      <svg className={gradientBarStyles({ round: round })} height={height}>
        <defs>
          <linearGradient
            id={`gradient-${gradientId}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            {generateGradient()}
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#gradient-${gradientId})`}
        />
        {generateLabel()}
      </svg>
      <svg className={gradientBarStyles({ round: round })} height={height}>
        {generateMeasurement()}
      </svg>
    </>
  )
}
