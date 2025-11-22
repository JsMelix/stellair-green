export default function Hero(){
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24, marginBottom: 48}}>
      <div style={{flex: 1}}>
        <h1 style={{fontSize:48,lineHeight:1.1, margin:0, background: 'linear-gradient(90deg, #06b6d4, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
          Market3W API
        </h1>
        <p style={{marginTop:16,color:'#cfefff', fontSize: 18, lineHeight: 1.6}}>
          Plataforma modular para emprendimientos, wallets y desarrolladores — integrada con Stellar + Soroban.
        </p>
        <div style={{marginTop:24, display: 'flex', gap: 12}}>
          <button className="btn-secondary">Explorar contratos</button>
          <button className="btn-secondary">Documentación API</button>
        </div>
      </div>
    </div>
  );
}
