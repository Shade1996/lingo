import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber';

// A Ground plane that moves relative to the player. The player stays at 0,0
export default function Terrain() {
  const terrain = useRef();

    useFrame(() => {
        //@ts-ignore
        terrain.current.position.z += 0.4;
        //@ts-ignore
        if (terrain.current.position.z > 200)
        //@ts-ignore
        terrain.current.position.z = 10
    });
    return (
        <mesh
         visible
         position={[0, -10, 0]}
         rotation={[-Math.PI / 2, 0, 0]}
         ref={terrain}
        >
        <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
        <meshStandardMaterial
         attach="material"
         color="white"
         roughness={1}
         metalness={0}
         wireframe
        />
        </mesh>
    );
}
