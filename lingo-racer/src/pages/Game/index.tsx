import React, { Suspense, useEffect, useMemo, useRef } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { Canvas } from 'react-three-fiber'
import { Group } from 'three'
import ThreeCar from '../../components/ThreeCar'
import ThreeGround from '../../components/ThreeGround'
import ThreeSkybox from '../../components/ThreeSkybox'
import ThreeSun from '../../components/ThreeSun'
import ThreeText from '../../components/ThreeText'
import getRandomInt from '../../utils/getRandomInt'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

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
        <div className="w-screen h-screen">
            <Canvas>
                <ThreeSkybox />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<Loading />}>
                    <ThreeCar />
                </Suspense>
                <ThreeText />
                <ThreeGround />

                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}

export default Game