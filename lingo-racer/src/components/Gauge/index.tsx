import React from 'react'
import { useEffect } from 'react'
import GaugeChart from 'react-gauge-chart'
import { useProxy } from 'valtio'
import { gasState } from '../../state/state'

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
        <div className="fixed top-0 mt-12 ml-2 w-40">
            <GaugeChart id="gauge-chart1" arcsLength={[0.2, 0.5, 0.3]} percent={gasState.gas} colors={['#EA4228','#F5CD19','#5BE12C' ]} needleColor={'#a154ff'} needleBaseColor={'#a154ff'} animDelay={150}/>
        </div>
    )
}

export default Gauge
