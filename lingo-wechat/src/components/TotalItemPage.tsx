import React, { useState } from 'react'

//@ts-ignore
import bgSrc from "../assets/bg.jpg"
import Card from './Card'
import Drawer from '@material-ui/core/Drawer/Drawer'
import ChildList from './ChildList'

const TotalLessonPage = (props:any) =>{
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selected, setSelected] = useState(1)

    const date =new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const months = ["Jan","Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let x = months[month]
    let y
    if (day%10 == 1){
        y = "st"
    }else if (day%10 == 2){
        y = "nd"
    }else if (day%10 == 3){
        y = "rd"
    }else {
        y = "th"
    }
    return(
        <div>
            <div className=" bg-gray-300 top-round">
                <div className="flex justify-between px-4 py-4">
                    <div>
                        <div className="text-sm opacity-75">{`${x} ${day}${y}, ${year}`}</div>
                        <div className="text-3xl">Hey,
                            <span className="font-bold">Shade!</span>
                            <Drawer className="profileDrawer" anchor="bottom" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                                <div className="w-screen max-h-full flex flex-col flex-1 px-2 py-2 ">
                                    <ChildList />
                                    <ChildList />
                                </div>
                            </Drawer>
                        </div>
                    </div>
                    <img className=" h-16 w-16 rounded-full mr-4" src={bgSrc} alt="User"/>
                </div>
                <div className="flex flex-row-reverse justify-around items-stretch pb-4">
                    <div className={`flex flex-col items-center py-4 px-4 rounded-lg ${selected === 2 ? "self-start bg-blue-500 py-2 px-4 shadow-blue" : ""}`} onClick={()=>{setSelected(2)}}>
                        <div className={`font-bold text-3xl ${selected === 2 ? "text-white text-4xl" : ""}`}>12</div>
                        <div className="font-light opacity-50 text-sm">我的盔章</div>
                    </div>
                    <div className={`flex flex-col items-center py-4 px-4 rounded-lg ${selected === 1 ? "self-start bg-blue-500 py-2 px-4 shadow-blue" : ""}`} onClick={()=>{setSelected(1)}}>
                        <div className={`font-bold text-3xl ${selected === 1 ? "text-white text-4xl" : ""}`}>4</div>
                        <div className="font-light opacity-50 text-sm">我的作品</div>
                    </div>
                    <div className={`flex flex-col items-center py-4 px-4 rounded-lg ${selected === 0 ? "self-start bg-blue-500 py-2 px-4 shadow-blue" : ""}`} onClick={()=>{setSelected(0)}}>
                        <div className={`font-bold text-3xl ${selected === 0 ? "text-white text-4xl" : ""}`}>1</div>
                        <div className="font-light opacity-50 text-sm">课堂作品</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Card Item="太空堡垒" />
                <Card Item="太空堡垒" />
                <Card Item="太空堡垒" />                                
            </div>
        </div>
    )
}

export default TotalLessonPage