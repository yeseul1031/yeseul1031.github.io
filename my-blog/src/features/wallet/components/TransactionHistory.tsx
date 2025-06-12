
interface TransactionReceipt {
    hash: string;
    from: string;
    to: string;
    value: string;
    timestamp: Date;
  }
  
  interface TransactionHistoryProps {
    transactions: TransactionReceipt[];
  }
  
  export const TransactionHistory = ({ transactions }: TransactionHistoryProps) => (
    <div className="tx-history">
      <h4>📜 거래 내역</h4>
      <ul>
        {transactions.map((tx, idx) => (
          <li key={idx} className="tx-item">
            <p>TX Hash: {tx.hash}</p>
            <p>From: {tx.from}</p>
            <p>To: {tx.to}</p>
            <p>Amount: {tx.value} ETH</p>
            <time>{tx.timestamp.toLocaleString()}</time>
          </li>
        ))}
      </ul>
    </div>
  );
  