import { useState } from 'react';
import { useStellarContract } from '../hooks/useStellarContract';

export default function ContractInteraction({ walletAddress }) {
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [searchId, setSearchId] = useState('');
  const [projectResult, setProjectResult] = useState(null);
  const [counter, setCounter] = useState(0);
  
  const { setProject, getProject, increment, getCount, loading, error } = useStellarContract();

  const handleCreateProject = async (e) => {
    e.preventDefault();
    
    if (!walletAddress) {
      alert('Por favor conecta tu wallet primero');
      return;
    }

    const result = await setProject(
      parseInt(projectId),
      walletAddress,
      projectName,
      projectDescription
    );

    if (result.success) {
      alert(`Proyecto ${projectId} creado exitosamente!`);
      setProjectId('');
      setProjectName('');
      setProjectDescription('');
    }
  };

  const handleSearchProject = async (e) => {
    e.preventDefault();
    const result = await getProject(parseInt(searchId));
    setProjectResult(result);
  };

  const handleIncrement = async () => {
    const newCount = await increment('visits');
    setCounter(newCount);
  };

  const handleGetCount = async () => {
    const count = await getCount('visits');
    setCounter(count);
  };

  return (
    <section style={{ marginTop: 64 }}>
      <h2 style={{ textAlign: 'center', fontSize: 32, marginBottom: 16 }}>
        Interactúa con el Contrato
      </h2>
      <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: 48 }}>
        {walletAddress ? 'Prueba las funciones del contrato inteligente' : 'Conecta tu wallet para comenzar'}
      </p>

      <div className="contract-grid">
        {/* Crear Proyecto */}
        <div className="contract-card">
          <h3 className="contract-card-title">📝 Crear Proyecto</h3>
          <form onSubmit={handleCreateProject}>
            <input
              type="number"
              placeholder="ID del proyecto"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              className="contract-input"
              required
            />
            <input
              type="text"
              placeholder="Nombre del proyecto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="contract-input"
              required
            />
            <textarea
              placeholder="Descripción"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="contract-input"
              rows="3"
              required
            />
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={loading || !walletAddress}
              style={{ width: '100%' }}
            >
              {loading ? 'Creando...' : 'Crear Proyecto'}
            </button>
          </form>
        </div>

        {/* Buscar Proyecto */}
        <div className="contract-card">
          <h3 className="contract-card-title">🔍 Buscar Proyecto</h3>
          <form onSubmit={handleSearchProject}>
            <input
              type="number"
              placeholder="ID del proyecto"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="contract-input"
              required
            />
            <button 
              type="submit" 
              className="btn-secondary" 
              disabled={loading}
              style={{ width: '100%' }}
            >
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </form>
          
          {projectResult && (
            <div className="result-box">
              <p><strong>Nombre:</strong> {projectResult.name}</p>
              <p><strong>Descripción:</strong> {projectResult.description}</p>
            </div>
          )}
          
          {projectResult === null && searchId && !loading && (
            <div className="result-box error">
              <p>Proyecto no encontrado</p>
            </div>
          )}
        </div>

        {/* Contador */}
        <div className="contract-card">
          <h3 className="contract-card-title">📊 Contador de Visitas</h3>
          <div className="counter-display">
            <div className="counter-value">{counter}</div>
            <div className="counter-label">visitas</div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button 
              onClick={handleIncrement} 
              className="btn-primary"
              disabled={loading}
              style={{ flex: 1 }}
            >
              Incrementar
            </button>
            <button 
              onClick={handleGetCount} 
              className="btn-secondary"
              disabled={loading}
              style={{ flex: 1 }}
            >
              Obtener
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message" style={{ marginTop: 24, textAlign: 'center' }}>
          Error: {error}
        </div>
      )}

      <div style={{ marginTop: 32, padding: 16, background: 'rgba(6, 182, 212, 0.1)', borderRadius: 8, border: '1px solid rgba(6, 182, 212, 0.3)' }}>
        <p style={{ fontSize: 14, color: '#94a3b8', margin: 0 }}>
          💡 <strong>Nota:</strong> Esta es una demostración con datos simulados. Para usar el contrato real, necesitas compilarlo y desplegarlo en Stellar Testnet.
        </p>
      </div>
    </section>
  );
}
