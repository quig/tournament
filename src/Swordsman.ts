import { AbstractFighter } from "./AbstractFighter";

export class Swordsman extends AbstractFighter {
    type: String
    equipements: Set<String> = new Set()
    constructor(type?: String) {
        super()
        this.lifePoints = 100
        this.type = type ? type : ""
    }

    damage() {
        return 5
    }

    equip(equipment: String) {
        this.equipements.add(equipment)
        return this
    }

    engage(fighter: any) {
        try {
            while (1) {
                this.attack(fighter)
                fighter.attack(this)
            }
        } catch (e) { }
    }
}
