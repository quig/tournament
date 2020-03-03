import { DeadManError } from "../error/DeadManError";
import { Armor } from "../items/Armor";
import { Weapon } from "../items/Weapon";
import { Sword } from "../items/Sword";
import { GreatSword } from "../items/GreatSword";
import { Buckler } from "../items/Buckler";

export abstract class Fighter {
    lifePoints: number = 0
    weapon: Weapon = new Sword
    armor?: Armor
    buckler?: Buckler
    getWeapon() {
        return this.weapon
    }

    hitPoints() {
        return this.lifePoints
    }

    parry(weapon: Weapon) {
        if (this.buckler)
            return this.buckler.parry(weapon)
        return false
    }


    engage(fighter: any) {
        try {
            while (1) {
                this.attack(fighter)
                fighter.attack(this)
            }
        } catch (e) { }
    }

    attack(fighter: any) {
        //attack
        if (this.weapon instanceof GreatSword && this.weapon.fatigue === 0) {
            this.weapon.rest()
            return;
        }
        const damage = this.giveDamage()
        //defense
        if (!fighter.parry(this.getWeapon()))
            fighter.lifePoints = fighter.takeDamage(damage)
        //end turn
        if (fighter.lifePoints <= 0) throw new DeadManError("he is dead")
    }

    giveDamage() {
        return this.armor ? this.getWeapon().damage() - this.armor.buffer() :
            this.getWeapon().damage()
    }

    takeDamage(damage: number) {
        let points = this.armor ? this.hitPoints() - (damage - this.armor.absorb())
            : this.hitPoints() - damage
        return Math.max(points, 0)
    }
}