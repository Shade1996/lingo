import React from 'react'
import { useLoader } from 'react-three-fiber'
import { TextureLoader } from 'three'
//@ts-ignore
import textureSrc from "./texture.jpg"

function ThreeSun() {
    const texture = useLoader(TextureLoader, textureSrc)
    
    return (
        <mesh visible position={[0, 0, -100]} scale={[60, 60, 60]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}

export default ThreeSun
