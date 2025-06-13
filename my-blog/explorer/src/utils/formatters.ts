
import { ethers } from 'ethers'

export const formatValue = (value: bigint) => {
  return `${ethers.formatEther(value)} ETH`
}

export const formatTimestamp = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleString()
}
