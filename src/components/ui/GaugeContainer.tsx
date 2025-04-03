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
	  <div className="w-full h-full flex">
		<div className="w-5/6">
			<h2 className="text-xl font-bold text-center text-black w-full">
				{title}
			</h2>
			<MyGaugeComponent
				lha={lha}
				range={range}
				nogo1={nogo1}
				nogo2={nogo2}
				colorScheme={colorScheme}
			/>
		</div>
  
		<div className="w-1/6 flex flex-col justify-end">
        	<div className="aspect-square w-full">
          	<MyImpactBox imp={imp} unit={unit} />
        	</div>
      	</div>
	  </div>
	)
}
