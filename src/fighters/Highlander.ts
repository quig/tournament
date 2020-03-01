import { AbstractFighter } from "./AbstractFighter";

export class Highlander extends AbstractFighter {
    type?: string
    constructor(type?: string) {
        super()
        this.lifePoints = 100
    }

    weapon() {
        return "great sword"
    }

    damage() {
        return 12
    }
}
