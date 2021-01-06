import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import ThreeCar from '../../components/ThreeCar'
import ThreeGround from '../../components/ThreeGround'
import ThreeSkybox from '../../components/ThreeSkybox'
import ThreeSun from '../../components/ThreeSun'
import ThreeText from '../../components/ThreeText'
import getRandomInt from '../../utils/getRandomInt'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { useSpring } from 'react-spring'
import { OrbitControls } from 'drei'
import QuizDialog from '../../components/QuizDialog'
import Gauge from '../../components/Gauge'

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

const Controls = () => {
    const { gl, camera } = useThree()
  
    useSpring({
        from: { x: 0, z: -3 },
        to: [{ x: 1, z: 0 }, { x: 0, z: 4 }],
        onFrame: p => {
            camera.position.y = 2
            camera.position.x = p.x
            camera.position.z = p.z
        },
        // delay: 3000,
        config: { duration: 0 }
    })
  
    return <OrbitControls target={[0, 0, 0]} args={[camera, gl.domElement]} enabled={false} />
}

const LetterGenerator = () => {
    const [letters, setLetters] = useState([])

    useEffect(() => {
        const l = []

        setInterval(() => {
            l.push(1)
            setLetters([...l])
        }, 1000)
    }, [])

    return (
        <>
            {letters.map((l, i) => (
                <ThreeText key={i} />
            ))}
        </>
    )
}

const Game = () =>{
    return(
        <div className="w-screen h-screen">
            <Canvas>
                <ThreeSkybox />
                <ambientLight />
                <pointLight position={[10, 10, 10]} intensity={10} />
                <Suspense fallback={<Loading />}>
                    <ThreeCar />
                </Suspense>
                {/* <LetterGenerator /> */}
                <ThreeGround />

                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>

                <Controls />
            </Canvas>
            <QuizDialog />
            <Gauge />
        </div>
    )
}

export default Game