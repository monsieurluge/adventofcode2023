import { test } from 'tape'
import { Bag } from './bag.js'
import { Game } from './game.js'

const configuration1 = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
const configuration2 = 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
const configuration3 = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
const configuration4 = 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
const configuration5 = 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'

const bag = Bag({ blue: 14, green: 13, red: 12 })

test('a game should be possible when all the revealed colors can be found in the bag', (assert) => {
    // arrange
    const game = Game(configuration1)
    // act
    const isPossible = game.isPossible(bag)
    // assert
    assert.equal(isPossible, true)
    assert.end()
})

test('a game should not be possible if some of the revealed colors exceeds those in the bag', (assert) => {
    // arrange
    const game = Game(configuration3)
    // act
    const isPossible = game.isPossible(bag)
    // assert
    assert.equal(isPossible, false)
    assert.end()
})

test('a game should tell its ID', (assert) => {
    // arrange
    const game = Game(configuration5)
    // act
    const id = game.id()
    // assert
    assert.equal(id, 5)
    assert.end()
})

test('the requirements for a game to be possible should be provided', (assert) => {
    // arrange
    const game1 = Game(configuration1)
    const game2 = Game(configuration2)
    const game3 = Game(configuration3)
    const game4 = Game(configuration4)
    const game5 = Game(configuration5)
    // act
    const requirements1 = game1.requirements()
    const requirements2 = game2.requirements()
    const requirements3 = game3.requirements()
    const requirements4 = game4.requirements()
    const requirements5 = game5.requirements()
    // assert
    assert.same(requirements1, { red: 4, green: 2, blue: 6 })
    assert.same(requirements2, { red: 1, green: 3, blue: 4 })
    assert.same(requirements3, { red: 20, green: 13, blue: 6 })
    assert.same(requirements4, { red: 14, green: 3, blue: 15 })
    assert.same(requirements5, { red: 6, green: 3, blue: 2 })
    assert.end()
})
