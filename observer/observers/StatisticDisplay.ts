import Observer from "./Observer";
import DisplayElement from "./DisplayElement";

class StatisticDisplay implements Observer, DisplayElement {
    temperature: number;
    humidity: number;
    pressure: number;

    constructor() {
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    update(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
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
