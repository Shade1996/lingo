import { assert } from "@lincode/utils";
import React, { useEffect } from "react";

//@ts-ignore
// import mountainSrc from "./mountain/scene.gltf";
//@ts-ignore
import ipadSrc from "./ipad.png";

const Mountain3D: React.FC<{ currentPage: number }> = props => {

    useEffect(() => {
        const preload = document.querySelector("#preload");
            assert(preload);

            setTimeout(() => {
                preload.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 500,
                    iterations: 1,
                    fill: "forwards"
    
                }).onfinish = () => preload.parentElement?.removeChild(preload);

            }, 100);
    }, [])

    return (
        <div className="w-full flex justify-center">
            <div className="pointer-events-none" style={{ minWidth: 700 }}>
                <img src={ipadSrc} className="mt-40 lg:mt-64" style={{ transform: "translateY(-10%)" }} />
            </div>
        </div>
    );
};
export default Mountain3D;