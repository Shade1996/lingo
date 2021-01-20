import { proxy } from "valtio"

export const gasState = proxy({ gas: 1 })

export const carState = proxy({loaded:false})

export const sceneState = proxy ({loaded:false})

export const pageState = proxy({pagename:"home" as "home" |"game"})

test