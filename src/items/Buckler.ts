import { Weapon } from "./Weapon";
import { Axe } from "./Axe";
import { GreatSword } from "./GreatSword";

export class Buckler {
    state: number = 3
    hasParred: boolean = false
    parry(weapon: Weapon): boolean {
        if (this.state === 0 || (weapon instanceof GreatSword && weapon.fatigue === 0))
            return false
        if (!this.hasParred && weapon instanceof Axe)
            if (this.state > 0) this.state--
        this.hasParred = !this.hasParred
        return this.hasParred
    }
}