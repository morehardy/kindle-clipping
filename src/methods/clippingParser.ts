import lineParser from './lineParser'
import type { Note } from '../../types'

function clippingParser(data: string): Note[] {
    const lines = data.split('\n').slice(0, -1)
    const noteArr = []

    while (lines.length > 0) {
        noteArr.push(lineParser(lines.splice(0, 5)))
    }
    return noteArr
}

export default clippingParser
