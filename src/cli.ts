import consola from 'consola'
import { createCli } from './create-cli'

createCli({ cwd: process.cwd() })
  .runMatchedCommand()
  ?.catch((err: unknown) => {
    consola.error(err)
    process.exitCode = 1
  })

