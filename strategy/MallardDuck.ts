import Duck from "./Duck";
import DefaultFly from "./FlyBehavior/DefaultFly";
import DefaultQuack from "./QuackBehavior/DefaultQuack";

class MallardDuck extends Duck {
    constructor() {
        let quackBehavior = new DefaultQuack('quackkkk');
        let flyBehavior = new DefaultFly();

        super(flyBehavior, quackBehavior);
    }

    display(): void {
        console.log('this is mallard duck');
    }
}

export default MallardDuck;