import React, { Suspense, useEffect, useRef, useState } from "react";

//@ts-ignore
// import mountainSrc from "./mountain/scene.glb"
//@ts-ignore
import mountain from '../../assets/mountain.jpeg'
//@ts-ignore
import ipadSrc from "./ipad.png";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { Canvas, useFrame, useLoader } from 'react-three-fiber'

// function Castle() {
//     const gltf = useLoader(GLTFLoader, mountainSrc)

//     useEffect(() => {
//         const children = gltf.scene.children[0].children[0].children[0].children[0].children
//         children[1].visible = false
//         children[2].visible = false
//     }, [gltf.scene.children])

//     const minAngle = 8.5, maxAngle = 9.5
//     let speed = 0.001

//     useFrame(() => {
//         gltf.scene.rotation.y += speed

//         if (gltf.scene.rotation.y < minAngle)
//             speed = -speed
//         else if (gltf.scene.rotation.y > maxAngle)
//             speed = -speed
//     })

//     return (
//         <primitive
//          object={gltf.scene}
//          scale={[0.03,0.03,0.03]}
//          rotation={[30 * Math.PI / 180, minAngle, 0]}
//         />
//     )
//   }

// function Box() {
//   return (
//     <mesh visible={false}>
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//     </mesh>
//   )
// }




const Mountain3D: React.FC<{ currentPage: number }> = props => {
    return (
        <div className="w-full flex justify-center">
            <div className="pointer-events-none" style={{ minWidth: 700 }}>
                {/* <div className="h-full absolute z-20 w" style={{backgroundImage:`url(${mountain})`}}></div> */}
                <img src={mountain} className=" w-7/12 center-x z-10" alt=""/>
                <img src={ipadSrc} className="" style={{ transform: "translateY(-10%)", marginTop: "32%" }} />
                {/* <div className="absolute w-full h-full inset-0" style={{ transform: "translateY(-25%)" }}>
                    <Canvas>
                        <Suspense fallback={<Box />}><Castle /></Suspense>
                    </Canvas>
                </div> */}
            </div>
        </div>
    );
};
export default Mountain3D;