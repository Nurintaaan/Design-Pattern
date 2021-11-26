import FlyBehavior from "./FlyBehavior/FlyBehavior";
import QuackBehavior from "./QuackBehavior/QuackBehavior";

class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    performFly(): void{
        this.flyBehavior.fly();
    }

    performQuack():void {
        this.quackBehavior.quack();
    }

    setPerformFly(flyBehavior): FlyBehavior {
        this.flyBehavior = flyBehavior;
        return this.flyBehavior;
    }

    setPerformQuack(quackBehavior): QuackBehavior {
        this.quackBehavior = quackBehavior;
        return this.quackBehavior;
    }

    display():void {}
}

export default Duck;