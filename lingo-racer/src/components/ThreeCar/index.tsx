import React, { useEffect, useState } from 'react'
import { useLoader } from 'react-three-fiber';
//@ts-ignore
import car from "./car.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Spring } from 'react-spring/renderprops';

export default function Car() {
	const gltf = useLoader(GLTFLoader, car);

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
                <primitive object={gltf.scene} scale={[0.25, 0.25, 0.25]} position={[p.lane, -0.8, 2.8]} rotation={[0,0,0]} />
            )}
        </Spring>
	);
}