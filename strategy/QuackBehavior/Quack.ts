import QuackBehavior from "./QuackBehavior";

class Quack implements QuackBehavior{
    quackSound: string;
    constructor(quackSound:string) {
        this.quackSound = quackSound;
    }
    quack() {
      console.log(this.quackSound);  
      console.log('quack, quack');
    }
}

export default Quack;
