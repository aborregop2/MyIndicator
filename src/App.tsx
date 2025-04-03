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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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

      <GaugeContainer
        title="Gauge 2"
        lha={values[1]}
        range={100}
        nogo1={30}
        nogo2={170}
        colorScheme="2"
        imp={(values[1] * 0.5).toFixed(1).toString()}
        unit="%"
      />

      <GaugeContainer
        title="Gauge 3"
        lha={values[2]}
        range={100}
        nogo1={30}
        nogo2={170}
        colorScheme="3"
        imp={(values[2] / 2).toFixed(1).toString()}
        unit="°C"
      />

      <GaugeContainer
        title="Gauge 4"
        lha={values[3]}
        range={100}
        nogo1={30}
        nogo2={170}
        colorScheme="4"
        imp={(values[3] + 25).toFixed(1).toString()}
        unit="psi"
      />

      <GaugeContainer
        title="Gauge 5"
        lha={values[4]}
        range={100}
        nogo1={30}
        nogo2={170}
        colorScheme="5"
        imp={(values[4] * 2).toFixed(1).toString()}
        unit="km/h"
      />

      <GaugeContainer
        title="Gauge 6"
        lha={values[5]}
        range={100}
        nogo1={30}
        nogo2={170}
        colorScheme="2"
        imp={(values[5] - 100).toFixed(1).toString()}
        unit="m"
      />

      <GaugeContainer
        title="Gauge 7"
        lha={values[6]}
        range={100}
        nogo1={30}
        nogo2={170}
        colorScheme="1"
        imp={(values[6] / 10).toFixed(1).toString()}
        unit="L"
      />
    </div>
  )
}

//TODO: ImpactBox más grande
//TODO: Quitar el shadow de lha