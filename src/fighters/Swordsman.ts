import { AbstractFighter } from "./AbstractFighter";
import { Buckler } from "../items/Buckler";

export class Swordsman extends AbstractFighter {
    equipements: Set<any> = new Set()
    type?: string
    buckler?: Buckler
    constructor(type?: string) {
        super()
        this.lifePoints = 100
    }

    weapon() {
        return "sword"
    }

    parry(weapon: string) {
        if (this.buckler)
            return this.buckler.parry(weapon)
        return false
    }

    damage() {
        return 5
    }

    equip(equipment: string) {
        if (equipment === "buckler")
            this.buckler = new Buckler()
        this.equipements.add(equipment)
        return this
    }
}
