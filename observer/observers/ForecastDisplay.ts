import Observer from "./Observer";
import DisplayElement from "./DisplayElement";
import WeatherData from "../subject/WeatherData";

class ForecastDisplay implements Observer, DisplayElement {
    temperature: number;
    humidity: number;
    pressure: number;
    weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update() {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    }

    display() {
        console.log(`Forecast: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}

export default ForecastDisplay;
