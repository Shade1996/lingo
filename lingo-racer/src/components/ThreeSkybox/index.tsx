import { useThree } from "react-three-fiber"
import { CubeTextureLoader } from "three";
//@ts-ignore
import src1 from "./1.jpg"
//@ts-ignore
import src2 from "./2.jpg"
//@ts-ignore
import src3 from "./3.jpg"
//@ts-ignore
import src4 from "./4.jpg"
//@ts-ignore
import src5 from "./5.jpg"
//@ts-ignore
import src6 from "./6.jpg"

export default function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();

    const texture = loader.load([src1, src2, src3, src4, src5, src6]);
  
    scene.background = texture;
    return null;
}