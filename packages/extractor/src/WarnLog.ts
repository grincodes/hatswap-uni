import { ChainId } from 'sushi/chain'

function nowDate(): string {
  const d = new Date()
  const year = (d.getFullYear() % 100).toString().padStart(2, '0')
  const month = (d.getMonth() + 1).toString().padStart(2, '0')
  const day = d.getDate().toString().padStart(2, '0')
  const hours = d.getHours().toString().padStart(2, '0')
  const min = d.getMinutes().toString().padStart(2, '0')
  const sec = d.getSeconds().toString().padStart(2, '0')
  return `${year}-${month}-${day}T${hours}:${min}:${sec}`
}

export type WarningLevel = 'info' | 'warning' | 'error'

export type WarningMessageHandler = (
  chain: ChainId | number | undefined,
  message: string,
  level: WarningLevel,
  context?: string,
) => void

let warningMessageHandler: WarningMessageHandler | undefined

export function setWarningMessageHandler(
  _warningMessageHandler: WarningMessageHandler | undefined,
) {
  warningMessageHandler = _warningMessageHandler
}

export function warnLog(
  chain: ChainId | number | undefined,
  msg: string,
  level: WarningLevel = 'warning',
  context?: string,
) {
  console.warn(`${nowDate()}-${chain}: ${msg}`)
  if (warningMessageHandler) warningMessageHandler(chain, msg, level, context)
}

export class LogSender {
  chain?: ChainId | number = undefined

  constructor(chain: ChainId | number) {
    this.chain = chain
  }

  warning(msg: string) {
    warnLog(this.chain, msg)
  }

  error(msg: string) {
    warnLog(this.chain, msg, 'error')
  }
}
