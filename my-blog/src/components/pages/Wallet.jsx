import React, { useState } from 'react';
import WalletInfo from '../../features/wallet/components/WalletInfo';
import { useWallet } from '../../features/wallet/hooks/useWallet';
const WalletPage = () => {
    const { address, balance, error, mnemonic, generateNewMnemonic, getBalance, sendTransaction } = useWallet();
    const [network, setNetwork] = useState('sepolia');
    const [isLoading, setIsLoading] = useState(false);
    const [copyFeedback, setCopyFeedback] = useState('');
    const [showMnemonic, setShowMnemonic] = useState(false);
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState('');
    const [txResult, setTxResult] = useState(null);
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopyFeedback('복사 완료!');
        setTimeout(() => setCopyFeedback(''), 1500);
    };
    const handleGetBalance = async (address, network) => {
        setIsLoading(true);
        await getBalance(address, network);
        setIsLoading(false);
    };
    const handleSend = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTxResult(null);
        try {
            const receipt = await sendTransaction(to, amount, network);
            setTxResult(`트랜잭션 성공! 해시: ${receipt.hash}`);
            setTo('');
            setAmount('');
        }
        catch (err) {
            setTxResult('트랜잭션 실패');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (<WalletInfo address={address} balance={balance} error={error} mnemonic={mnemonic} network={network} isLoading={isLoading} copyFeedback={copyFeedback} to={to} amount={amount} txResult={txResult} showMnemonic={showMnemonic} onNetworkChange={setNetwork} onCopy={handleCopy} onShowMnemonic={setShowMnemonic} onGenerateNewMnemonic={generateNewMnemonic} onGetBalance={handleGetBalance} onSend={handleSend} onToChange={setTo} onAmountChange={setAmount}/>);
};
export default WalletPage;
