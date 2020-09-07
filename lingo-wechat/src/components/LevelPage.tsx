import React from 'react'
//@ts-ignore
import levelSrc from '../assets/card2.jpg'
import LevelItem from './LevelItem'
const LevelPage =() =>{

    return(
        <div className="flex flex-col flex-1 w-screen h-screen">
           <div className="w-screen flex flex-col bg-gray-100">
               <img src={levelSrc} className="" alt=""/>
           </div>
           <div className=" w-screen bg-round absolute bottom-0 bg-gray-700" style={{
               height:"80%"
           }}>
               <div className="flex flex-col flex-grow w-screen h-full bg-round bg-gray-400">
                   <div className="flex justify-center items-center bg-gray-200" style={{
                    //    borderTopLeftRadius:"2rem",
                    //    borderTopRightRadius:"2rem",
                       borderRadius:"2rem",
                       flex:"2"
                   }}>
                       <div className="w-10/12 px-2 py-2 tracking-wide">
                            <p className="text-xl">
                                尊敬的家长：
                            </p>   
                            <p className="py-2 px-2">
                                欢迎来到LINGO凌高编程“课程报告”系统，在这里您可以随时查收“已购买课程”中：
                            </p>
                            <ul className="list-disc list-inside text">
                                <li>孩子的上课进度；</li>
                                <li>孩子的项目作品；</li>
                                <li>孩子的课后作业；</li>
                            </ul>
                       </div>
                   </div>
                   <div className="flex  flex-col items-center justify-center w-screen" style={{
                       flex:"3"
                   }}>
                       <LevelItem />
                       <LevelItem />
                       <LevelItem />
                   </div>
               </div>
           </div>
        </div>        
    )
}

export default LevelPage