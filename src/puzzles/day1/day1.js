import { lines } from '../../common/file.js'

const firstDigitRegExp = /(\d|one|two|three|four|five|six|seven|eight|nine).*/

const lastDigitRegExp = /.*(\d|one|two|three|four|five|six|seven|eight|nine)/d

const validDigits = new Map([
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
])

const firstDigit = (word) => {
    const matches = firstDigitRegExp.exec(word)
    if (!Array.isArray(matches) || matches.length < 2) {
        throw new Error(`no digit found in "${word}"`)
    }
    const digit = matches[1]
    if (!validDigits.has(digit)) {
        throw new Error(`the first result is not a number, found: ${digit}`)
    }
    return validDigits.get(digit)
}

const lastDigit = (word) => {
    const matches = lastDigitRegExp.exec(word)
    if (!Array.isArray(matches) || matches.length < 2) {
        throw new Error(`no digit found in "${word}"`)
    }
    const digit = matches[1]
    if (!validDigits.has(digit)) {
        throw new Error(`the first result is not a number, found: ${digit}`)
    }
    return validDigits.get(digit)
}

export const lineCalibration = (word) => firstDigit(word) * 10 + lastDigit(word)

export const calibration = (lines) => lines.map(lineCalibration).reduce((total, value) => total + value, 0)

export const resolve = (file) => calibration(lines(file))

export default Object.freeze({
    calibration,
    lineCalibration,
    resolve,
})
