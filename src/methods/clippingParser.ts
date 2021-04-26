import fs from 'fs'
import lineParser from './lineParser'
import type { Note } from '../../types'

function clippingParser(path: string): Note[] {
    const exist = fs.existsSync(path)
    if (!exist) {
        throw new Error(`${path} not exist!`)
    }
    const data = fs.readFileSync(path)

    const lines = data.toString('utf8').split('\n').slice(0, -1)
    const noteArr = []

    while (lines.length > 0) {
        noteArr.push(lineParser(lines.splice(0, 5)))
    }
    return noteArr
}

export default clippingParser
