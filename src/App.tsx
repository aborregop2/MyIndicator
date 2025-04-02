import MyGaugeComponent from "./MyGaugeComponent"

export default function App() {

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8 text-center">React Gauge Components</h1>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="w-full md:w-1/2 max-w-md">
          <MyGaugeComponent lha={200*Math.random()} range={100} nogo1={40} nogo2={160} colorScheme="col1" />
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          <MyGaugeComponent lha={200*Math.random()} range={100} nogo1={40} nogo2={160} colorScheme="col2" />
        </div>
      </div>
    </div>
  )
}

