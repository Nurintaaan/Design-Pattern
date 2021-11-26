import FlyBehavior from './FlyBehavior';

class FlyWithWings implements FlyBehavior{
    fly() {
        console.log('flying with the wings');
    }
}

export default FlyWithWings;