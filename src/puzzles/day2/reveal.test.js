import { test } from 'tape'
import { Reveal } from './reveal.js'

test('a Reveal configuration string should contain multiple sets of red|green|blue cubes', (assert) => {
    // arrange
    const configuration = 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
    const reveal = Reveal(configuration)
    // act
    const sets = reveal.sets()
    // assert
    assert.equal(sets.length, 3)
    assert.same(sets, [
        { red: 3, green: 1, blue: 6 },
        { red: 6, green: 3 },
        { red: 14, green: 3, blue: 15 },
    ])
    assert.end()
})
