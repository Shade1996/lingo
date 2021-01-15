import { Button } from 'antd'
import React from 'react'
import LingoMenu from '../components/LingoMenu'

export default function DisplayPage() {
    return (
        <div className="h-screen w-screen bg-gray-700 flex flex-col">
            <div className="bg-gradient-to-b from-purple-700 via-pink-500 to-red-500" style={{ height: "70vh" }}  />
            <div className="flex-grow" style={{ background: "linear-gradient(180deg, rgba(100,127,244,1) 0%, rgba(240,100,134) 100%)" }}>
                <svg className="block"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700">
                    <path fill="#f46465 " fillOpacity="1" d="M0,96L60,106.7C120,117,240,139,360,133.3C480,128,600,96,720,69.3C840,43,960,21,1080,42.7C1200,64,1320,128,1380,160L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
            <div className="absolute px-10 py-32">
                <div className="text-white text-3xl leading-10 mb-10">
                    <div>Learn to Code</div>
                    <div className="text-5xl -ml-1 font-bold">Javascript</div>
                </div>
                <div className="text-white mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum culpa in debitis autem ducimus placeat rem reprehenderit minus qui. Perferendis quibusdam facere tenetur. Minus hic in aperiam totam dolorem.
                </div>
                <div className=" bg-white flex items-center p-4 rounded-2xl bg-blur bg-opacity-25">
                    <div className="rounded-full w-12 h-12 bg-yellow-400 mr-5"></div>
                    <div>
                        <div className=" font-bold text-gray-700">Start learning</div>
                        <div className="text-xs text-gray-600">
                            Go to your current lesson
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
