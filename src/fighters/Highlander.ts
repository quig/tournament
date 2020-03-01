import { Fighter } from "./Fighter";
import { GreatSword } from "../items/GreatSword";

export class Highlander extends Fighter {
    type?: string
    constructor(type?: string) {
        super()
        this.lifePoints = 150
        this.weapon = new GreatSword
    }
}
