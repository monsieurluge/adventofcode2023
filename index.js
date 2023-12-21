import fs from 'fs'
import { calibration } from './puzzles/day1.js'

const lineBreak = /\r?\n/

const args = process.argv.slice(2)

export const fileCalibration = (file) => {
    const lines = fs.readFileSync(file, 'utf-8').split(lineBreak).filter(line => line.length !== 0)
    return calibration(lines)
}

if (args.length === 0) {
    throw new Error('the file name is required as first argument')
}

const day1Response = fileCalibration(args[0])

console.log(day1Response)
