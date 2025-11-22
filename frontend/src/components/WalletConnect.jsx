import { useState } from "react";

export default function WalletConnect({ walletAddress, setWalletAddress }) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);

  const connectFreighter = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      // Check if Freighter is installed
      if (!window.freighter) {
        setError("Freighter wallet no está instalado. Por favor instálalo desde freighter.app");
        setIsConnecting(false);
        return;
      }

      // Request access to the wallet
      const isAllowed = await window.freighter.isAllowed();
      
      if (!isAllowed) {
        await window.freighter.setAllowed();
      }

      // Get the public key
      const publicKey = await window.freighter.getPublicKey();
      setWalletAddress(publicKey);
      
      console.log("Wallet conectada:", publicKey);
    } catch (err) {
      console.error("Error conectando wallet:", err);
      setError("Error al conectar con Freighter. Asegúrate de tener la extensión instalada.");
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setError(null);
  };

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="wallet-connect-container">
      {!walletAddress ? (
        <div className="wallet-connect-box">
          <div className="wallet-icon">🌟</div>
          <h3 style={{ fontSize: 24, marginBottom: 12 }}>Conecta tu Wallet Stellar</h3>
          <p style={{ color: "#94a3b8", marginBottom: 24 }}>
            Usa Freighter para interactuar con contratos inteligentes en Stellar
          </p>
          
          <button 
            className="btn-primary" 
            onClick={connectFreighter}
            disabled={isConnecting}
            style={{ width: "100%", maxWidth: 300 }}
          >
            {isConnecting ? "Conectando..." : "Conectar Freighter Wallet"}
          </button>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div style={{ marginTop: 24, fontSize: 14, color: "#64748b" }}>
            <p>¿No tienes Freighter? <a href="https://freighter.app" target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4" }}>Descárgalo aquí</a></p>
          </div>
        </div>
      ) : (
        <div className="wallet-connected-box">
          <div className="wallet-status">
            <div className="status-indicator"></div>
            <span>Wallet Conectada</span>
          </div>
          <div className="wallet-address">
            <span className="address-label">Dirección:</span>
            <span className="address-value">{formatAddress(walletAddress)}</span>
          </div>
          <button 
            className="btn-secondary" 
            onClick={disconnectWallet}
            style={{ marginTop: 16 }}
          >
            Desconectar
          </button>
        </div>
      )}
    </div>
  );
}
