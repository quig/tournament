import { AbstractFighter } from "./AbstractFighter";

export class Viking extends AbstractFighter {
    equipements: Set<String> = new Set()
    constructor() {
        super()
        this.lifePoints = 120
    }

    damage() {
        return 6
    }

    equip(equipment: String) {
        this.equipements.add(equipment)
        return this
    }
}
