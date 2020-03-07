import { DeadManError } from "../error/DeadManError";
import { Armor } from "../items/Armor";
import { Weapon } from "../items/Weapon";
import { Buckler } from "../items/Buckler";

export abstract class Fighter {
    abstract lifePoints: number
    abstract weapon: Weapon
    armor?: Armor
    buckler?: Buckler

    hitPoints() {
        return this.lifePoints
    }

    parry(weapon: Weapon) {
        if (this.buckler)
            return this.buckler.parry(weapon)
        return false
    }

    engage(fighter: Fighter) {
        try {
            while (1) {
                this.attack(fighter)
                fighter.attack(this)
            }
        } catch (e) { }
    }

    attack(fighter: Fighter) {
        try {
            //attack
            const damage = this.giveDamage()
            //defense
            if (!fighter.parry(this.weapon))
                fighter.lifePoints = fighter.takeDamage(damage)
        } catch (e) { } //catch when the attacker is unable to attack

        //end turn
        if (fighter.lifePoints <= 0) throw new DeadManError("he is dead")
    }

    giveDamage(): number {
        return this.armor ? this.weapon.inflicts() - this.armor.nerf() :
            this.weapon.inflicts()
    }

    takeDamage(damage: number): number {
        let points = this.armor ? this.hitPoints() - (damage - this.armor.absorb())
            : this.hitPoints() - damage
        return Math.max(points, 0)
    }
}