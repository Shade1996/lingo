import { setAutoMountRoot } from "react-imperative"
import { $eWRhpRV$events } from "@pinyinma/standardlib"

export default (target: string | Element) => {
    const root = setAutoMountRoot(target)
    $eWRhpRV$events.on("reset", () => root.clear())

    return root
}