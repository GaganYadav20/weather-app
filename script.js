class WeatherApp {
            constructor() {
                this.apiKey = "5311126d7ce8aefccfcf395ca6344101";
                this.apiUrl = "https://api.openweathermap.org/data/2.5/weather";
                this.forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
                this.isDarkMode = false;
                
                this.elements = {
                    searchInput: document.getElementById('searchInput'),
                    searchBtn: document.getElementById('searchBtn'),
                    locationBtn: document.getElementById('locationBtn'),
                    themeToggle: document.getElementById('themeToggle'),
                    loading: document.getElementById('loading'),
                    errorMessage: document.getElementById('errorMessage'),
                    mainWeatherCard: document.getElementById('mainWeatherCard'),
                    weatherIcon: document.getElementById('weatherIcon'),
                    currentTemp: document.getElementById('currentTemp'),
                    currentCity: document.getElementById('currentCity'),
                    weatherDescription: document.getElementById('weatherDescription'),
                    humidity: document.getElementById('humidity'),
                    windSpeed: document.getElementById('windSpeed'),
                    visibility: document.getElementById('visibility'),
                    feelsLike: document.getElementById('feelsLike'),
                    forecastGrid: document.getElementById('forecastGrid')
                };

                this.init();
            }

            init() {
                this.bindEvents();
                this.getWeatherByCity('London'); // Default city
            }

            bindEvents() {
                this.elements.searchBtn.addEventListener('click', () => this.handleSearch());
                this.elements.searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.handleSearch();
                });
                this.elements.locationBtn.addEventListener('click', () => this.getCurrentLocation());
                this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
            }

            handleSearch() {
                const city = this.elements.searchInput.value.trim();
                if (city) {
                    this.getWeatherByCity(city);
                }
            }

            async getWeatherByCity(city) {
                try {
                    this.showLoading(true);
                    this.hideError();

                    const weatherResponse = await fetch(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
                    
                    if (!weatherResponse.ok) {
                        throw new Error('City not found');
                    }

                    const weatherData = await weatherResponse.json();
                    
                    // Get forecast data
                    const forecastResponse = await fetch(`${this.forecastUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
                    const forecastData = await forecastResponse.json();

                    this.displayWeather(weatherData);
                    this.displayForecast(forecastData);
                    this.updateBackground(weatherData.weather[0].main);
                    
                } catch (error) {
                    this.showError();
                } finally {
                    this.showLoading(false);
                }
            }

            async getWeatherByCoords(lat, lon) {
                try {
                    this.showLoading(true);
                    this.hideError();

                    const weatherResponse = await fetch(`${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
                    const forecastResponse = await fetch(`${this.forecastUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
                    
                    const weatherData = await weatherResponse.json();
                    const forecastData = await forecastResponse.json();

                    this.displayWeather(weatherData);
                    this.displayForecast(forecastData);
                    this.updateBackground(weatherData.weather[0].main);
                    
                } catch (error) {
                    this.showError();
                } finally {
                    this.showLoading(false);
                }
            }

            displayWeather(data) {
                this.elements.currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
                this.elements.currentCity.textContent = data.name;
                this.elements.weatherDescription.textContent = data.weather[0].description;
                this.elements.humidity.textContent = `${data.main.humidity}%`;
                this.elements.windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
                this.elements.visibility.textContent = `${Math.round(data.visibility / 1000)} km`;
                this.elements.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
                
                this.elements.weatherIcon.textContent = this.getWeatherIcon(data.weather[0].main);
                this.elements.mainWeatherCard.style.display = 'block';
            }

            displayForecast(data) {
                const dailyForecasts = this.processForecastData(data.list);
                let forecastHTML = '';

                dailyForecasts.slice(0, 5).forEach(forecast => {
                    forecastHTML += `
                        <div class="forecast-card">
                            <div class="forecast-day">${forecast.day}</div>
                            <div class="forecast-icon">${this.getWeatherIcon(forecast.weather)}</div>
                            <div class="forecast-temps">
                                <span class="temp-high">${forecast.maxTemp}°</span>
                                <span class="temp-low">${forecast.minTemp}°</span>
                            </div>
                        </div>
                    `;
                });

                this.elements.forecastGrid.innerHTML = forecastHTML;
            }

            processForecastData(list) {
                const dailyData = {};

                list.forEach(item => {
                    const date = new Date(item.dt * 1000);
                    const day = date.toLocaleDateString('en', { weekday: 'short' });
                    
                    if (!dailyData[day]) {
                        dailyData[day] = {
                            day,
                            temps: [],
                            weather: item.weather[0].main
                        };
                    }
                    dailyData[day].temps.push(item.main.temp);
                });

                return Object.values(dailyData).map(data => ({
                    day: data.day,
                    maxTemp: Math.round(Math.max(...data.temps)),
                    minTemp: Math.round(Math.min(...data.temps)),
                    weather: data.weather
                }));
            }

            getWeatherIcon(weatherMain) {
                const icons = {
                    'Clear': '☀️',
                    'Clouds': '☁️',
                    'Rain': '🌧️',
                    'Drizzle': '🌦️',
                    'Thunderstorm': '⛈️',
                    'Snow': '❄️',
                    'Mist': '🌫️',
                    'Fog': '🌫️'
                };
                return icons[weatherMain] || '🌤️';
            }

            updateBackground(weather) {
                const body = document.body;
                body.className = '';
                
                switch(weather.toLowerCase()) {
                    case 'clear':
                        body.classList.add('sunny');
                        break;
                    case 'rain':
                    case 'drizzle':
                    case 'thunderstorm':
                        body.classList.add('rainy');
                        break;
                    case 'clouds':
                        body.classList.add('cloudy');
                        break;
                    case 'snow':
                        body.classList.add('snowy');
                        break;
                    default:
                        break;
                }
            }

            getCurrentLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            this.getWeatherByCoords(latitude, longitude);
                        },
                        () => {
                            alert('Unable to retrieve location. Please search for a city manually.');
                        }
                    );
                } else {
                    alert('Geolocation is not supported by this browser.');
                }
            }

            toggleTheme() {
                this.isDarkMode = !this.isDarkMode;
                document.body.classList.toggle('dark');
                this.elements.themeToggle.textContent = this.isDarkMode ? '☀️' : '🌙';
            }

            showLoading(show) {
                this.elements.loading.style.display = show ? 'block' : 'none';
            }

            showError() {
                this.elements.errorMessage.style.display = 'block';
                this.elements.mainWeatherCard.style.display = 'none';
            }

            hideError() {
                this.elements.errorMessage.style.display = 'none';
            }
        }

        // Initialize the app
        document.addEventListener('DOMContentLoaded', () => {
            new WeatherApp();
        });
