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
                const [description, codeMd] = exercise.split("```js")

                ;[code.value, test.value] = codeMd.split("```")[0].split("//test")

                data = data.replace("```js" + codeMd, "")

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
