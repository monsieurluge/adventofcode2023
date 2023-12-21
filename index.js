import day1 from './src/puzzles/day1/day1.js'

const resolvers = new Map([
    ['day1', day1],
])

const requestedResolver = process.argv[2]

if (!resolvers.has(requestedResolver)) {
    throw new Error(`unknown resolver name: "${requestedResolver}"`)
}

const response = resolvers.get(requestedResolver).resolve(...process.argv.slice(3))

console.log(response)
