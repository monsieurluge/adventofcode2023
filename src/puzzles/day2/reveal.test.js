import { test } from 'tape'
import { Reveal } from './reveal.js'

const configuration = 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'

test('a Reveal configuration string should contain multiple sets of red|green|blue cubes', (assert) => {
    // arrange
    const reveal = Reveal(configuration)
    // act
    const sets = reveal.sets()
    // assert
    assert.equal(sets.length, 3)
    assert.same(sets, [
        { red: 3, green: 1, blue: 6 },
        { red: 6, green: 3, blue: 0 },
        { red: 14, green: 3, blue: 15 },
    ])
    assert.end()
})

test('a Reveal should not be possible if at least one of its colors cannot be picked from the bag', (assert) => {
    // arrange
    const reveal = Reveal(configuration)
    const bag = { green: 13, blue: 14, red: 12 }
    // act
    const isPossible = reveal.validSets(bag)
    // assert
    assert.equal(isPossible, false)
    assert.end()
})

test('a Reveal should be possible if the bag contains all of the revealed colors sets', (assert) => {
    // arrange
    const reveal = Reveal(configuration)
    const bag = { green: 5, blue: 15, red: 20 }
    // act
    const isPossible = reveal.validSets(bag)
    // assert
    assert.equal(isPossible, true)
    assert.end()
})
