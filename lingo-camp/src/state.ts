import axios from 'axios'
import { proxy, subscribe } from 'valtio'
import { root } from './utils/baseURL'

export const showKeyboard = proxy({ value: false })

export const markdownSrc = proxy({ value: "" })

export const page = proxy({ value: "home" as "home" | "lesson" })

subscribe(page, () => showKeyboard.value = false)

export const completedArray = proxy({ value: [] as Array<string>})

export const code = proxy({value:""})

export const test = { value: "" }

export const indexData = proxy({ value: [] })

const getData = async () => {
    const { data: { files } } = await axios.get(root + "index.json")
    indexData.value = files
}
getData()