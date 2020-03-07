export abstract class Weapon {
    abstract damage: number
    poison = 0
    inflicts() {
        if (this.poison > 0) {
            this.poison--
            return this.damage + 20
        }
        return this.damage
    }
}