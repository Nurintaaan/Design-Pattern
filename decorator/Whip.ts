import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

class Whip implements CondimentDecorator {
    beverage: Beverage;

    constructor(beverage) {
        this.beverage = beverage;
    }

    cost() {
        return 0.03 + this.beverage.cost();
    }

    getDescription() {
        return this.beverage.getDescription() + ", Whip";
    }

    setBeverage(beverage: Beverage) {
        this.beverage = beverage;
    }
}

export default Whip;
