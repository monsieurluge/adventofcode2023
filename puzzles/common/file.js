import fs from 'fs'

const lineBreak = /\r?\n/

const atLeastOneCharacter = (line) => line.length > 0

export const lines = (file) => fs.readFileSync(file, 'utf-8').split(lineBreak).filter(atLeastOneCharacter)
