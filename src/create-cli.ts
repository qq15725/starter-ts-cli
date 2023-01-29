import { cac } from 'cac'
import { bin, version } from '../package.json'
import type { Options } from './types'

export function createCli(_options: Options) {
  const cli = cac(Object.keys(bin)[0])

  cli
    .help()
    .version(version)
    .parse(process.argv, { run: false })

  return cli
}
