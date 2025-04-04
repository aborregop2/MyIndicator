"use client"

import { useState, useEffect, useRef } from "react"

type MyImpactBoxProps = {
  imp: string
  unit?: string
}

export default function MyImpactBox({ imp, unit = "" }: MyImpactBoxProps) {
  const [bgColor, setBgColor] = useState("bg-gray-200")
  const [fontSize, setFontSize] = useState(16)
  const textRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const content = imp + (unit ? ` ${unit}` : "")

  useEffect(() => {
    const numValue = Number(imp)

    if (!isNaN(numValue)) {
      setBgColor(numValue >= 0 ? "bg-green-500" : "bg-red-500")
    } else {
      setBgColor("bg-gray-500")
    }
  }, [imp])

  useEffect(() => {
    const adjustFontSize = () => {
      if (!textRef.current || !containerRef.current) return

      // Start with a reasonable size
      let size = 16
      textRef.current.style.fontSize = `${size}px`

      // Reduce font size until text fits within container
      while (
        (textRef.current.offsetWidth > containerRef.current.offsetWidth * 0.9 ||
          textRef.current.offsetHeight > containerRef.current.offsetHeight * 0.9) &&
        size > 8
      ) {
        size -= 0.5
        textRef.current.style.fontSize = `${size}px`
      }

      setFontSize(size)
    }

    adjustFontSize()

    // Re-adjust on window resize
    window.addEventListener("resize", adjustFontSize)
    return () => window.removeEventListener("resize", adjustFontSize)
  }, [content])

  return (
    <div className={`${bgColor} w-full h-full rounded-lg flex items-center justify-center`} ref={containerRef}>
      <div className="text-center w-full h-full flex items-center justify-center p-1">
        <span ref={textRef} className="font-bold text-white" style={{ fontSize: `${fontSize}px` }}>
          {content}
        </span>
      </div>
    </div>
  )
}

