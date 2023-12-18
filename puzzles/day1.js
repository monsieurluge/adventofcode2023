const digitsRegExp = /\D*(\d)/

export const firstDigit = (word) => {
    const matches = digitsRegExp.exec(word)
    if (!Array.isArray(matches) || matches.length < 2) {
        throw new Error(`no digit found in "${word}"`)
    }
    const digit = Number(matches[1])
    if (Number.isNaN(digit)) {
        throw new Error(`the first result is not a number, found: ${digit}`)
    }
    return digit
}

export const lastDigit = (word) => {
    const reversedWord = word.split('').reverse().join('')
    return firstDigit(reversedWord)
}
