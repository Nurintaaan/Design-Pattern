import Beverage from "./Beverage";

class Whip implements Beverage {
    beverage: Beverage;

    constructor(beverage) {
        this.beverage = beverage;
    }
    
    cost() {
        return 0.03 + this.beverage.cost();
    }

    setBeverage(beverage: Beverage) {
        this.beverage = beverage;
    }
}

export default Whip;
