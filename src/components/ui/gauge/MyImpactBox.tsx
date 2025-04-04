"use client"

import { useState, useEffect } from "react"

type MyImpactBoxProps = {
  imp: string
  unit?: string
}

export default function MyImpactBox({ imp, unit = "" }: MyImpactBoxProps) {
  const [bgColor, setBgColor] = useState("bg-gray-200")

  useEffect(() => {
    const numValue = Number(imp)

    if (!isNaN(numValue)) {
      setBgColor(numValue >= 0 ? "bg-green-500" : "bg-red-500")
    } else {
      setBgColor("bg-gray-500")
    }
  }, [imp])

  return (
    <div className={`${bgColor} w-full h-full rounded-lg flex items-center justify-center p-1 sm:p-2`}>
      <div className="text-center w-full">
        <span className="font-bold text-white text-[clamp(0.9rem,2vw,1rem)] leading-tight block break-words hyphens-auto">
          {imp + (unit ? ` ${unit}` : "")}
        </span>
      </div>
    </div>
  )
}

