import React, { useEffect, useState } from 'react'
import { useLoader } from 'react-three-fiber';
//@ts-ignore
import airwingSrc from "./airwing.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Spring } from 'react-spring/renderprops';

export default function ArWing() {
    //@ts-ignore
	const { nodes } = useLoader(GLTFLoader, airwingSrc);

    const [lane, setLane] = useState(0)

    useEffect(() => {
        document.addEventListener("click", () => {
            setLane(Math.random() * 10 - 5)
        })
        return () => {
        }
    }, [])

	return (
        <Spring from={{ lane: 0 }} to={{ lane: lane }}>
            {p => (
                <group scale={[0.5, 0.5, 0.5]} position={[p.lane, 0, 0]}>
                    <mesh visible geometry={nodes.Default.geometry}>
                        <meshStandardMaterial
                         attach="material"
                         color="white"
                         roughness={1}
                         metalness={0}
                        />
                    </mesh>
                </group>
            )}
        </Spring>
	);
}