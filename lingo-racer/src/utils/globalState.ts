import { useState, useEffect } from "react"

export default <T>(value: T) => {
    let globalPage: T = value
    const setPageFunctions = new Set<Function>()

    const globalSetPage = (page: T) => {
        for (const setPage of setPageFunctions)
            setPage(page)
            
        globalPage = page
    }

    const usePage = () => {
        const [page, setPage] = useState(globalPage)

        useEffect(() => {
            setPageFunctions.add(setPage)

            return () => {
                setPageFunctions.delete(setPage)
            }
        }, [])

        return <const>[page, globalSetPage]
    }

    return usePage
}