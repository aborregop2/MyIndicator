import MyGaugeComponent from "./gauge/MyGaugeComponent"
import MyImpactBox from "./gauge/MyImpactBox"

interface GaugeContainerProps {
  title: string
  lha: number
  range: number
  nogo1: number
  nogo2: number
  colorScheme: "1" | "2" | "3" | "4" | "5"
  imp: string
  unit?: string
}

export default function GaugeContainer({ title, lha, range, nogo1, nogo2, colorScheme, imp, unit }: GaugeContainerProps) {
  return (
    <div className="w-full h-full flex flex-col border border-gray-200 rounded-lg shadow-sm bg-white p-1">
      <h2 className="text-xl font-bold text-center text-black w-full mb-3">
        {title}
      </h2>
      
      <div className="flex flex-1">
        <div className="w-3/4 text-sm h-full">
          <MyGaugeComponent
            lha={lha}
            range={range}
            nogo1={nogo1}
            nogo2={nogo2}
            colorScheme={colorScheme}
          />
        </div>
        
        <div className="w-1/4 flex flex-col justify-end">
          <div className="aspect-square w-full mb-5">
            <MyImpactBox imp={imp} unit={unit} />
          </div>
        </div>
      </div>
    </div>
  )
}
