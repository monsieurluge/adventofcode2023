import { test } from 'tape'
import { calibration, lineCalibration } from './day1.js'

test('line calibration function should join the first and last digits encountered in a string', (expect) => {
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
    expect.equal(result1, 29)
    expect.equal(result2, 83)
    expect.equal(result3, 13)
    expect.equal(result4, 24)
    expect.equal(result5, 42)
    expect.equal(result6, 14)
    expect.equal(result7, 76)
    expect.end()
})

test('line calibration function should crash if the line is empty', (expect) => {
    // arrange
    const emptyLine = ''
    // act
    // assert
    expect.throws(() => lineCalibration(emptyLine))
    expect.end()
})

test('calibration function should apply the line calibration on each line and add the values', (expect) => {
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
    expect.equal(result, 281)
    expect.end()
})
