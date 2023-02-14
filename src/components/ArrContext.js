import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const arrContext = createContext()

export default function ArrContext(props) {
    const [array, setArray] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/Arry.json')
            .then(data => {
                setArray(data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <arrContext.Provider value={{ array, setArray }}>
            {props.children}
        </arrContext.Provider>
    )
}