import { PageHeader } from 'antd'
import React, { useState } from 'react'
import Keyboard from 'react-coding-keyboard'
import { useProxy } from 'valtio'
import Buttons from '../components/Buttons'
import Code from '../components/Code'
import CodeInfo from '../components/CodeInfo'
import { page, showKeyboard } from '../state'
import { Screen } from "react-screens"

export default function CodePage() {
    useProxy(showKeyboard)

    const [code, setCode] = useState("")

    return (
        <>
            <Screen>
                <div className="w-screen h-screen flex flex-col">
                    <PageHeader
                    className="w-full"
                    onBack={() => page.value = "home"}
                    // title="Comment Your JavaScript CodePassed"
                    subTitle="Comment Your JavaScript CodePassed"
                    />
                    <div className="p-4 flex-grow overflow-scroll">
                        <CodeInfo style={{ display: showKeyboard.value ? "none" : "block" }} />
                        <Code code={code} />
                        <Buttons />
                    </div>
                </div>
            </Screen>
            <Keyboard
             show={showKeyboard.value}
             onHide={() => showKeyboard.value = false}
             onKey={key => setCode(code + key)} 
             onBackspace={() => setCode(code.slice(0, -1))}
            />
        </>
    )
}
