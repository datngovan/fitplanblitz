import React from "react"

type TriangleProps = {
  a: number // Length of side a
  b: number // Length of side b
  c: number // Length of side c
}

const Triangle: React.FC<TriangleProps> = ({ a, b, c }) => {
  // Position the first point at (0, 0)
  const x1 = 0
  const y1 = 0

  // Position the second point at (a, 0)
  const x2 = a
  const y2 = 0

  // Calculate the third point using the law of cosines
  const cosAngle = (a ** 2 + c ** 2 - b ** 2) / (2 * a * c)
  const angle = Math.acos(cosAngle)

  const x3 = c * Math.cos(angle)
  const y3 = c * Math.sin(angle)

  return (
    <svg width="200" height="200" viewBox="-10 -10 220 220">
      <polygon
        points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
        fill="lightblue"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  )
}

export default Triangle
