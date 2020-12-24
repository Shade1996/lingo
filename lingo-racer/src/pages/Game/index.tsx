import React, { Suspense } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { Canvas } from 'react-three-fiber'
import ThreeCar from '../../components/ThreeCar'
import ThreeGround from '../../components/ThreeGround'

function Loading() {
	return (
		<mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
			<sphereGeometry attach="geometry" args={[1, 16, 16]} />
			<meshStandardMaterial
			 attach="material"
			 color="white"
			 transparent
			 opacity={0.6}
			 roughness={1}
			 metalness={0}
			/>
		</mesh>
	);
}

const Game = () =>{
    return(
        <div className="w-screen h-screen bg-gray-700">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<Loading />}>
                    <ThreeCar />
                </Suspense>
                <ThreeGround />
            </Canvas>
        </div>
    )
}

export default Game