import { PageHeader } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import Keyboard from 'react-coding-keyboard'
import { useProxy } from 'valtio'
import Buttons from '../components/Buttons'
import Code from '../components/Code'
import CodeInfo from '../components/CodeInfo'
import { code, markdownSrc, page, showKeyboard } from '../state'
import { Screen } from "react-screens"
import formatTitle from '../utils/formatTitle'


export default function CodePage() {
    useProxy(showKeyboard)
    useProxy(markdownSrc)
    // const [code, setCode] = useState("")
    
    const scrollContainer = useRef()

    useEffect(() => {
        //@ts-ignore
        scrollContainer.current.scrollTop = 0
    }, [markdownSrc.value])

    return (
        <>
            <Screen>
                <div className="w-screen h-screen flex flex-col">
                    <PageHeader
                    className="w-full"
                    onBack={() => {
                        page.value = "home"
                        code.value = ""
                    }}
                    subTitle={formatTitle(markdownSrc.value)}
                    />
                    <div ref={scrollContainer} className="p-4 flex-grow overflow-scroll">
                        <CodeInfo style={{ display: showKeyboard.value ? "none" : "block" }} />
                        <Code />
                        <Buttons />
                    </div>
                </div>
            </Screen>
            <Keyboard
             show={showKeyboard.value}
             onHide={() => showKeyboard.value = false}
             onKey={key => code.value += key} 
            //  onBackspace={() => setCode(code.slice(0, -1))}
            />
        </>
    )
}
