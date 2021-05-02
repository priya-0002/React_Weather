import React from 'react'
import {useEffect,useState} from 'react'





const Weather = () => {
    const [weather,setWeather]=useState()
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=ab5be720cf240d19b2f34c0287c21255')
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
            
            
            
           {weather?<div>
            <h3>{weather.main.temp}</h3>
            <h5>{weather.weather[0].description}</h5>
            </div>:null}
            
        </div>
    )
}

export default Weather
