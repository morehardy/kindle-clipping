import clippingParser from './methods/clippingParser'
import noteMerge from './methods/noteMerge'
import clippingPathInit from './methods/clippingPathInit'
import path from 'path'
import { Note, NoteMerged, kindleClipping } from '../types'

class Main implements kindleClipping.NoteMain {
    clippingPath?: string

    constructor(customPath = '') {
        this.clippingPath = customPath && path.resolve(__dirname, customPath)
    }

    getJson(): Note[] {
        return clippingParser(this.clippingPath || clippingPathInit())
    }

    getMergedJson(): (NoteMerged | Note)[] {
        return noteMerge(
            clippingParser(this.clippingPath || clippingPathInit())
        )
    }
}

export default Main
