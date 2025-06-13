
import { useQuery } from '@tanstack/react-query'
import { getBlock } from '../api/blockchain'

export const useBlock = (blockNumber: number) => {
  return useQuery({
    queryKey: ['block', blockNumber],
    queryFn: () => getBlock(blockNumber),
    retry: 3
  })
}
