import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import axios from "axios"
import { useProxy } from 'valtio'
import { code, markdownSrc, test } from '../state'

export default function CodeInfo({ style }) {
    useProxy(markdownSrc)

    const [markdown, setMarkdown] = useState("")
    
    useEffect(() => {
        (async () => {
            let { data } = await axios.get(markdownSrc.value)

            try {
                const exercise = data.split("------")[1]
                let [, codeMd] = exercise.split("```js")
                const codeMdOriginal = codeMd

                const stringTest = codeMd.split("//string-test")[1]?.split("\n")[0]?.trim()

                if (stringTest)
                    codeMd = codeMd.replace("//string-test " + stringTest, "")

                test.stringTest = stringTest

                ;[code.value, test.normalTest] = codeMd.split("```")[0].split("//test")

                data = data.replace("```js" + codeMdOriginal, "")

            } catch {}
            
            setMarkdown(data)
        })()
    }, [markdownSrc.value])

    return (
        <div className="w-full break-words mb-4 prose" style={style}>
            <ReactMarkdown children={markdown} />                    
        </div>
    )
}
