import React, { useMemo, useRef } from 'react'
import { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { useFrame } from 'react-three-fiber';
import { FontLoader, Group } from 'three';
import getRandomInt from '../../utils/getRandomInt';
//@ts-ignore
import Roboto from './RobotoLight_Regular.json';

const ThreeLetter: React.FC<{ lane: number, letter: string }> = (props) => {
    const font = new FontLoader().parse(Roboto);

    const textOptions = {
        font,
        size: 0.35,
        height: 1
    };
        
    return (
        <mesh position={[props.lane * 1.2, -0.5, -1]} scale={[1, 1, 0.2]}>
            <textGeometry attach='geometry' args={[props.letter, textOptions]} />
            <meshStandardMaterial attach='material' />
        </mesh>
    )
}

const chars = `1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}\\|;:'",<.>/?~`
const randomLetter = () => chars[getRandomInt(0,chars.length - 1)]

export default function () {
    const groupRef = useRef<Group>()

    useFrame(() => {
        groupRef.current.position.z += 0.1
    })

    return (
        <group ref={groupRef} position={[0, 0, -30]}>
            <ThreeLetter lane={0} letter="b" />
        </group>
    )
}

