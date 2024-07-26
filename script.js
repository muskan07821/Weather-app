const inputbox = document.querySelector('.input-box');
const searchBtn= document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
const api_key = "4ff11febae154b8e3de0543a04987c7c";
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data = await fetch(`${url}`).then(response => response.json());

if(weather_data.cod == `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
}
location_not_found.style.display = "none";
weather_body.style.display = "flex";
temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
 description.innerHTML = `${weather_data.weather[0].description}`;
 humidity.innerHTML = `${weather_data.main.humidity}%`;
 wind.innerHTML = `${weather_data.wind.speed}km/H`;

switch(weather_data.weather[0].main){
    case 'Clear':
        weather_img.src = "/images/clear.png";
        break;
        case 'Clouds':
        weather_img.src = "/images/clouds.png";
            break;
            case 'Mist':
                weather_img.src = "/images/mist.png";
                break;
                case 'Rain':
                    weather_img.src = "/images/rain.png";
                    break;
                    case 'Snow':
                        weather_img.src = "/images/snow.png";
                        break;
                        

}
console.log(weather_data);
}


searchBtn.addEventListener('click',()=>{
    checkWeather(inputbox.value);
});
