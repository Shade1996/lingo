import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress'
import { Height } from '@material-ui/icons'
import React, { useState } from 'react'
//@ts-ignore
import imgSrc from '../assets/card1.jpg'
import LockIcon from '@material-ui/icons/Lock';
import { setCurrentPage } from '../state';


const LevelItem = (props: { access: boolean, levelName: string, levelClass:string , totalClass?:string }) =>{

    // const LevelName = ["Level1 入门级课程","Level2 进阶级课程","Level3 飞跃级课程"]
    const [levelName,setLevelName] = useState("")
    const [levelClass,setLevelClass] = useState("")
    const [totalClass,setTotalClass] = useState("")
    const [Access, setAccess] = useState(false)

    return(
        <div className="flex max-h-full w-11/12 items-center px-2 py-2 mx-2 my-2 box-border rounded-lg bg-opacity-25 bg-white" style={{
            boxShadow: "0 19px 38px rgba(0,0,0,0.20)"
        }} onClick={() => setCurrentPage("total")}>
            <img src={imgSrc} alt="" className="w-1/4  flex-1 rounded-lg" style={{
                height:"same-as-width"
                // width:"4rem"
            }} onClick={() => setCurrentPage("total")}/>
            <div className="flex flex-col w-full px-2 py-2" style={{
                flex:"4"
            }}>
                <div className="text-xl font-bold">{props.levelName}</div>
                <div className="text-sm opacity-75 font-bold">{props.levelClass}</div>
                <div className="flex items-center justify-between  w-10/12 h-full">{props.access ?
                    <>
                        {/* <LinearProgress variant="determinate" value={50} className="w-11/12" /> */}
                        {/* <div className="text-sm mx-4 whitespace-no-wrap">
                            {props.totalClass}
                        </div> */}
                    </>
                    :   
                        <>
                            <div className="flex justify-center w-full">
                                <LockIcon />
                            </div>
                        </>
                    }
                    {/* <LinearProgress variant="determinate" value={50} className="w-11/12" />
                    <div className="text-sm mx-4 whitespace-no-wrap">
                        {props.TotalClass}
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default LevelItem