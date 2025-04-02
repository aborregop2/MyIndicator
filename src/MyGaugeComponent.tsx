import GaugeComponent from "react-gauge-component"

interface GaugeProps {
  lha: number
  range: number
  nogo1: number
  nogo2: number
  colorScheme?: "1" | "2" | "3" | "4" | "5"
}

export default function MyGaugeComponent({ lha, range, nogo1, nogo2, colorScheme = "1" }: GaugeProps) {
const segmentsColor = {
    "1": ["#FF0000", "#00FF00", "#000000"],
    "2": ["#000000", "#00FF00", "#FF0000"],
    "3": ["#00FF00", "#FF0000"],
    "4": ["#FF0000", "#00FF00"],
    "5": ["#FF0000", "#00FF00", "#FF0000"],
}


return (
    <GaugeComponent
        value={lha}
        minValue={0}
        maxValue={range * 2}
        type="semicircle"

        labels={{
            valueLabel: {
                style: {
                    fontWeight: "bold",
                },
                matchColorWithArc: true,
                formatTextValue: (value) => {
                    return value.toFixed(0)
                }
            },

            tickLabels: {
                type: "outer",
                ticks: [
                    { value: nogo1 },
                    { value: nogo2 }
                ],
                defaultTickLineConfig: {
                    color: "#000000",
                    width: 1,
                    length: 5,
                },
                defaultTickValueConfig: {
                    style: {
                        fill: "#000000",
                        fontWeight: "bold",
                    },
                },
            },
        }}

        arc={{
            colorArray: segmentsColor[colorScheme],
            subArcs: [{ limit: nogo1 }, { limit: nogo2 }, {}],
            padding: 0,
            width: 0.3,
            cornerRadius: 0,
        }}

        pointer={{
            elastic: true,
            animationDelay: 0,
        }}
    />
)
}

