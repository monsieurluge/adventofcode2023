export function Reveal (configuration) {
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
        }, {})

    const sets = () => {
        const setsConfiguration = configuration.split(':')[1]
        return setsConfiguration.split(';').map(toSet)
    }

    return Object.freeze({
        sets,
    })
}
