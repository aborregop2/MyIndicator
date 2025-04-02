import { useEffect, useState } from "react"
import MyGaugeComponent from "./MyGaugeComponent"

export default function GaugeGrid() {
  const [values, setValues] = useState([
    Math.random() * 200,
    Math.random() * 200,
    Math.random() * 200,
    Math.random() * 200,
    Math.random() * 200,
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setValues([
        Math.random() * 200,
        Math.random() * 200,
        Math.random() * 200,
        Math.random() * 200,
        Math.random() * 200,
      ])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h1 className="col-span-full font-bold mb-4 text-center mt-15">The indicators family</h1>


      <div className="bg-white p-4 rounded-lg shadow">
        <MyGaugeComponent lha={values[0]} range={100} nogo1={40} nogo2={160} colorScheme="1" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <MyGaugeComponent lha={values[1]} range={100} nogo1={40} nogo2={160} colorScheme="2" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <MyGaugeComponent lha={values[2]} range={100} nogo1={40} nogo2={160} colorScheme="3" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <MyGaugeComponent lha={values[3]} range={100} nogo1={40} nogo2={160} colorScheme="4" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <MyGaugeComponent lha={values[4]} range={100} nogo1={40} nogo2={160} colorScheme="5" />
      </div>
    </div>
  )
}

