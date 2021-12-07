import Beverage from "./Beverage";

class Mocha implements Beverage {
    beverage: Beverage;

    constructor(beverage) {
        this.beverage = beverage;
    }
    
    cost() {
        return 0.01 + this.beverage.cost();
    }

    setBeverage(beverage: Beverage) {
        this.beverage = beverage;
    }
}

export default Mocha;
