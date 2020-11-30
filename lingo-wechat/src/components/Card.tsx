import React, { useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import { Button } from '@material-ui/core';
//@ts-ignore
import cardSrc from "../assets/card3.jpg"

const Card = (props:{Item :string }) => {

    const [Item, setItem] = useState("")
    const [progress, setprogress] = useState("")
    return(
            <div className="flex flex-wrap justify-center items-end bg-blue-500 h-64 w-10/12 mt-4 bg-cover" style={{
                backgroundImage: `url(${cardSrc})`,
                borderRadius:"2rem"
            }}>
                {/* <div className="h-32"> */}
                    {/* <div className="flex flex-col items-center justify-center bg-white bg-blur bg-opacity-75 rounded-lg mt-4 mr-4 h-20 w-16">
                        <div className="text-4xl font-bold">12</div>
                        <div className="text-xs font-semibold">课程</div>
                    </div> */}
                {/* </div> */}
                <div className="h-16 flex flex-col justify-between mb-4 px-6 py-2  bg-white bg-opacity-50 bg-blur" style={{
                    borderRadius:"2rem"
                }}>
                    <div className="flex justify-center items-center h-full">
                        <div className="flex flex-col ">
                            <div className="text-xl font-bold ">{props.Item}</div>
                            {/* <div className="font-light ">{props.ItemDetail}</div> */}
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <div className="w-7/12">
                            {/* <LinearProgress variant="determinate" className="w-full" value={props.progress}/> */}
                            {/* <div className="opacity-75">
                                1/3
                            </div> */}
                        </div>
                        {/* <div className="px-2 py-1 mb-2 text-blue-700 border border-blue-700 rounded-lg">进入</div> */}
                    </div>     
                </div>
                  
            </div>
            
    )
}

export default Card