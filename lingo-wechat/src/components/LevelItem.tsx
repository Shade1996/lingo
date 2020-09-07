import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress'
import { Height } from '@material-ui/icons'
import React, { useState } from 'react'
//@ts-ignore
import imgSrc from '../assets/card1.jpg'
const LevelItem = () =>{

    // const LevelName = ["Level1 入门级课程","Level2 进阶级课程","Level3 飞跃级课程"]
    const [LevelName,setLevelName] = useState("Level1 入门级课程")

    return(
        <div className="flex max-h-full w-11/12 items-center px-2 py-2 mx-2 my-2 box-border rounded-lg bg-gray-200">
            <img src={imgSrc} alt="" className="w-1/4  flex-1 rounded-lg" style={{
                height:"same-as-width"
                // width:"4rem"
            }}/>
            <div className="flex flex-col w-full px-2 py-2" style={{
                flex:"4"
            }}>
                <div className="text-xl font-bold">{`${LevelName}`}</div>
                <div className="text-sm opacity-50">12节课/3个月</div>
                <div className="flex items-center justify-between  w-10/12 h-full">
                    <LinearProgress variant="determinate" value={50} className="w-11/12" />
                    <div className="text-sm mx-4 whitespace-no-wrap">
                        1/12课
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LevelItem