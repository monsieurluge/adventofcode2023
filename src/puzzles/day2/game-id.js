const gameIdRegExp = /^Game (\d+):/

export function GameId(configuration) {
    const value = () => {
        const matches = gameIdRegExp.exec(configuration)
        if (!matches || matches.length < 2) {
            throw new Error(`there is no Game ID in this configuration string: "${configuration}"`)
        }
        return Number(matches[1])
    }

    return Object.freeze({
        value,
    })
}
