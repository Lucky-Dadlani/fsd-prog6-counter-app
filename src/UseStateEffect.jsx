import React from 'react'
import { useState, useEffect } from 'react'

const UseStateEffect = () => {
    const [city, setCity] = useState("banglr")

    useEffect(() => {
        if (city === "banglr")
            setCity("hyd")
        else
            setCity("goa")
    }, [])

    console.log(city)

    return (
        <div>{city}</div>
    )
}

export default UseStateEffect;
