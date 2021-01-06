import LinearProgress from '@material-ui/core/LinearProgress'
import React, { useEffect, useState } from 'react'

export default function Timer(props) {

    const { totalTime } = props
    const [percent, setPercent] = useState(100)
    const [seconds, setSeconds] = useState(totalTime)
    
    useEffect(() => {
        if (props.pause) return

        let time = totalTime
        
        const interval = setInterval(()=>{
            time--
            setSeconds(time)
            setPercent(time / totalTime * 100)

            if (time <= 0) {
                clearInterval(interval)
                return
            }
        },1000)

        return () => {
            clearInterval(interval)
        }
    }, [props.pause])

    return (
        <div className="w-10/12 center-x bottom-0 mb-5">
            <div className="text-white">剩余{seconds}秒</div>
            <LinearProgress variant="determinate" value={percent} style={{
                borderRadius:5,
                height:10,
               }} />
        </div>
    )
}
