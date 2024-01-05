import { GameId } from './game-id.js'
import { Reveal } from './reveal.js'

const isTrue = (value) => value === true

export function Game(configuration) {
    const identifier = GameId(configuration)
    const reveal = Reveal(configuration)

    const isPossible = (bag) => reveal.sets().map(bag.containAtLeast).every(isTrue)

    const requirements = () => {
        return reveal.sets().reduce((minimums, set) => {
            return {
                blue: Math.max(minimums.blue, set.blue),
                green: Math.max(minimums.green, set.green),
                red: Math.max(minimums.red, set.red),
            }
        }, { red: 0, green: 0, blue: 0 })
    }

    return Object.freeze({
        id: identifier.value,
        isPossible,
        requirements,
    })
}
