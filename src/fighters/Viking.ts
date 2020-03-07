import { Fighter } from "./Fighter";
import { Buckler } from "../items/Buckler";
import { Armor } from "../items/Armor";
import { Axe } from "../items/Axe";
import { Weapon } from "../items/Weapon";

export class Viking extends Fighter {
    lifePoints = 120
    weapon = new Axe

    equip(equipment: string) {
        if (equipment === "buckler")
            this.buckler = new Buckler
        if (equipment === "armor")
            this.armor = new Armor
        return this
    }
}
