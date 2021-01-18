import { Button, Divider, List, PageHeader, Typography } from 'antd'
import React, { useState } from 'react'
import { Screen } from "react-screens"
import { page } from '../state';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

export default function DisplayPage() {
    return (
        <Screen>
            <div className="flex flex-col w-full h-screen">
                <div className="bg-gradient-to-b from-purple-700 via-pink-500 to-red-500" style={{ height:"70vh"}} />
                <div className="flex-grow" style={{ background: "linear-gradient(180deg, rgba(100,127,244,1) 0%, rgba(240,100,134) 100%)" }}>
                    <svg className="block"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700">
                        <path fill="#f46465 " fillOpacity="1" d="M0,96L60,106.7C120,117,240,139,360,133.3C480,128,600,96,720,69.3C840,43,960,21,1080,42.7C1200,64,1320,128,1380,160L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </div>
            </div>
            <div className="absolute top-0 px-10 py-32 w-screen h-screen overflow-scroll">
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
                <div className="mt-20 " >
                    <Divider orientation="left">
                        Level 1: Basic Javascript
                    </Divider>
                        <List
                         className="bg-white rounded-2xl"
                         bordered
                         
                         dataSource={data}
                         renderItem={item => (
                             <List.Item onClick={() => page.value = "lesson"}>
                             {/* <Typography.Text mark>[ITEM]</Typography.Text> */}
                              {item}
                             </List.Item>
                         )}
                        />
                </div>
            </div>
        </Screen>
    )
}
