import React, { useEffect, useState } from 'react'
import { useLoader, useThree } from 'react-three-fiber';
//@ts-ignore
import car from "./cybercar.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Spring } from 'react-spring/renderprops';
import useReflection from '../../hooks/useReflection';

const random = (min: number, max: number) => {
    return Math.round((Math.random() * (max - min)) + min)
}

export default function Car() {
	const gltf = useLoader(GLTFLoader, car);
    useReflection(gltf)

    const [lane, setLane] = useState(0)

    useEffect(() => {
        document.addEventListener("click", () => {
            setLane(random(-1, 1))
        })
        return () => {
        }
    }, [])

	return (
        <Spring from={{ lane: 0 }} to={{ lane: lane }}>
            {p => (
                <primitive object={gltf.scene} scale={[0.005, 0.005, 0.005]} position={[p.lane, 0, 0]} />
            )}
        </Spring>
	);
}