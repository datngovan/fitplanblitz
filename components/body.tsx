"use client"

import { useState } from "react"

import BackBody from "./back-body"
import FrontBody from "./front-body"
import SideBody from "./side-body"

export default function Body() {
  const [selectedPart, setSelectedPart] = useState("")
  const groupColors = {
    highlight: "animate-muscle-highlight",
    normal: "animate-muscle-normal",
  }

  const handleRadioChange = (e: any) => {
    setSelectedPart(e.target.value)
  }

  const getFillColor = (groupId: string) => {
    return selectedPart === groupId ? groupColors.highlight : groupColors.normal
  }
  return (
    <>
      <h1 className="font-bold text-3xl">Select a Body Part</h1>

      {/* Radio Buttons for Body Part Selection */}
      <div className="flex gap-2 justify-center text-xl flex-wrap">
        <label>
          <input
            type="radio"
            name="bodyPart"
            value="leg"
            onChange={handleRadioChange}
          />
          Legs
        </label>

        <label>
          <input
            type="radio"
            name="bodyPart"
            value="arm"
            onChange={handleRadioChange}
          />
          Arms
        </label>

        <label>
          <input
            type="radio"
            name="bodyPart"
            value="chest"
            onChange={handleRadioChange}
          />
          Chest
        </label>

        <label>
          <input
            type="radio"
            name="bodyPart"
            value="abs"
            onChange={handleRadioChange}
          />
          Abs
        </label>

        <label>
          <input
            type="radio"
            name="bodyPart"
            value="shoulder"
            onChange={handleRadioChange}
          />
          Shoulders
        </label>

        <label>
          <input
            type="radio"
            name="bodyPart"
            value="intercostales"
            onChange={handleRadioChange}
          />
          Intercostales
        </label>
        <label>
          <input
            type="radio"
            name="bodyPart"
            value="neck"
            onChange={handleRadioChange}
          />
          Necks
        </label>
        <label>
          <input
            type="radio"
            name="bodyPart"
            value="glute"
            onChange={handleRadioChange}
          />
          Glute
        </label>
        <label>
          <input
            type="radio"
            name="bodyPart"
            value="back"
            onChange={handleRadioChange}
          />
          Back
        </label>
      </div>
      <div className="flex gap-2 justify-center">
        <FrontBody name={selectedPart} />
        <SideBody name={selectedPart} />
        <BackBody name={selectedPart} />
      </div>
    </>
  )
}
