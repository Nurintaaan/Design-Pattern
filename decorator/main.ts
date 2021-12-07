import DarkRoast from "./DarkRoast";
import Mocha from "./Mocha";
import Whip from "./Whip";

function main() {
    const darkRoast = new DarkRoast();
    const mocha = new Mocha(darkRoast);
    const whip = new Whip(mocha);
    console.log(whip.cost());
}

main();