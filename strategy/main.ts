import Duck from "./Duck";
import Quack from "./QuackBehavior/Quack";
import FlyBehavior from "./FlyBehavior/FlyBehavior";
import FlyWithWings from "./FlyBehavior/FlyWithWings";
import MallardDuck from "./MallardDuck";
import QuackBehavior from "./QuackBehavior/QuackBehavior";

function main() {
    var mallardDuck:Duck = new MallardDuck();
    var flyWithWings:FlyBehavior = new FlyWithWings();
    var quack:QuackBehavior = new Quack('ahaa quack');

    mallardDuck.setPerformFly(flyWithWings);
    mallardDuck.setPerformQuack(quack);
}

main();