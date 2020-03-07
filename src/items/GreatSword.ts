import { Weapon } from "./Weapon";
import { UnableToAttackError } from "../error/UnableToAttackError";

export class GreatSword extends Weapon {
    damage = 12
    fatigue = 2 // 0 rest, 1 fight, 2 fight
    inflicts() {
        if (this.fatigue === 0) {
            this.fatigue = 2
            throw new UnableToAttackError("wielder needs to rest")
        }
        this.fatigue--
        return super.inflicts()
    }
}