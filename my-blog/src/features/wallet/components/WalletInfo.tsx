import {useEffect } from 'react';
import Modal from 'react-modal';

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

const WalletInfo: React.FC<WalletInfoProps> = ({
  address,
  balance,
  error,
  mnemonic,
  network,
  isLoading,
  copyFeedback,
  to,
  amount,
  txResult,
  showMnemonic,
  onNetworkChange,
  onCopy,
  onShowMnemonic,
  onGenerateNewMnemonic,
  onGetBalance,
  onSend,
  onToChange,
  onAmountChange,
}) => {
  useEffect(() => {
    if (address) {
      onGetBalance(address, network);
    }
    // eslint-disable-next-line
  }, [address, network]);

  return (
    <div style={{
      maxWidth: 700,
      margin: '3rem auto',
      padding: '2.5rem',
      borderRadius: 16,
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      alignItems: 'center'
    }}>
      <h2 style={{ marginBottom: 0 }}>🚀 블록체인 지갑</h2>

      {/* 네트워크 선택 */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16 }}>
        <label style={{ minWidth: 80 }}>네트워크</label>
        <select
          value={network}
          onChange={e => onNetworkChange(e.target.value)}
          style={{
            flex: 1,
            padding: '0.7rem 1rem',
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: 16,
            color: '#111'
          }}
        >
          <option value="mainnet">이더리움 메인넷</option>
          <option value="sepolia">Sepolia 테스트넷</option>
        </select>
      </div>

      {/* 주소 표시 및 복사 */}
      {address && (
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <label style={{ minWidth: 80 }}>주소</label>
          <input
            type="text"
            value={address}
            readOnly
            style={{
              flex: 1,
              padding: '0.7rem',
              fontSize: 16,
              borderRadius: 8,
              border: '1px solid #ddd',
              color: '#111'
            }}
          />
          <button
            onClick={() => onCopy(address)}
            style={{
              padding: "0.7rem 1.5rem",
              borderRadius: 8,
              border: "none",
              background: "#eee",
              color: "#111",
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            복사
          </button>
          {copyFeedback && (
            <span style={{ color: "#27ae60", fontSize: 14 }}>{copyFeedback}</span>
          )}
        </div>
      )}

      {/* 잔액 및 새로고침 */}
      {address && (
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <label style={{ minWidth: 80 }}>잔액</label>
          <span style={{ flex: 1, fontSize: 16 }}>{isLoading ? "조회 중..." : `${balance} ETH`}</span>
          <button
            onClick={() => onGetBalance(address, network)}
            style={{
              padding: "0.7rem 1.5rem",
              borderRadius: 8,
              border: "none",
              background: "#eee",
              color: "#111",
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            새로고침
          </button>
        </div>
      )}

      {/* 버튼 그룹 */}
      <div style={{
        width: '100%',
        display: "flex",
        justifyContent: "center",
        gap: 20
      }}>
        <button
          onClick={onGenerateNewMnemonic}
          style={{
            padding: "0.7rem 2.5rem",
            borderRadius: 8,
            border: "1px solid #eee",
            background: "#fff",
            color: "#111",
            fontWeight: 500,
            fontSize: 16,
            cursor: "pointer"
          }}
        >
          새 지갑 생성
        </button>
        {address && (
          <button
            onClick={() => onShowMnemonic(true)}
            style={{
              padding: "0.7rem 2.5rem",
              borderRadius: 8,
              border: "none",
              background: "#e74c3c",
              color: "#fff",
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            니모닉 확인
          </button>
        )}
      </div>

      {/* 송금 폼 */}
      {address && (
        <form onSubmit={onSend} style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          marginTop: 12
        }}>
          <h3 style={{ margin: 0 }}>💸 송금</h3>
          <input
            type="text"
            placeholder="받는 주소"
            value={to}
            onChange={e => onToChange(e.target.value)}
            style={{
              width: '80%',
              padding: '0.7rem',
              fontSize: 16,
              borderRadius: 8,
              border: '1px solid #ddd',
              color: '#111'
            }}
            required
          />
          <input
            type="number"
            placeholder="보낼 금액 (ETH)"
            value={amount}
            onChange={e => onAmountChange(e.target.value)}
            style={{
              width: '80%',
              padding: '0.7rem',
              fontSize: 16,
              borderRadius: 8,
              border: '1px solid #ddd',
              color: '#111'
            }}
            min="0"
            step="any"
            required
          />
          <button
            type="submit"
            style={{
              padding: "0.7rem 2.5rem",
              borderRadius: 8,
              border: "none",
              background: "#eee",
              color: "#111",
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer"
            }}
            disabled={isLoading}
          >
            송금
          </button>
          {txResult && (
            <div style={{
              color: txResult.includes('성공') ? "#27ae60" : "#c0392b",
              marginTop: 8,
              fontSize: 15
            }}>
              {txResult}
            </div>
          )}
        </form>
      )}

      {/* 네트워크 에러/경고 메시지 */}
      {error && (
        <div style={{
          background: "#ffe6e6",
          color: "#c0392b",
          borderRadius: 8,
          padding: "1rem",
          marginTop: 8,
          fontSize: 15
        }}>
          ⚠️ {error}
        </div>
      )}

      {/* 니모닉 모달 */}
      <Modal
        isOpen={showMnemonic}
        onRequestClose={() => onShowMnemonic(false)}
        style={{
          content: {
            maxWidth: 700,
            minWidth: 400,
            width: '80vw',
            height: 'auto',
            maxHeight: 180,
            margin: "auto",
            padding: "1.5rem",
            borderRadius: 12,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box"
          }
        }}
        ariaHideApp={false}
      >
        <h3 style={{ color: "#c0392b", marginBottom: 16, fontSize: 16 }}>⚠️ 니모닉 구문</h3>
        <div
          style={{
            background: "#f8f9fa",
            padding: "1rem",
            borderRadius: 8,
            marginBottom: 16,
            fontSize: 14,
            fontWeight: 500,
            color: "#222",
            width: "100%",
            maxWidth: 640,
            overflowX: "auto",
            whiteSpace: "nowrap",
            boxSizing: "border-box"
          }}
        >
          <code>{mnemonic}</code>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={() => onCopy(mnemonic)}
            style={{
              padding: "0.5rem 1.5rem",
              borderRadius: 8,
              border: "none",
              background: "#eee",
              color: "#111",
              fontWeight: 500,
              fontSize: 14,
              cursor: "pointer"
            }}
          >
            복사
          </button>
          <button
            onClick={() => onShowMnemonic(false)}
            style={{
              padding: "0.5rem 1.5rem",
              borderRadius: 8,
              border: "none",
              background: "#e74c3c",
              color: "#fff",
              fontWeight: 500,
              fontSize: 14,
              cursor: "pointer"
            }}
          >
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default WalletInfo;
