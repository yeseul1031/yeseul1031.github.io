import React from "react";
interface TransactionReceipt {
    hash: string;
    from: string;
    to: string;
    value: string;
    timestamp: Date;
}
interface TransactionHistoryProps {
    transactions: TransactionReceipt[];
    network?: "mainnet" | "sepolia" | "goerli" | string;
}
export declare const TransactionHistory: React.FC<TransactionHistoryProps>;
export {};
