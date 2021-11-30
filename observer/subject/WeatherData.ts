import Subject from "./Subject";
import Observer from '../observers/Observer';

class WeatherData implements Subject {
    observers: Observer[] = [];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number { 
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    measurementsChanged(): void {
        this.notifyObservers();
    }

    registerObserver(o: Observer): Array<Observer> {
        this.observers.push(o);
        return this.observers;
    }

    removeObserver(o: Observer): void {
        const index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

}
export default WeatherData;