import { Chip } from '@material-ui/core'
import React, { useState } from 'react'

export default function QuestionFillIn({ q, setAnswer }) {
    const [topChips, setTopChips] = useState([])
    const [bottomChips, setBottomChips] = useState([...q.choices])

    return (
        <>
            <div className="text-white p-10 space-x-4 space-y-3">
                {topChips.map((p,i) => (
                    <Chip label={p} key={i} className={i === 0 ? "ml-4 mt-3" : ""} onClick={() => {
                        const newTopChips = topChips.filter(value => value !== p)
                        setTopChips(newTopChips)

                        const newBottomChips = [...bottomChips, p]
                        setBottomChips(newBottomChips)
                    }} />  
                ))}
            </div>
            <div className="text-white p-10 space-x-4 space-y-3 bottom-0 absolute">
                {bottomChips.map((p, i) => (
                    <Chip label={p} key={i} clickable className={i === 0 ? "ml-4 mt-3" : ""} onClick={() => {
                        const newBottomChips = bottomChips.filter(value => value !== p)
                        setBottomChips(newBottomChips)

                        const newTopChips = [...topChips, p]
                        setTopChips(newTopChips)

                        if (newTopChips.join(",") === q.answer)
                            setAnswer(true)
                    }} />
                ))}
            </div>
        </>
    )
}