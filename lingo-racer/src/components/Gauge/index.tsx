import React from 'react'
import { useEffect } from 'react'
import GaugeChart from 'react-gauge-chart'
import { useProxy } from 'valtio'
import { gasState } from '../../state/betterGas'

function Gauge() {
    useProxy(gasState)

    useEffect(() => {
        setTimeout(() => {
            const interval = setInterval(()=>{

                gasState.gas -= 0.08
                   
                if (gasState.gas <= 0 ){
                    gasState.gas = 0
                    clearInterval(interval)
                }
            },1000)
        }, 1500);
    }, [])

    return (
        <div className="fixed top-0 mt-16 ml-2 w-40">
            <GaugeChart id="gauge-chart1" percent={gasState.gas} />
        </div>
    )
}

export default Gauge
