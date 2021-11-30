import WeatherData from "./subject/WeatherData";
import CurrentConditionsDisplay from "./observers/CurrentConditionDisplay";
import StatisticsDisplay from "./observers/StatisticDisplay";
import ForecastDisplay from "./observers/ForecastDisplay";

function main() {
    const subject = new WeatherData();

    const currentDisplay = new CurrentConditionsDisplay(subject);
    const statisticsDisplay = new StatisticsDisplay(subject);
    const forecastDisplay = new ForecastDisplay(subject);

    subject.setMeasurements(80, 65, 30.4);
}

main();
