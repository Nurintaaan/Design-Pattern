import Observer from '../observers/Observer';

interface Subject {
    registerObserver(observer: Observer): Array<Observer>;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

export default Subject;
