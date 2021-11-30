import Observer from '../observers/Observer';

interface Subject {
    registerObserver(observer: Observer): Array<Observer>;
    removeObserver(observer: Observer): void;
    notifyObservers(temperature:number, humidity:number, pressure:number): void;
}

export default Subject;
