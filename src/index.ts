import clippingParser from './methods/clippingParser'
import noteMerge from './methods/noteMerge'
import clippingPathInit from './methods/clippingPathInit'
import path from 'path'
import type { KindleClipping } from '../types'

class KindleClippingCore implements KindleClipping {
    clippingPath: string

    constructor(customPath = '') {
        this.clippingPath = customPath ? path.resolve(__dirname, customPath) : clippingPathInit()
    }

    getJson() {
        return clippingParser(this.clippingPath)
    }

    getMergedJson() {
        return noteMerge(
            clippingParser(this.clippingPath)
        )
    }
}

function kindleClipping (customPath: string) {
    return new KindleClippingCore(customPath)
}

export default kindleClipping