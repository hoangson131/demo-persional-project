import { createContext, useEffect, useState } from "react";

const DataContext = createContext()

function DataProvider({children}) {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('http://localhost:3030/api/ui/',{
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
            return response.json()
        })
        .then(response => {
            return setData(response)
        })
        .catch((error) => console.log(error))
    },[])

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider, DataContext } 