import { test } from 'tape'
import { calibration, lineCalibration } from './day1.js'

test('line calibration function should join the first and last digits encountered in a string', (assert) => {
    // arrange
    const string1 = 'two1nine'
    const string2 = 'eightwothree'
    const string3 = 'abcone2threexyz'
    const string4 = 'xtwone3four'
    const string5 = '4nineeightseven2'
    const string6 = 'zoneight234'
    const string7 = '7pqrstsixteen'
    // act
    const result1 = lineCalibration(string1)
    const result2 = lineCalibration(string2)
    const result3 = lineCalibration(string3)
    const result4 = lineCalibration(string4)
    const result5 = lineCalibration(string5)
    const result6 = lineCalibration(string6)
    const result7 = lineCalibration(string7)
    // assert
    assert.equal(result1, 29)
    assert.equal(result2, 83)
    assert.equal(result3, 13)
    assert.equal(result4, 24)
    assert.equal(result5, 42)
    assert.equal(result6, 14)
    assert.equal(result7, 76)
    assert.end()
})

test('line calibration function should crash if the line is empty', (assert) => {
    // arrange
    const emptyLine = ''
    // act
    // assert
    assert.throws(() => lineCalibration(emptyLine))
    assert.end()
})

test('calibration function should apply the line calibration on each line and add the values', (assert) => {
    // arrange
    const lines = [
        'two1nine',
        'eightwothree',
        'abcone2threexyz',
        'xtwone3four',
        '4nineeightseven2',
        'zoneight234',
        '7pqrstsixteen',
    ]
    // act
    const result = calibration(lines)
    // assert
    assert.equal(result, 281)
    assert.end()
})
