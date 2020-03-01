import { AbstractFighter } from "./AbstractFighter";
import { Buckler } from "../items/Buckler";

export class Viking extends AbstractFighter {
    equipements: Set<any> = new Set()
    buckler?: Buckler
    constructor() {
        super()
        this.lifePoints = 120
    }

    weapon() {
        return "axe"
    }

    parry(weapon: string) {
        if (this.buckler)
            return this.buckler.parry(weapon)
        return false
    }

    damage() {
        return 6
    }

    equip(equipment: string) {
        if (equipment === "buckler")
            this.buckler = new Buckler()
        this.equipements.add(equipment)
        return this
    }
}
