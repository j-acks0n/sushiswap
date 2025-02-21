import { useQuery } from '@tanstack/react-query'
import { isSupportedChainId } from '../../config'
import { getBuiltGraphSDK } from '../../.graphclient'
import { FURO_SUBGRAPH_NAME } from '@sushiswap/graph-config'
import { ChainId } from '@sushiswap/chain'
import { queryRebaseDTO } from './useRebaseDTO'
import { Stream } from '../Stream'

const GRAPH_HOST = 'api.thegraph.com'

interface UseStream {
  chainId: ChainId
  streamId: string
  enabled?: boolean
}

export const useStream = ({ chainId, streamId, enabled = true }: UseStream) => {
  return useQuery({
    queryKey: ['useStream', { chainId, streamId }],
    queryFn: async () => {
      if (!isSupportedChainId(chainId)) return null

      const sdk = getBuiltGraphSDK({
        chainId,
        host: GRAPH_HOST,
        name: FURO_SUBGRAPH_NAME[chainId],
      })

      const data = await sdk.stream({ id: streamId })
      const token = data?.stream?.token.id
      const rebase = await queryRebaseDTO({ chainId, address: token })

      return data.stream && rebase ? new Stream({ chainId, furo: data.stream, rebase }) : null
    },
    refetchInterval: 60000,
    enabled,
  })
}
