
import React from 'react'
import useBlock from '../../hooks/useBlock'
import BlockCard from '../../components/BlockCard'

const BlocksPage = () => {
  const { data: latestBlock } = useBlock('latest')
  const blocks = Array.from({ length: 10 }, (_, i) => latestBlock.number - i)

  return (
    <div>
      <h1>Latest 10 Blocks</h1>
      {blocks.map(number => (
        <BlockCard key={number} blockNumber={number} />
      ))}
    </div>
  )
}
