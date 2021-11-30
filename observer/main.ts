import WeatherData from "./subject/WeatherData";
import CurrentConditionDisplay from "./observers/CurrentConditionDisplay";
import ForecastDisplay from "./observers/ForecastDisplay";
import StatisticDisplay from "./observers/StatisticDisplay";

function main() {
    const subject = new WeatherData();
    
    const currentDisplay = new CurrentConditionDisplay();
    const forecastDisplay = new ForecastDisplay();
    const statisticDisplay = new StatisticDisplay();

    subject.registerObserver(currentDisplay);
    subject.registerObserver(forecastDisplay);
    subject.registerObserver(statisticDisplay);

    subject.measurementsChanged(80, 65, 30.4);
}

main();
