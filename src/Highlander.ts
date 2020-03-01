import { AbstractFighter } from "./AbstractFighter";

export class Highlander extends AbstractFighter {
    type: String
    constructor(type?: String) {
        super()
        this.lifePoints = 100
        this.type = type ? type : ""
    }

    damage() {
        return 12
    }
}
