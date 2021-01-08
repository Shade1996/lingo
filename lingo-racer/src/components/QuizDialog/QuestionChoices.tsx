import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import { gasState } from '../../state/betterGas';
import { useProxy } from 'valtio';

export default function QuestionChoices(props) {
    useProxy(gasState)
    const { q, setAnswer } = props

    return (
        <div className="text-white p-10">
            {q.question}
            <div className="mb-4" />
            {q.choices.map((choice, i) => (
                <div key={i} onClick={() => {
                    const isCorrect = i === q.answer

                    if (!isCorrect) gasState.gas -= 0.34
                    else gasState.gas += 0.1

                    setAnswer(isCorrect)
                }}>
                    <Highlight {...defaultProps} code={choice} language="javascript">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={className} style={style}>
                                {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                    <div className="mb-4" />
                </div>
            ))}
        </div>
    )
}
