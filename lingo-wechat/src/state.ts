import store from "@lincode/react-global-state"
import axios from "axios"



export const [useCurrentPage, setCurrentPage] = store("welcome" as "welcome" | "level" | "total")
