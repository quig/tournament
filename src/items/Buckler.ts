export class Buckler {
    state: number = 3
    hasParred: boolean = false
    parry(weapon: string): boolean {
        if (this.state === 0)
            return false
        if (!this.hasParred && weapon === "axe")
            if (this.state > 0) this.state--
        this.hasParred = !this.hasParred
        return this.hasParred
    }
}