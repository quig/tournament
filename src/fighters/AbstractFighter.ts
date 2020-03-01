import { DeadManError } from "../error/DeadManError";

export abstract class AbstractFighter {
    lifePoints: number = 0
    abstract weapon(): string
    abstract damage(): number
    hitPoints() {
        return this.lifePoints
    }

    parry(weapon: string) {
        return false
    }

    engage(fighter: any) {
        let turn = 0
        try {
            while (1) {
                this.attack(fighter)
                fighter.attack(this)
                turn++
            }
        } catch (e) { }
    }

    attack(fighter: any) {
        if (!fighter.parry(this.weapon()))
            fighter.lifePoints = Math.max(fighter.hitPoints() - this.damage(), 0)
        if (fighter.lifePoints <= 0) throw new DeadManError("he is dead")
    }
}