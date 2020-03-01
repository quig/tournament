export class Buckler {
    state: number = 3
    hasParred: boolean = false
    parry(weapon: string): boolean {
        if (this.state === 0)
            return false
        if (weapon === "axe")
            if (this.state > 0) this.state--
        if (this.hasParred)
            return this.hasParred = false
        else
            return this.hasParred = true
    }
}