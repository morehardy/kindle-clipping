import fs from 'fs'

function dataFromPath(path: string) {
  const exist = fs.existsSync(path)
  if (!exist) {
      throw new Error(`${path} not exist, please make sure the kindle device is connected properly!`)
  }
  const data = fs.readFileSync(path)
  return data.toString('utf8')
}

export default dataFromPath