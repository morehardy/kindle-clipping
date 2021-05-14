import clippingParser from './methods/clippingParser'
import noteMerge from './methods/noteMerge'
import clippingPathInit from './methods/clippingPathInit'
import dataFromPath from './methods/dataFromPath'
import path from 'path'
import type { KindleClipping } from '../types'

class KindleClippingCore implements KindleClipping {
    clippingPath: string

    constructor(customPath = '') {
        this.clippingPath = customPath ? path.resolve(__dirname, customPath) : clippingPathInit()
    }

    getJson() {
        const noteData = dataFromPath(this.clippingPath)
        return clippingParser(noteData)
    }

    getMergedJson() {
        const noteData = dataFromPath(this.clippingPath)
        return noteMerge(
            clippingParser(noteData)
        )
    }
}

function kindleClipping (customPath?: string) {
    return new KindleClippingCore(customPath)
}

export default kindleClipping
// export clippingParser
