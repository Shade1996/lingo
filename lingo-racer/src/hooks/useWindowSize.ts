import { useEffect, useState } from "react"

export default () => {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const fn = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener("resize", fn)
        
        return () => {
            window.removeEventListener("resize", fn)
        }
    }, [])

    return windowSize
}