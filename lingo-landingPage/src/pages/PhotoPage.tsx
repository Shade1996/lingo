import React from 'react';
//@ts-ignore
import img1 from '../assets/l1.jpeg'
import {useTransition, animated} from 'react-spring'
//@ts-ignore
import img2 from '../assets/l2.jpg'
const PhotoPage =()=>{
    return(
        <div>
            {/* <p className="text-4xl font-semibold opacity-75 absolute z-10">课堂展示</p> */}
            <div className="h-screen w-screen bg-no-repeat bg-cover bg-center bg-fixed" style={{
                backgroundImage:`url(${img1})`
                }}>
            </div>
            <div className="h-screen w-screen bg-no-repeat bg-cover bg-center bg-fixed" style={{
            backgroundImage:`url(${img2})`
            }}>
            </div>
        </div>
        
        
    )
}

export default PhotoPage