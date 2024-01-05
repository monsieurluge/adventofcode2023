import { lines } from '../../common/file.js'
import { Bag } from './bag.js'
import { Game } from './game.js'

const bag = Bag({ blue: 14, green: 13, red: 12 })

const resolve = (inputFile) => {
    const configurations = lines(inputFile)
    return configurations.reduce((total, configuration) => {
        const game = Game(configuration)
        const requirements = game.requirements()
        return {
            ids: game.isPossible(bag) ? total.ids + game.id() : total.ids,
            requirements: total.requirements + (requirements.blue * requirements.red * requirements.green)
        }
    }, { ids: 0, requirements: 0 })
}

export default Object.freeze({
    resolve,
})
