import { assert } from "@lincode/utils"
import React from "react"

const animateIn = (el: HTMLDivElement, i: number) => {
    el.animate([
        { transform: `translateY(${i%2 ? "100" : "-100"}%)`, opacity: "0" },
        { transform: "translateY(0%)", opacity: "1" }
    ], {
        duration: 300,
        delay: i * 100,
        fill: "both",
        easing: "ease"
    })
}

const animateOut = (el: HTMLDivElement, i: number) => {
    el.animate([
        { transform: "translateY(0%)", opacity: "1" },
        { transform: `translateY(${i%2 ? "100" : "-100"}%)`, opacity: "0" }
    ], {
        duration: 300,
        delay: i * 100,
        fill: "both",
        easing: "ease"
    })
}

const AnimatedText: React.FC<{ className?: string, offset?: number, out?: boolean }> = (props) => {
    assert(typeof props.children === "string")

    const textArray = [...props.children]

    return (
        <div className={props.className}>
            {textArray.map((char, i) => (
                <div className="inline-block" key={i} ref={(el: HTMLDivElement | null) => {
                    if (props.out)
                        el && animateOut(el, i + (props.offset ?? 0))
                    else
                        el && animateIn(el, i + (props.offset ?? 0))
                }}>
                    {char}
                </div>
            ))}
        </div>
    )
}

export default AnimatedText