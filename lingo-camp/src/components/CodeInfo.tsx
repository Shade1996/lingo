import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import axios from "axios"
import { useProxy } from 'valtio'
import { markdownSrc } from '../state'

export default function CodeInfo({ style }) {
    useProxy(markdownSrc)

    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        axios.get(markdownSrc.value).then(result => {
            setMarkdown(result.data)
        })
    }, [markdownSrc.value])

    return (
        <div className="w-full break-words mb-4 prose" style={style}>
            <ReactMarkdown children={markdown} />                    
        </div>
    )
}
