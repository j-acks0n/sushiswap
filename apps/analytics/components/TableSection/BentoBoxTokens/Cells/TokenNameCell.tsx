import { FC } from 'react'
import { Currency } from '@sushiswap/ui/components/currency'

import { ICON_SIZE } from '../constants'
import { Token } from '@sushiswap/currency'

export const TokenNameCell: FC<{ token: Token }> = ({ token }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex w-5 h-5">
        <Currency.Icon disableLink currency={token} width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium flex items-center gap-1 text-slate-50">{token.symbol}</p>
        <p className="text-[10px] text-slate-400">{token.name}</p>
      </div>
    </div>
  )
}
