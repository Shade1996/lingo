import React, { useState } from 'react';
import { Button } from '@material-ui/core';
//@ts-ignore
import bgSrc from "../assets/bg.jpg"

const DemoPage = () =>{

    // const [studentNumber, setstudentNumber] = useState("")
    // const [level, setlevel] = useState("")
    // const [lessonName, setlessonName] = useState("")
    // const [lessonTime, setlessonTime] = useState("")
    const studentNumber = "234"

    return (
        <div className="flex flex-1 justify-center items-center h-screen w-screen">
            <div className=" flex flex-col justify-around items-center rounded overflow-hidden" style={{
                width: "90%",
                height: "90%",
                boxShadow: "0px 10px 10px rgba(0,0,0,0.2)"
            }}>
                <div className="flex flex-col items-center">
                    <img className=" h-16 w-16 rounded-full" src={bgSrc} alt="User"/>
                    <p className="font-bold text-xl mt-2">Peter</p>
                    <p className="mt-24 font-bold text-2xl">{`课程名称：太空堡垒`}</    p>
                </div>
                
                <div className="text-gray-700 text-base px-4 py-4">
                    <p className="mt-5">{`学号：${studentNumber}`}</p>
                    <p className="mt-5">{`当前阶段：${studentNumber}`}</p>
                    <p className="mt-5">{`课堂用时：${studentNumber}`}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <Button variant="contained" color="primary">
                查看作品
                </Button>
                </div>
            </div>
        </div>
    )
}

export default DemoPage