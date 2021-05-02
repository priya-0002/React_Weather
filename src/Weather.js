import React from 'react'
import {useEffect,useState} from 'react'





const Weather = () => {
    const [weather,setWeather]=useState({})
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=f062124b807daaa28c43206c00f668b1')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setWeather(data)
        })
           
        
    }, [])
    return (
        <div>
            <h1>Weather app</h1>
            <h3>{weather.main.temp}</h3>
            <h5>{weather.weather[0].description}</h5>
            
        </div>
    )
}

export default Weather
