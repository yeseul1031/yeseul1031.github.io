
import { ethers } from 'ethers'

export const provider = new ethers.JsonRpcProvider(
  import.meta.env.VITE_SEPOLIA_RPC
)

export const getBlock = async (blockNumber: number) => {
  return provider.getBlock(blockNumber)
}

export const getTransaction = async (hash: string) => {
  return provider.getTransaction(hash)
}
