import os from 'os'
import path from 'path'

const MAC_PATH = '/Volumes/Kindle/documents/My Clippings.txt'

const WINDOWS_PATH = '/window'

const osType = os.type()

export default function initClippingPath(): string {
    if (osType === 'Windows_NT') {
        return path.resolve(__dirname, WINDOWS_PATH)
    } else if (osType === 'Darwin') {
        return path.resolve(__dirname, MAC_PATH)
    }
    throw new Error('unSupport os')
}
