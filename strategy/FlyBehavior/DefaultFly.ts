import FlyBehavior from './FlyBehavior';

class DefaultFly implements FlyBehavior{
    fly() {
        console.log('defalult fly');
    }
}

export default DefaultFly;