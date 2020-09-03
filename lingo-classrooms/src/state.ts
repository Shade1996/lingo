import store from "@lincode/react-global-state"
import axios from "axios"

type ClassRoomData = {
    city: string,
    address: string,
    classRoomId: string,
    name: string
}

export const [useCurrentPage, setCurrentPage] = store("city" as "city" | "add" | "control")

export const [useCurrentClassRoomData, setCurrentClassRoomData] = store(undefined as ClassRoomData | undefined)

export const [useClassRoomData, setClassRoomData] = store([
    {
        city: "default city 1",
        address: "default address 1",
        classRoomId: "default classRoomId 1",
        name: "default name 1"
    },
    {
        city: "default city 2",
        address: "default address 2",
        classRoomId: "default classRoomId 2",
        name: "default name 2"
    }
] as ClassRoomData[])

const query = `
    query {
        classRoomMany {
            city
            address
            classRoomId
            name
        }
    }
`;
axios.post("/graphql", { query }).then((result: any) => {
    setClassRoomData(result.data.data.classRoomMany)
})