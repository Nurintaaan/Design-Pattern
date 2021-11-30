import Observer from "./Observer";
import DisplayElement from "./DisplayElement";
import WeatherData from "../subject/WeatherData";

class StatisticDisplay implements Observer, DisplayElement {
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

    getAverageMeasurements() {
        return (this.temperature + this.humidity + this.pressure) / 3;
    }

    getMinMeasurements() {
        return Math.min(this.temperature, this.humidity, this.pressure);
    }

    getMaxMeasurements() {
        return Math.max(this.temperature, this.humidity, this.pressure);
    }

    display() {
        console.log(`
            Average: ${this.getAverageMeasurements()}
            Min: ${this.getMinMeasurements()}
            Max: ${this.getMaxMeasurements()}
        `);
    }
}

export default StatisticDisplay;
