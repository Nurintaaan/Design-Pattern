import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

class Mocha implements CondimentDecorator {
    beverage: Beverage;

    constructor(beverage) {
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost() {
        return 0.01 + this.beverage.cost();
    }

    setBeverage(beverage: Beverage) {
        this.beverage = beverage;
    }
}

export default Mocha;
