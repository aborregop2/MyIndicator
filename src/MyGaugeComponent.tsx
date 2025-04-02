import GaugeComponent from "react-gauge-component"

interface GaugeProps {
  lha: number
  range: number
  nogo1: number
  nogo2: number
  colorScheme?: "col1" | "col2"
}

export default function MyGaugeComponent({ lha, range, nogo1, nogo2, colorScheme = "col1" }: GaugeProps) {
  const segmentsColor = {
    col1: ["#FF0000", "#00FF00", "#000000"],
    col2: ["#000000", "#00FF00", "#FF0000"],
  }


  return (
    <GaugeComponent
      value={lha}
      minValue={0}
      maxValue={range * 2}
      type="radial"
      labels={{
        valueLabel: {
          style: {
            fontWeight: "bold",
          },
          matchColorWithArc: true,
        },

        tickLabels: {
          type: "inner",
          ticks: (() => {
            const ticks = []
            for (let i = 0; i <= range * 2; i += 20) {
              ticks.push({
                value: i
              })
            }
            return ticks
          })(),
        },
      }}

      arc={{
        colorArray: segmentsColor[colorScheme],
        subArcs: [{ limit: nogo1 }, { limit: nogo2 }, {}],
        padding: 0.02,
        width: 0.3,
        cornerRadius: 5,
      }}

      pointer={{
        elastic: true,
        animationDelay: 0,
      }}
    />
  )
}

