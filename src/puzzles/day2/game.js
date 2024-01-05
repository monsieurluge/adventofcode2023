import { Reveal } from './reveal.js'

const isTrue = (value) => value === true

export function Game(configuration) {
    const reveal = Reveal(configuration)

    const isPossible = (bag) => {
        return reveal.sets().map(bag.containAtLeast).every(isTrue)
    }

    return Object.freeze({
        isPossible,
    })
}
