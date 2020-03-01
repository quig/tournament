import { DeadManError } from "./DeadManError";

export abstract class AbstractFighter {
    lifePoints: Number = 0
    abstract damage(): Number
    hitPoints() {
        return this.lifePoints
    }
    attack(fighter: any) {
        fighter.lifePoints = Math.max(fighter.hitPoints() - <number>this.damage(), 0)
        if (fighter.lifePoints <= 0) throw new DeadManError("i am dead")
    }
}