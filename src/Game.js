import Fighter from './Fighter.js'

class Game {
  constructor(bracketCount) {
    const fightersCount = bracketCount * 2
    this.fighters = [...Array(fightersCount)].map((_x, i) => new Fighter(`Fighter-${i + 1}`))
    this.bracketIndex = 0
    this.winnerIndexes = []
    console.log(`All ${fightersCount} fighters are ready to fight!`)
  }

  startDuel = (i, j) => {
    const [f1, f2] = [this.fighters[i], this.fighters[j]]

    while (f1.hp !== 0 || f2.hp !== 0) {
      f1.hit(f2)
      if (!f2.hp) {
        this.winnerIndexes.push(i)
        break
      }

      f2.hit(f1)
      if (!f1.hp) {
        this.winnerIndexes.push(j)
        break
      }
    }
  }

  runBracket = () => {
    console.log(`🥋 Bracket ${++this.bracketIndex} has started!`)
    for (let i = 0; i < this.fighters.length; i += 2) this.startDuel(i, i + 1)
    this.finishBracket()
  }

  finishBracket = () => {
    this.fighters = this.winnerIndexes.map((i) => {
      this.fighters[i].hp = this.fighters[i].maxHp
      return this.fighters[i]
    })

    console.log(`🏁 Bracket ${this.bracketIndex} has finished!`)

    this.fighters.length === 1
      ? console.log(`${this.fighters[0].name} is the new champ!`)
      : (this.winnerIndexes = [])
  }

  startTurnament = () => {
    while (this.fighters.length > 1) this.runBracket()
  }
}

export default Game
