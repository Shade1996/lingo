import { proxy, useProxy } from 'valtio'

export  const searchState = proxy({ value: "" as "media" | "sound"})