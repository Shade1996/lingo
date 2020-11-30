import React, { useRef, useState, Suspense, useEffect } from 'react'
//@ts-ignore
import levelSrc from '../assets/card2.jpg'
import LevelItem from './LevelItem'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//@ts-ignore
import modelSrc from "../assets/model/fantasy-sea-keep/source/scene.gltf"
//@ts-ignore
import bgSrc from "../assets/video.mp4"
//@ts-ignore
import image1 from "../assets/item1.jpeg"
//@ts-ignore
import image2 from "../assets/item2.jpeg"
//@ts-ignore
import image3 from "../assets/item3.jpeg"

//@ts-ignore
let theta = 0.004

function Castle(){
    const gltf = useLoader(GLTFLoader, modelSrc);
    const primitiveRef = useRef<any>()

    useFrame(() => {
        // if (primitiveRef.current.rotation.y > 3.5)
        //     theta = -0.004
        // else if (primitiveRef.current.rotation.y < 2)
        //     theta = +0.004

        primitiveRef.current.rotation.y += 0.004;
    });

    return (
        <primitive
         object={gltf.scene}
         scale={[0.05, 0.05, 0.05]}
         ref={primitiveRef}
         position={[0, 0, 0]}
         rotation={[0, 2, 0]}
        />
    );
}

function Box() {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" />
      </mesh>
    )
  }  

const Nobr: React.FC = (props) => {
    return (
        <span className="whitespace-no-wrap">{props.children}</span>
    )
}

const LevelPage =(props:any) =>{
    
    return(
        <div className="flex flex-col flex-1 w-screen h-screen">
           <div className="w-full h-full absolute">
               {/* <img src={levelSrc} className="" alt=""/> */}
               <video src={bgSrc} autoPlay muted loop className="h-full object-cover" />
               {/* <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={<Box />}>
                        <Castle />
                    </Suspense>
                </Canvas> */}
           </div>
           <div className=" w-screen absolute bottom-0 " style={{
               height:"80%"
           }}>
               <div className="flex flex-col flex-grow w-screen h-full bg-opacity-50 bg-white bg-blur " style={{
                   borderTopLeftRadius:"2rem",
                   borderTopRightRadius:"2rem",
               }}>
                   <div className="flex justify-center items-center " style={{
                       flex:"2"
                   }}>
                       <div className="w-10/12 px-2 py-2 opacity-75">
                            <p className="text-xl font-bold">
                                尊敬的家长：
                            </p>   
                            <p className="py-2 px-2 font-bold">
                                欢迎来到LINGO凌高编程“课程<Nobr>报告</Nobr>”系统，在这里您可以随时查收“已购买课程”中：
                            </p>
                            <ul className="list-disc list-inside font-bold">
                                <li>孩子的上课进度；</li>
                                <li>孩子的项目作品；</li>
                                <li>孩子的课后作业；</li>
                            </ul>
                       </div>
                   </div>
                   <div className="flex  flex-col items-center justify-center w-screen" style={{
                       flex:"3"
                   }}>
                       <LevelItem levelName="Level1 入门级课程" levelClass="12节课/3个月" access={true}  itemImage={image1}/>
                       <LevelItem levelName="Level2 进阶级课程" levelClass="12节课/3个月" access={false} itemImage={image2}/>
                       <LevelItem levelName="Level3 飞跃级课程" levelClass="16节课/4个月" access={false} itemImage={image3}/>
                   </div>
               </div>
           </div>
        </div>        
    )
}

export default LevelPage