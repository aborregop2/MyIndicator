import { useEffect, useState } from "react"
import GaugeContainer from "./components/ui/GaugeContainer"

export default function GaugeGrid() {
  const [values, setValues] = useState(
    Array.from({length: 7}, () => Math.random() * 200)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(Array.from({length: 7}, () => Math.random() * 200))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
      <GaugeContainer 
        title="Gauge 1"
        lha={values[0]}
        range={100}
        nogo1={30}
        nogo2={170}
        colorScheme="1"
        imp={(values[0] - 50).toFixed(1).toString()}
        unit="$"
      />
  )
}