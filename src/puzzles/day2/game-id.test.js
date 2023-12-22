import { test } from 'tape'
import { GameId } from './game-id.js'

test('the game ID should be picked from a game configuration string', (assert) => {
    // arrange
    const configuration = 'Game 42: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
    const gameId = GameId(configuration)
    // act
    const id = gameId.value()
    // assert
    assert.equal(id, 42)
    assert.end()
})
