import React from "react"
//@ts-ignore
import neonJPG from "../assets/neon.jpg"
import AnimatedText from "./AnimatedText"

const App = () => {
    return (
        <div className="w-screen h-screen bg-cover bg-center" style={{
            backgroundImage: `url(${neonJPG})`
        }}>
            <div className="text-white center textglow">
                <div className="text-5xl font-bold leading-10 whitespace-no-wrap">
                    <AnimatedText>
                        Lingo
                    </AnimatedText>
                    <AnimatedText offset={5}>
                        Racer
                    </AnimatedText>
                </div>
                <AnimatedText offset={0}>
                    凌高编程练习系统
                </AnimatedText>
            </div>
        </div>
    )
}

export default App