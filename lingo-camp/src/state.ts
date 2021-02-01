import { proxy, subscribe } from 'valtio'

export const showKeyboard = proxy({ value: false })

export const markdownSrc = proxy({ value: "" })

export const page = proxy({ value: "home" as "home" | "lesson" })

export const completedArray = proxy({ value: [] as Array<string>})

export const code = proxy({value:""})

subscribe(page, () => showKeyboard.value = false)