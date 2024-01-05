import { lines } from '../../common/file.js'
import { Bag } from './bag.js'
import { Game } from './game.js'

const bag = Bag({ blue: 14, green: 13, red: 12 })

const resolve = (inputFile) => {
    const configurations = lines(inputFile)
    return configurations.reduce((total, configuration) => {
        const game = Game(configuration)
        return game.isPossible(bag)
            ? total + game.id()
            : total
    }, 0)
}

export default Object.freeze({
    resolve,
})
