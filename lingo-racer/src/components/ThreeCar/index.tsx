import React, { useEffect, useState } from 'react'
import { useLoader, useThree } from 'react-three-fiber';
//@ts-ignore
import car from "./cybercar.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Spring } from 'react-spring/renderprops';
import useReflection from '../../hooks/useReflection';

export default function Car() {
	const gltf = useLoader(GLTFLoader, car);
    useReflection(gltf)

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
                <primitive object={gltf.scene} scale={[0.007, 0.007, 0.007]} position={[p.lane, 0, 0]} />
            )}
        </Spring>
	);
}