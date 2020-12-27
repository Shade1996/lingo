import React, { useMemo, useRef } from 'react'
import { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { useFrame } from 'react-three-fiber';
import { FontLoader, Group } from 'three';
import getRandomInt from '../../utils/getRandomInt';
//@ts-ignore
import Roboto from './RobotoLight_Regular.json';

const ThreeLetter: React.FC<{ lane: number, index: number, letter: string }> = (props) => {
    const font = new FontLoader().parse(Roboto);

    const textOptions = {
        font,
        size: 0.35,
        height: 1
    };
        
    return (
        <mesh position={[props.lane, -0.5, props.index * -2]} scale={[1, 1, 0.2]}>
            <textGeometry attach='geometry' args={[props.letter, textOptions]} />
            <meshStandardMaterial attach='material' />
        </mesh>
            // <>
            //     <Spring from={{textZ:-10 + props.index * -2}} to={{textZ:5}} config={{ duration: 2000 + props.index * 100 }}>
            //         {p=>(
            //             <mesh position={[props.lane, -0.5, p.textZ]}>
            //                 <textGeometry attach='geometry' args={['t', textOptions]} />
            //                 <meshStandardMaterial attach='material' />
            //             </mesh>
            //         )
            //         }
            //     </Spring>
            // </>
    )
}

const chars = `1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}\\|;:'",<.>/?~`
const randomLetter = () => chars[getRandomInt(0,chars.length - 1)]

export default function () {
    const groupRef = useRef<Group>()

    useFrame(() => {
        groupRef.current.position.z += 0.1
    })

	const letters = useMemo(() => {
        const letters: Array<[string, number]> = []
        for (let i = 0; i < 100; ++i)
            letters.push([randomLetter(), getRandomInt(-2, 2)])
        return letters
    }, [])

    return (
        <group ref={groupRef}>
            {letters.map(([letter, lane], i) => (
                <ThreeLetter lane={lane} letter={letter} index={i} key={i} />
            ))}
        </group>
    )
}

