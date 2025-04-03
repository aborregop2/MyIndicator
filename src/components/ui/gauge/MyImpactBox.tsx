import { useState, useEffect } from "react"

type MyImpactBoxProps = {
  imp: string
  unit?: string
}

export default function MyImpactBox({ imp,  unit = ""} : MyImpactBoxProps) {
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
    <div className={`${bgColor} w-full h-full rounded-md flex items-center justify-center font-bold text-white shadow-sm p-2 text-lg`}>
        {imp + (unit ? ` ${unit}` : "")}
    </div>
  )
}