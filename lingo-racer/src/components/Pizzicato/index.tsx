import React, { useEffect, useRef } from 'react'
//@ts-ignore
import musicSrc from "../../../assets/sky.mp3"
import Pizzicato from "pizzicato"

export default function ({ frequency }) {
    const lowPassFilterRef = useRef()

    useEffect(() => {
        //@ts-ignore
        const sound = new Pizzicato.Sound(musicSrc, () => {
            //@ts-ignore
            const lowPassFilter = new Pizzicato.Effects.LowPassFilter({
                frequency: 400,
                peak: 10
            })
            lowPassFilterRef.current = lowPassFilter

            sound.addEffect(lowPassFilter)
            sound.play()
        })
    }, [])

    useEffect(() => {
        if (!lowPassFilterRef.current || !frequency) return
        //@ts-ignore
        lowPassFilterRef.current.frequency = frequency

    }, [frequency])

    return null
}
