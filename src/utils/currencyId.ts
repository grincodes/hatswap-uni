import { Currency, DEGEN, Token } from '@uniswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === DEGEN) return 'DEGEN'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
