import { test } from 'tape'
import { lineCalibration, firstDigit, lastDigit, calibration } from '../puzzles/day1/day1.js'

test('firstDigit function should return the fist digit of a given string', (expect) => {
    // arrange
    const string1 = '1abc2'
    const string2 = 'pqr3stu8vwx'
    const string3 = 'a1b2c3d4e5f'
    const string4 = 'treb7uchet'
    // act
    const result1 = firstDigit(string1)
    const result2 = firstDigit(string2)
    const result3 = firstDigit(string3)
    const result4 = firstDigit(string4)
    // assert
    expect.equal(result1, 1)
    expect.equal(result2, 3)
    expect.equal(result3, 1)
    expect.equal(result4, 7)
    expect.end()
})

test('firstDigit function should crash if there is no digit in the provided string', (expect) => {
    // arrange
    const emptyString = ''
    const noDigitString = 'q/we&rty%'
    // act
    // assert
    expect.throws(() => firstDigit(emptyString))
    expect.throws(() => firstDigit(noDigitString))
    expect.end()
})

test('lastDigit function should return the last digit of a given string', (expect) => {
    // arrange
    const string1 = '1abc2'
    const string2 = 'pqr3stu8vwx'
    const string3 = 'a1b2c3d4e5f'
    const string4 = 'treb7uchet'
    // act
    const result1 = lastDigit(string1)
    const result2 = lastDigit(string2)
    const result3 = lastDigit(string3)
    const result4 = lastDigit(string4)
    // assert
    expect.equal(result1, 2)
    expect.equal(result2, 8)
    expect.equal(result3, 5)
    expect.equal(result4, 7)
    expect.end()
})

test('lastDigit function should crash if there is no digit in the provided string', (expect) => {
    // arrange
    const emptyString = ''
    const noDigitString = 'q/we&rty%'
    // act
    // assert
    expect.throws(() => lastDigit(emptyString))
    expect.throws(() => lastDigit(noDigitString))
    expect.end()
})

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
