import os from 'os'
import fs from 'fs'
import path from 'path'

const MAC_PATH = '/Volumes/Kindle/documents/My Clippings.txt'
const osType = os.type()

export default function initClippingPath(): string {
  if (osType === 'Windows_NT') {
    return getWindowsPath()
  } else if (osType === 'Darwin') {
    return path.resolve(__dirname, MAC_PATH)
  }
  throw new Error('unSupport os')
}

function getWindowsPath(): string {
  for (let i = 1; i < 9; i++) {
    const diskCode = String.fromCharCode('C'.charCodeAt(0) + i)
    const _path = path.resolve(`${diskCode}:/documents/My Clippings.txt`)

    const exist = fs.existsSync(_path)
    if (exist) return _path
  }
  return 'path'
}