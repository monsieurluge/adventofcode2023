import day1 from './puzzles/day1/day1.js'

const resolvers = new Map([
    ['day1', day1.resolve],
])

const requestedResolver = process.argv[2]

if (!resolvers.has(requestedResolver)) {
    throw new Error(`unknown resolver name: "${requestedResolver}"`)
}

const resolver = resolvers.get(requestedResolver)

const response = resolver(...process.argv.slice(3))

console.log(response)
