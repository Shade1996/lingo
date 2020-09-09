import React, { useState } from 'react'

//@ts-ignore
import bgSrc from "../assets/bg.jpg"
import Card from './Card'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer/Drawer'
import ChildList from './ChildList'

const TotalLessonPage = (props:any) =>{
    const [openDrawer, setOpenDrawer] = useState(false)

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
                            <ExpandMoreIcon onClick={()=> setOpenDrawer(true)}/>
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
                <div className="flex justify-around pb-4">
                    <div className="flex flex-col items-center bg-blue-500 py-4 px-4 rounded-lg shadow-blue">
                        <div className="font-bold text-white text-4xl">12</div>
                        <div className="font-light opacity-50">已购买</div>
                    </div>
                    <div className="flex flex-col items-center py-4 px-4 rounded-lg">
                        <div className="font-bold text-3xl">1/12</div>
                        <div className="font-light opacity-50">进行中</div>
                    </div>
                    <div className="flex flex-col items-center py-4 px-4 rounded-lg">
                        <div className="font-bold text-3xl">1</div>
                        <div className="font-light opacity-50">已完成</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Card Item="项目一：太空堡垒" ItemDetail="此项目共3节课" progress={33}/>
                <Card Item="项目一：太空堡垒" ItemDetail="此项目共3节课" progress={33}/>
            </div>
        </div>
    )
}

export default TotalLessonPage