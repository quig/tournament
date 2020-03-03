import { Weapon } from "./Weapon";

export class GreatSword extends Weapon {
    fatigue: number = 2 // 0 rest, 1 fight, 2 fight

    rest() {
        this.fatigue = 2
    }

    damage() {
        this.fatigue--
        return 12
    }
}