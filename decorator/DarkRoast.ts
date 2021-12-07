import Beverage from "./Beverage";

class DarkRoast implements Beverage{
    getDescription() {
        return 'Dark Roast';
    }
    cost() {
        return 0.99;
    }
}

export default DarkRoast;