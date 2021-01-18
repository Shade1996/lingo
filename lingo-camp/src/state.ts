import { proxy, subscribe } from 'valtio'

export const showKeyboard = proxy({ value: false })

export const markdownSrc = proxy({ value: "" })

export const page = proxy({ value: "home" as "home" | "lesson" })

subscribe(page, () => showKeyboard.value = false)
