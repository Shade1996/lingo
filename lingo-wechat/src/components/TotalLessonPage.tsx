import React from 'react'

//@ts-ignore
import bgSrc from "../assets/bg.jpg"
import Card from './Card'
const TotalLessonPage = () =>{

    return(
        <div>
            <div className=" bg-gray-300 top-round">
                <div className="flex justify-between px-4 py-4">
                    <div>
                        <div className="text-sm opacity-75">Sep. 3rd,2020</div>
                        <div className="text-3xl">Hey,
                            <span className="font-bold">Shade!</span>
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
                        <div className="font-bold text-3xl">13</div>
                        <div className="font-light opacity-50">进行中</div>
                    </div>
                    <div className="flex flex-col items-center py-4 px-4 rounded-lg">
                        <div className="font-bold text-3xl">14</div>
                        <div className="font-light opacity-50">已完成</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Card />
                                
            </div>
        </div>
    )
}

export default TotalLessonPage