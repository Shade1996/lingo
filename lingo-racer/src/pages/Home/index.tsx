import React, { useState } from "react"
//@ts-ignore
import neonJPG from "../../../assets/neon.jpg"
import {Spring} from 'react-spring/renderprops'
import AnimatedText from "../../components/AnimatedText"
import { usePage } from "../../state/usePage"

const Home = () => {
    const [showIntro, setShowIntro] = useState(false)
    const [page, setPage] = usePage()

    return (
        <div className="w-screen h-screen bg-cover bg-center text-white" onClick={() => setShowIntro(true)} style={{
            backgroundImage: `url(${neonJPG})`
        }}>
            <div className="center textglow">
                <div className="text-5xl font-bold leading-10 whitespace-no-wrap">
                    <AnimatedText out={showIntro}>
                        Lingo
                    </AnimatedText>
                    <AnimatedText offset={5} out={showIntro}>
                        Racer
                    </AnimatedText>
                </div>
                <AnimatedText offset={0} out={showIntro}>
                    凌高编程练习系统
                </AnimatedText>
            </div>
            {!showIntro && <div className="text-xs absolute bottom-0 mb-40 center-x textglow" style={{
                animationName: "fadeInOut",
                animationDuration: "1s",
                animationIterationCount: "infinite"
            }}>
                点击屏幕开始游戏
            </div>}
            {showIntro && <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {style => (
                    <div className="w-full h-full bg-black bg-opacity-50 absolute" style={style} onClick={() => {
                        setPage("game")
                    }}>
                        <AnimatedText className="textglow p-10 center-y tracking-wider leading-normal whitespace-pre-wrap">
                            你好，赛车手！在星际穿梭时，你需要躲避前方的障碍物。快速输入路面指示牌上的单词，你就能切换车道，从而躲开障碍。准备好了吗？
                        </AnimatedText>
                        <AnimatedText className="textglow p-4 bottom-0 center-x">    
                            点击屏幕开始吧！
                        </AnimatedText>
                    </div>
                )}
            </Spring>}
        </div>
    )
}

export default Home