import Observer from "./Observer";
import DisplayElement from "./DisplayElement";

class CurrentConditionDisplay implements Observer, DisplayElement {
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

    display() {
        console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}

export default CurrentConditionDisplay;
