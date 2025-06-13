
interface SepoliaBlock {
    number: number
    hash: string
    parentHash: string
    timestamp: number
    transactions: string[]
    miner: string
    difficulty: bigint
  }
  
  interface SepoliaTransaction {
    hash: string
    from: string
    to: string | null
    value: string
    gasPrice: bigint
    blockNumber: number
  }
  