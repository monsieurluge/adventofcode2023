import { test } from 'tape'
import { firstDigit, lastDigit } from '../puzzles/day1.js'

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
