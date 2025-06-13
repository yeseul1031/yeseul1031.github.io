
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlocksPage from './pages/Blocks'
import TransactionsPage from './pages/Transactions'

const App = () => (
  <BrowserRouter>
    <nav css={styles.nav}>
      <a href="/">Home</a>
      <a href="/explorer/blocks">Blocks</a>
      <a href="/explorer/transactions">Transactions</a>
    </nav>
    
    <Routes>
      <Route path="/blocks" element={<BlocksPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
    </Routes>
  </BrowserRouter>
)

const styles = {
  nav: {
    padding: '1rem',
    borderBottom: '1px solid #eee',
    '& a': { marginRight: '1rem' }
  }
}
