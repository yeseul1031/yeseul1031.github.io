
import React from 'react'
import { SepoliaBlock } from '../types/sepolia.d.ts'

interface Props {
  block: SepoliaBlock
}

const BlockCard = ({ block }: Props) => (
  <div css={styles.card}>
    <h3>Block #{block.number}</h3>
    <p>Miner: {block.miner}</p>
    <p>Transactions: {block.transactions.length}</p>
  </div>
)

const styles = {
  card: {
    border: '1px solid #eaeaea',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0'
  }
}
