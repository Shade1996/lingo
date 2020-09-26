import { assert } from "@lincode/utils";
import React, { Suspense, useEffect, useRef, useState } from "react";

//@ts-ignore
import mountainSrc from "./mountain/scene.gltf";
//@ts-ignore
import ipadSrc from "./ipad.png";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'

function Castle() {
    const gltf = useLoader(GLTFLoader, mountainSrc)

    useEffect(() => {
        try {
            const children = gltf.scene.children[0].children[0].children[0].children[0].children
            children[1].visible = false
            children[2].visible = false
        }
        catch {}
    }, [gltf.scene.children])

    const minAngle = 8.5, maxAngle = 9.5
    let speed = 0.001

    useFrame(() => {
        gltf.scene.rotation.y += speed

        if (gltf.scene.rotation.y < minAngle)
            speed = -speed
        else if (gltf.scene.rotation.y > maxAngle)
            speed = -speed
    })

    return (
        <primitive
         object={gltf.scene}
         scale={[0.03,0.03,0.03]}
         rotation={[30 * Math.PI / 180, minAngle, 0]}
        />
    )
  }

function Box() {
  return (
    <mesh visible={false}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    </mesh>
  )
}




const Mountain3D: React.FC<{ currentPage: number }> = props => {

    useEffect(() => {
        const preload = document.querySelector("#preload");
            assert(preload);

            setTimeout(() => {
                preload.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 500,
                    iterations: 1,
                    fill: "forwards"
    
                }).onfinish = () => preload.parentElement?.removeChild(preload);

            }, 100);
    }, [])

    return (
        <div className="w-full flex justify-center">
            <div className="pointer-events-none" style={{ minWidth: 700 }}>
                <img src={ipadSrc} className="mt-40 lg:mt-64" style={{ transform: "translateY(-10%)" }} />
                <div className="absolute w-full h-full inset-0" style={{ transform: "translateY(-25%)" }}>
                    <Canvas>
                        <Suspense fallback={<Box />}><Castle /></Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};
export default Mountain3D;