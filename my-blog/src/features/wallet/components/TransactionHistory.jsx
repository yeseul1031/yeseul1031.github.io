import React from "react";
const getExplorerUrl = (hash, network = "sepolia") => {
    const base = network === "mainnet"
        ? "https://etherscan.io/tx/"
        : `https://${network}.etherscan.io/tx/`;
    return `${base}${hash}`;
};
const maskAddress = (addr) => addr.slice(0, 6) + "..." + addr.slice(-4);
export const TransactionHistory = ({ transactions, network = "sepolia", }) => (<div className="tx-history">
    <h4>📜 거래 내역</h4>
    {transactions.length === 0 ? (<p>최근 거래 내역이 없습니다.</p>) : (<ul style={{ padding: 0, listStyle: "none" }}>
        {transactions.map((tx, idx) => (<li key={tx.hash + idx} className="tx-item" style={{
                margin: "1rem 0",
                padding: "1rem",
                border: "1px solid #eee",
                borderRadius: "8px",
                background: "#fafbfc",
            }}>
            <p>
              <strong>
                <a href={getExplorerUrl(tx.hash, network)} target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", textDecoration: "underline" }} title="Etherscan에서 보기">
                  TX Hash: {tx.hash.slice(0, 10)}...
                </a>
              </strong>
            </p>
            <p>
              <span style={{ color: "#666" }}>From:</span> {maskAddress(tx.from)}
            </p>
            <p>
              <span style={{ color: "#666" }}>To:</span> {maskAddress(tx.to)}
            </p>
            <p>
              <span style={{ color: "#666" }}>Amount:</span>{" "}
              <strong>
                {Number(tx.value).toFixed(4)} ETH
              </strong>
            </p>
            <time style={{ color: "#888", fontSize: "0.9em" }}>
              {tx.timestamp.toLocaleString("ko-KR")}
            </time>
          </li>))}
      </ul>)}
  </div>);
