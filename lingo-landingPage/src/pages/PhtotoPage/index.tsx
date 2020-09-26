import React from 'react';
//@ts-ignore
import bg1 from '../../assets/l1.jpeg'
import {useTransition, animated} from 'react-spring'
//@ts-ignore
import bg2 from '../../assets/l2.jpg'
//@ts-ignore
import waveSrc from '../../assets/wave.jpg'
import Support from './Support';
const PhotoPage =()=>{
    return(
        <div>
            {/* <p className="text-4xl font-semibold opacity-75 absolute z-10">课堂展示</p> */}
            <div className="h-screen w-screen bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center" style={{
                backgroundImage:`url(${bg1})`
            }}>
                <div className="text-gray-800 text-4xl sm:text-5xl bg-blur bg-white bg-opacity-50 p-6 rounded-lg" style={{
                    // backgroundImage:`url(${bg1})`
                }}>
                    学会编程 爱上创造
                </div>
                    
            </div>
            <div className="w-screen bg-no-repeat bg-cover bg-center bg-fixed" style={{
                backgroundImage:`url(${bg2})`
            }}>
                <div className="w-screen h-screen flex items-center justify-center">
                    <div className="text-gray-800 text-4xl sm:text-5xl bg-blur bg-white bg-opacity-50 p-6 rounded-lg">
                        全面沉浸 创客空间
                    </div>
                </div>
                <Support />
            </div>
        </div>
        
        
    )
}

export default PhotoPage