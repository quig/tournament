import { Weapon } from "./Weapon";

export class GreatSword extends Weapon {
    damage = 12
    fatigue = 2 // 0 rest, 1 fight, 2 fight
    rest() {
        this.fatigue = 2
    }

    inflicts() {
        this.fatigue--
        return super.inflicts()
    }
}