import { useEffect } from "react";
import { useThree } from "react-three-fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export default (gltf: GLTF) => {
    const { scene } = useThree()

    useEffect(() => {
        gltf.scene.traverse(child => {
            //@ts-ignore
            const { material } = child
            if (!material) return
            material.envMap = scene.background
        });
    }, [])
}