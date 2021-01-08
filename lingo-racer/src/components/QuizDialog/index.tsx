import { Dialog, LinearProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import dedent from 'ts-dedent'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { green } from '@material-ui/core/colors';
import CancelIcon from '@material-ui/icons/Cancel';
import GrowTransition from '../GrowTransition';
import Pizzicato from '../Pizzicato';
import { Spring } from 'react-spring/renderprops';
import QuestionChoices from './QuestionChoices';
import QuestionFillIn from './QuestionFillIn';
import Timer from './Timer';
import { gasState } from '../../state/betterGas';
import { useProxy } from 'valtio';

const quiz = {
    title: "level 1 复习",
    questions: [
        {
            question: "下面哪个代码可以在鼠标点击的时候书写“hello”?",
            choices: [
                dedent`
                    shubiao.dianji = gongneng () {
                        shuxie("hello")
                    }
                `,
                dedent`
                    jianpan.anxia = gongneng () {
                        shuxie("hello")
                    }
                `
            ],
            answer: 0
        },
        {
            question: "hahahahahaha",
            choices: ["1", "2", "3", "4", "5", "6"],
            type: "fill-in",
            answer: "1,2,3"
        },
        {
            question: "hahahahahaha",
            choices: [
                dedent`
                    shuxie("hello")
                `,
                dedent`
                    shuxie("world")
                `
            ],
            answer: 0
        },
        {
            question: "hahahahahaha",
            choices: [
                dedent`
                    shuxie("hello")
                `,
                dedent`
                    shuxie("world")
                `
            ],
            answer: 0
        },
        {
            question: "hahahahahaha",
            choices: [
                dedent`
                    shuxie("hello")
                `,
                dedent`
                    shuxie("world")
                `
            ],
            answer: 0
        },
        {
            question: "hahahahahaha",
            choices: [
                dedent`
                    shuxie("hello")
                `,
                dedent`
                    shuxie("world")
                `
            ],
            answer: 0
        }
    ]
}

const ResultDialog = (props) => {
    return (
        <Dialog maxWidth="sm" open={props.open} TransitionComponent={GrowTransition}>
            <div className="p-4 mx-auto text-center">
            {props.correct ? (
                <div>
                    <CheckCircleOutlineIcon fontSize="large" style={{ color: green[500] }} />
                    <div>回答正确！</div>
                </div>
            ) : (
                <div>
                    <CancelIcon fontSize="large" color="secondary" /> 
                    <div>回答错误！</div>
                </div>
            )}
            
            </div>
        </Dialog>
    )
}

export default function QuizDialog() {
    const handleClose = () => {

    }

    useProxy(gasState)

    const [correct, setCorrect] = useState(true)
    const [show, setShow] = useState(false)
    const [qIndex, setQIndex] = useState(0)
    const q = quiz.questions[qIndex]

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false)

                if (qIndex + 1 < quiz.questions.length)
                    setQIndex(qIndex + 1)
                else
                    console.log("no more questions left")

            }, 1500)
        }
    }, [show, qIndex])
    
    const setAnswer = (isCorrect) => {
        setCorrect(isCorrect)
        setShow(true)
    }

    return (
        <Dialog
         fullScreen
         open={true}
         onClose={handleClose}
         PaperProps={{ style: { background: "rgba(0,0,0,0)" }  }}
        >
            {q.type === "fill-in" ? (
                <QuestionFillIn q={q} setAnswer={setAnswer} />
            ) : (
                <QuestionChoices q={q} setAnswer={setAnswer} />
            )}
            <Timer pause={show} totalTime={50}/>
            <ResultDialog correct={correct} open={show} />
            <Spring from={{ frequency: 400 }} to={{ frequency: gasState.gas * 3000 + 200 }}>
                {p => (
                    <Pizzicato frequency={p.frequency} />
                )}
            </Spring>
        </Dialog>
    )
}