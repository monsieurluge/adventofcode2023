import { test } from 'tape'
import { calibration, lineCalibration } from './day1.js'

test('line calibration function should join the first and last digits encountered in a string', (expect) => {
    // arrange
    const string1 = '1abc2'
    const string2 = 'pqr3stu8vwx'
    const string3 = 'a1b2c3d4e5f'
    const string4 = 'treb7uchet'
    // act
    const result1 = lineCalibration(string1)
    const result2 = lineCalibration(string2)
    const result3 = lineCalibration(string3)
    const result4 = lineCalibration(string4)
    // assert
    expect.equal(result1, 12)
    expect.equal(result2, 38)
    expect.equal(result3, 15)
    expect.equal(result4, 77)
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
        '1abc2',
        'pqr3stu8vwx',
        'a1b2c3d4e5f',
        'treb7uchet',
    ]
    // act
    const result = calibration(lines)
    // assert
    expect.equal(result, 142)
    expect.end()
})
