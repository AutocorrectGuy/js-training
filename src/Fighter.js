import { randomNum } from './game.utils.js'

class Fighter {
  constructor(name) {
    this.name = name
    this.hp = randomNum(50, 200)
    this.maxHp = this.hp
    this.minDmg = randomNum(10, 60)
    this.maxDmg = this.minDmg + randomNum(20, 100)
  }

  calcDamage = () => randomNum(this.minDmg, this.maxDmg)

  hit = (opponent) => opponent.reactToHit(this.calcDamage())

  reactToHit = (dmg) => {
    this.hp = Math.max(0, this.hp - dmg)
    console.log(`${this.name}${this.hp ? `: ouch! HP: ${this.hp}` : ' has fallen'}`)
  }
}

export default Fighter
