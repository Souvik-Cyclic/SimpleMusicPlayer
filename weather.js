window.addEventListener('load', () => {
    async function fetchWeather(latitude, longitude) {
        try {
            let apiUrl = '';
            if (latitude && longitude) {
                apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8222405af0a81007c0f6e25d5aced1ae`;
            } else {
                apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=8222405af0a81007c0f6e25d5aced1ae';
            }
            
            const response = await fetch(apiUrl);
            const data = await response.json();
            const temperature = Math.round(data.main.temp - 273.15);
            const icon = data.weather[0].icon;
            const location = data.name;
            document.querySelector('.temperature').textContent = `${temperature}°C`;
            document.querySelector('.location').textContent = location;
            document.querySelector('.weather-icon').style.backgroundImage = `url('https://openweathermap.org/img/wn/${icon}.png')`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeather(latitude, longitude);
    }

    function error() {
        console.error('Unable to retrieve location');
        fetchWeather();
    }
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.error('Geolocation is not supported by this browser');
        fetchWeather();
    }
});

