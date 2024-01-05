import { test } from 'tape'
import { Bag } from './bag.js'

test('a bag should tell if a set of color cubes can be revealed from it', (assert) => {
    // arrange
    const bag = Bag({ blue: 11, green: 20, red: 1 })
    // act
    const isPossible = bag.containAtLeast({ blue: 8, green: 5, red: 1 })
    const isImpossible = bag.containAtLeast({ blue: 14, green: 4, red: 1 })
    // assert
    assert.equal(isPossible, true)
    assert.equal(isImpossible, false)
    assert.end()
})
