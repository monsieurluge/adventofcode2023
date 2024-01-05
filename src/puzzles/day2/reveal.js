const emptySet = { red: 0, green: 0, blue: 0 }

export function Reveal(configuration) {
    const emptyBagContent = {
        blue: 0,
        green: 0,
        red: 0,
    }

    const cubes = (value) => {
        const parts = value.trim().split(' ')
        return { color: parts[1], total: Number(parts[0]) }
    }

    const toSet = (config) => config
        .split(',')
        .map(cubes)
        .reduce((carry, item) => {
            return {
                ...carry,
                [item.color]: item.total,
            }
        }, emptySet)

    const sets = () => {
        const setsConfiguration = configuration.split(':')[1]
        return setsConfiguration.split(';').map(toSet)
    }

    const validSets = ({ red, green, blue } = emptyBagContent) => {
        return sets().every((set) => {
            return set.blue <= blue
                 && set.green <= green
                 && set.red <= red
        })
    }

    return Object.freeze({
        sets,
        validSets,
    })
}
