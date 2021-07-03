import React from 'react'
import {useEffect,useState} from 'react'
import max from './images/max.gif'
import pressure from './images/pressure.gif'
import humidity from './images/humidity.gif'




const Weather = () => {
    const [weather,setWeather]=useState(null)
    const [search,setSearch]=useState("pune")
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7a4224bd8bcaeb775ccdf914dbf751c3`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setWeather(data.main)
            console.log(weather)
        })
           
        
    }, [search])
   

    
    const atmosphere=(e)=>{
        setSearch(e.target.value)
        console.log(search)     
    }
    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">Weather App</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
   
      

        <section class="signup-section" id="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Weather updates!</h2>
                       
                        <form class="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                         
                            <div class="row input-group-newsletter">
                                <div class="col"><input class="form-control" id="emailAddress" type="text" placeholder="Enter city name.." aria-label="Enter city name..."  name="search" onChange={atmosphere}/></div>
                                <div class="col-auto"><a href=""><button class="btn btn-primary disabled" id="submitButton" type="submit">Search</button></a></div>
                            </div>
                            
                         
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        {!weather? <h5> oops!sorry no such data found </h5>: <div>  
        <section class="contact-section bg-black">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                               <img style={{width:"40px"}} src={max} alt="" /> <br /> <br />
                                <h4 class="text-uppercase m-0">Temprature</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">{weather.temp} degree  celcius</div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                            <img style={{width:"40px"}} src={pressure} alt="" /> <br /> <br />
                                <h4 class="text-uppercase m-0">Pressure</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">{weather.pressure} degree  celcius</div>
                            </div>
                        </div>
                    </div>
                  
                    
                </div>
               
            </div>
           
               
        </section>
        </div>}
     
        
     
  
        <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5"> <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                </div> <br />
                Copyright &copy; Innoovatum Workshop 2021 <br /></div></footer>
       
    
          
         
            
        </div>
    )
}

export default Weather
