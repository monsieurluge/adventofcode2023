import { test } from 'tape'
import { Bag } from './bag.js'
import { Game } from './game.js'

const bag = Bag({ blue: 14, green: 13, red: 12 })

test('a game should be possible when all the revealed colors can be found in the bag', (assert) => {
    // arrange
    const game = Game('Game 1: 7 blue, 6 green, 3 red; 3 red, 5 green, 1 blue; 1 red, 5 green, 8 blue; 3 red, 1 green, 5 blue')
    // act
    const isPossible = game.isPossible(bag)
    // assert
    assert.equal(isPossible, true)
    assert.end()
})

test('a game should not be possible if some of the revealed colors exceed those in the bag', (assert) => {
    // arrange
    const game = Game('Game 3: 5 blue, 9 red, 14 green; 10 green, 3 blue; 11 red, 2 blue, 8 green; 5 red, 2 blue; 5 blue, 7 green, 8 red')
    // act
    const isPossible = game.isPossible(bag)
    // assert
    assert.equal(isPossible, false)
    assert.end()
})
