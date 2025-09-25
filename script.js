//access all the element
let LocationEle = document.querySelector(".location-name")
let iconEle= document.querySelector(".Weather-img")
let TempEle= document.querySelector(".temp")
let realfeelEle= document.querySelector(".realfeel")
let windEle= document.querySelector(".wind")
let HumidityEle= document.querySelector(".Humidity")
let citynameEle = document.getElementById('ucityname')

// console.log(LocationEle,iconEle,TempEle,realfeelEle,windEle,HumidityEle)

let ApiKey ='2095ae806fd3798cf982eae4b31b397b'
let ApiURL =`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`
function  fetchWeather() {
    console.log(citynameEle.value)
    if(citynameEle.value==""){
        alert("please enter the cityname")
    }else{
        let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citynameEle.value}&appid=${ApiKey}`)
        console.log(data)
        data.then((res)=>res.json())
            .then((d)=>{
                console.log(d)
                const {name,main:{temp,feels_like},weather:[n]} =d
                console.log(d.weather[0].icon)

                //updating the ui
              LocationEle.textContent=name;
            TempEle.innerHTML=`<p class="temp">${parseFloat(temp-273).toFixed(2)}<sup class="deg">&deg;</sup><sub class="celius">C</sub></p>`
            realfeelEle.innerHTML=` 
            <p class="realfeel">RealFeel Shade ${feels_like}<sup class="deg">&deg;</sup></p>`
            iconEle.src=`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`
            windEle.innerHTML=` <p class="wind">Wind NW ${speed} km/h</p>`
            HumidityEle.innerHTML=` <p class="Humidity">Humidity ${humidity}%</p>`
            }).catch((err)=>{
               
            })
    }
}