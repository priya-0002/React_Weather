import React from 'react'
import {useEffect,} from 'react'





const Weather = () => {
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=f062124b807daaa28c43206c00f668b1')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
           
        
    }, [])
    return (
        <div>
            <h1>Weather app</h1>
        </div>
    )
}

export default Weather
