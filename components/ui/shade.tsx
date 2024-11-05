import React from "react"

type color = {
  w: number
  color: string
  label?: string
}

type data = {
  colors: color[]
  labelColor: string
}

const generateGardient = (colors: color[]) => {
  let currentOffset = 0
  const stops: JSX.Element[] = []
  const blendedPercent = 2
  const size = colors.length
  colors.forEach((shade, index) => {
    const startOffset = currentOffset
    const endOffset = currentOffset + shade.w
    currentOffset = endOffset + blendedPercent
    const ratio = (100 - blendedPercent * (colors.length - 1)) / 100
    //Add color stop
    stops.push(
      <stop
        key={`${index}-start`}
        offset={`${startOffset * ratio}%`}
        style={{ stopColor: shade.color }}
      />
    )
    if (index < size - 1) {
      //Add color end
      stops.push(
        <stop
          key={`${index}-end`}
          offset={`${endOffset * ratio - blendedPercent / 2}%`}
          style={{ stopColor: shade.color }}
        />
      )
    } else {
      //Add color end
      stops.push(
        <stop
          key={`${index}-end`}
          offset={`100%`}
          style={{ stopColor: shade.color }}
        />
      )
    }

    if (index < size - 1) {
      //Add color transistion
      stops.push(
        <stop
          key={`${index}-transistion`}
          offset={`${endOffset * ratio}%`}
          style={{ stopColor: shade.color, opacity: 0.58 }}
        />
      )
    }
  })
  return stops
}

export default function Shade({ colors, labelColor }: data) {
  const result = generateGardient(colors).map((data) => {
    console.log(data.props)
  })
  const blendedPercent = 2
  const labels: JSX.Element[] = []
  const measurements: JSX.Element[] = []

  let currentOffset = 0
  const totalWidth = 100 - blendedPercent * (colors.length - 1) // Adjust total width for blending

  colors.forEach((shade, index) => {
    const startOffset = currentOffset
    const endOffset = currentOffset + shade.w
    const midpoint = (startOffset + endOffset) / 2 // Midpoint of each color section
    currentOffset = endOffset + blendedPercent

    labels.push(
      <text
        key={`label-${index}`}
        x={`${midpoint * (totalWidth / 100)}%`} // Adjust midpoint for total width
        y="50%" // Center vertically in the rectangle
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="12" // Adjust font size as needed
        fill={labelColor} // Text color, adjust as needed
      >
        {shade.label || `Label ${index + 1}`}
      </text>
    )
  })

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dynamicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          {generateGardient(colors)}
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#dynamicGradient)"
        rx={10}
        ry={10}
      />
      {labels}
      {measurements}
    </svg>
  )
}
