import { Fighter } from "./Fighter";
import { GreatSword } from "../items/GreatSword";

export class Highlander extends Fighter {
    maxLifePoints = 150
    lifePoints = 150
    weapon = new GreatSword
    type?: string
    constructor(type?: string) {
        super()
        this.type = type
    }

    giveDamage() {
        let damage = super.giveDamage()
        if (this.type === "Veteran" && this.lifePoints < (30 * this.maxLifePoints) / 100) {
            return 2 * damage
        }
        return damage
    }
}
