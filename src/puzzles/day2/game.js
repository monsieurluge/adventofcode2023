import { GameId } from './game-id.js'
import { Reveal } from './reveal.js'

const isTrue = (value) => value === true

export function Game(configuration) {
    const identifier = GameId(configuration)
    const reveal = Reveal(configuration)

    const isPossible = (bag) => reveal.sets().map(bag.containAtLeast).every(isTrue)

    return Object.freeze({
        id: identifier.value,
        isPossible,
    })
}
