# 🌤️ Weather App - Modern Weather App

A beautiful, modern weather application built with vanilla JavaScript, featuring glassmorphism design, dynamic backgrounds, and comprehensive weather data visualization.

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism UI** - Semi-transparent cards with backdrop blur effects
- **Dynamic Backgrounds** - Weather-condition based gradient backgrounds
- **Smooth Animations** - Fade-in effects, hover animations, and floating elements
- **Dark/Light Mode** - Theme toggle for user preference
- **Responsive Design** - Optimized for all screen sizes and devices

### 🌍 Weather Functionality
- **Current Weather** - Real-time weather data for any city
- **5-Day Forecast** - Extended forecast with daily temperature ranges
- **Geolocation Support** - Automatic weather detection for user's location
- **Comprehensive Data** - Temperature, humidity, wind speed, visibility, and "feels like"
- **Weather Icons** - Emoji-based weather condition indicators

### 🛠️ Technical Features
- **API Integration** - OpenWeatherMap API for accurate weather data
- **Error Handling** - Graceful error messages and loading states
- **Search Functionality** - City search with Enter key support
- **Performance Optimized** - Efficient DOM manipulation and event handling

## 🛠️ Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- OpenWeatherMap API key

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/GaganYadav20/weather-app.git
   cd weather-App
   ```

2. **Get API Key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Generate a free API key
   - Replace the API key in the JavaScript code:
   ```javascript
   this.apiKey = "YOUR_API_KEY_HERE";
   ```

3. **Run the application**
   - Open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8000`

## 🎯 Usage

### Basic Usage
1. **Search for a city** - Type city name in the search bar and press Enter or click search
2. **Use location** - Click "Use Location" button to get weather for your current location
3. **Toggle theme** - Click the moon/sun icon to switch between light and dark modes
4. **View forecast** - Scroll down to see the 5-day weather forecast

### Features Overview
- **Real-time Data** - Current temperature, weather conditions, and detailed metrics
- **Interactive Design** - Hover effects and smooth transitions
- **Responsive Layout** - Adapts to different screen sizes automatically

## 🏗️ Project Structure

```
weather-App/
│
├── index.html              # Main HTML file
├── style.css              # CSS styles (embedded in HTML)
├── script.js              # JavaScript functionality (embedded in HTML)
├── README.md              # Project documentation
├── images/                # Screenshot images
│   ├── desktop.png
│   ├── mobile.png
│   └── dark-mode.png

```

## 🔧 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with glassmorphism effects
  - CSS Grid & Flexbox for layout
  - CSS Custom Properties (Variables)
  - Backdrop-filter for glass effects
  - CSS Animations and Transitions
- **JavaScript (ES6+)** - Interactive functionality
  - Async/Await for API calls
  - Classes and modules
  - DOM manipulation
  - Geolocation API
- **OpenWeatherMap API** - Weather data source
- **Google Fonts** - Inter font family

## 🌐 API Reference

### OpenWeatherMap API
This app uses the OpenWeatherMap API for weather data:

- **Current Weather API**: `api.openweathermap.org/data/2.5/weather`
- **5-Day Forecast API**: `api.openweathermap.org/data/2.5/forecast`

### API Features Used
- Current weather conditions
- 5-day weather forecast
- City-based search
- Coordinate-based search (geolocation)
- Metric units (Celsius, km/h)

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Principles

### Glassmorphism
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders and shadows
- Layered visual hierarchy

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🚀 Performance Features

- **Optimized API Calls** - Efficient data fetching and caching
- **Lightweight** - No external frameworks or heavy libraries
- **Fast Loading** - Minimal dependencies and optimized assets
- **Smooth Animations** - Hardware-accelerated CSS transforms

## 🔮 Future Enhancements

- [ ] Weather alerts and notifications
- [ ] Multiple location bookmarks
- [ ] Weather maps integration
- [ ] Historical weather data
- [ ] Weather widgets
- [ ] Offline functionality with Service Workers
- [ ] Weather-based background animations
- [ ] Voice search integration
- [ ] Weather comparison between cities

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Contribution Guidelines
- Follow existing code style
- Add comments for complex functionality
- Test on multiple browsers
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@GaganYadav20](https://github.com/GaganYadav20)
- LinkedIn: [Gagan Yadav](www.linkedin.com/in/gagan-yadav-17b83331b)
- Portfolio: [Gagan-P.com](https://gaganyadav20.github.io/Portfolio-website/)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Google Fonts](https://fonts.google.com/) for the Inter font family
- Design inspiration from modern weather apps and glassmorphism trends

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub
- Check the existing issues for solutions
- Contact me directly through the links above

---

⭐ **Star this repository if you found it helpful!**
