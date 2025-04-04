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
    <div className={`${bgColor} w-full h-full rounded-lg flex items-center justify-center`}>
      <div className="text-center w-full h-full flex items-center justify-center overflow-hidden p-1">
        <span className="font-bold text-white text-[min(0.5rem,4vw)] sm:text-[min(0.6rem,3vw)] md:text-[min(0.7rem,2.5vw)] lg:text-[min(0.8rem,2vw)] truncate">
          {imp + (unit ? ` ${unit}` : "")}
        </span>
      </div>
    </div>
  )
}

