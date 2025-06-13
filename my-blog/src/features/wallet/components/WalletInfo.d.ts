interface WalletInfoProps {
    address: string;
    balance: string;
    error?: string | null;
    mnemonic: string;
    network: string;
    isLoading: boolean;
    copyFeedback: string;
    to: string;
    amount: string;
    txResult: string | null;
    showMnemonic: boolean;
    onNetworkChange: (network: string) => void;
    onCopy: (text: string) => void;
    onShowMnemonic: (show: boolean) => void;
    onGenerateNewMnemonic: () => void;
    onGetBalance: (address: string, network: string) => void;
    onSend: (e: React.FormEvent) => void;
    onToChange: (v: string) => void;
    onAmountChange: (v: string) => void;
}
declare const WalletInfo: React.FC<WalletInfoProps>;
export default WalletInfo;
