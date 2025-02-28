import { FC } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@sushiswap/ui/components/tooltip'

export const FarmRewardsAvailableTooltip: FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>✨</TooltipTrigger>
        <TooltipContent>
          <p>Farm rewards available</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
