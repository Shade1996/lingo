import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { useGas } from '../../state/useGas'

function Gauge() {
    const [gas] = useGas()

    return (
        <div className="fixed bottom-0 mb-16 ml-2 w-40">
            <GaugeChart id="gauge-chart1" percent={gas} />
        </div>
    )
}

export default Gauge
