import { Weapon } from "./Weapon";

export class GreatSword extends Weapon {
    fatigue: number = 2 // 0 rest, 1 fight, 2 fight

    damage() {
        if (this.fatigue === 0) {
            this.fatigue = 2
            return 0
        }
        this.fatigue--
        return 12
    }
}