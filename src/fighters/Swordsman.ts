import { Fighter } from "./Fighter";
import { Buckler } from "../items/Buckler";
import { Armor } from "../items/Armor";
import { Sword } from "../items/Sword";
import { Axe } from "../items/Axe";
import { Weapon } from "../items/Weapon";

export class Swordsman extends Fighter {
    lifePoints = 100
    weapon = new Sword
    type?: string
    constructor(type?: string) {
        super()
        this.type = type
        if (type === "Vicious")
            this.weapon.poison = 2
    }

    equip(equipment: string) {
        if (equipment === "buckler")
            this.buckler = new Buckler
        if (equipment === "armor")
            this.armor = new Armor
        if (equipment === "axe")
            this.weapon = new Axe
        if (this.type === "Vicious")
            this.weapon.poison = 2
        return this
    }
}
