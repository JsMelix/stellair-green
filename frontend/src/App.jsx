import { useState } from 'react';
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import BusinessFlow from "./components/BusinessFlow";
import WalletConnect from "./components/WalletConnect";
import ContractInteraction from "./components/ContractInteraction";
import Stats from "./components/Stats";
import Features from "./components/Features";

export default function App(){
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <div className="min-h-screen bg-gradient">
      <div className="container">
        <Hero />
        <WalletConnect 
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
        />
        <Stats />
        <Ecosystem />
        <ContractInteraction walletAddress={walletAddress} />
        <Features />
        <BusinessFlow />
        <section style={{marginTop:64, paddingBottom: 48}}>
          <h2>Integración con Horizon Testnet</h2>
          <p>Conecta con https://horizon-testnet.stellar.org para operaciones off-chain y despliegue de contratos Soroban.</p>
          <div style={{ marginTop: 24, padding: 20, background: 'rgba(6, 182, 212, 0.05)', borderRadius: 12, border: '1px solid rgba(6, 182, 212, 0.2)' }}>
            <h3 style={{ fontSize: 18, marginBottom: 12 }}>🚀 Próximos Pasos</h3>
            <ul style={{ color: '#94a3b8', lineHeight: 2 }}>
              <li>Compila el contrato: <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: 4 }}>cd contract && cargo build --release</code></li>
              <li>Despliega en testnet usando Stellar CLI</li>
              <li>Actualiza el CONTRACT_ID en el frontend</li>
              <li>Conecta tu Freighter wallet y prueba las funciones</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
