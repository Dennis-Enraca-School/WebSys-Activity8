const d = new Date();
document.getElementById("dateContainer").innerText = d.getFullYear();
const weatherDisplay = document.getElementById('weatherDisplay');

hideWeatherDisplay();

const errorMessage = document.getElementById('errorMessage');
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
async function getWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();
    const apiKey = '0487869abfc3fc851c48781c1a674daf';        
    
    // document.getElementById('temp-display').innerText = 'asdaw';
    // return;
    weatherDisplay.classList.remove('active');
    errorMessage.style.display = 'none';
    if (!cityInput) {
        showError('Error: Please enter a city name');
        return;
    }
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        weatherDisplay.style.removeProperty('display');
        weatherDisplay.classList.add('active');


        document.getElementById('temp-display').innerText = data.main.temp
        document.getElementById('humidity-display').innerText = data.main.humidity
        document.getElementById('desc-display').innerText = data.weather[0].description
    }
    catch (err){
        showError(err)
    }
}

function showError(error){
    errorMessage.style.display = 'block';
    errorMessage.innerText = error;
    hideWeatherDisplay()

}
function hideWeatherDisplay(){
    weatherDisplay.style.display = 'none';
}
   