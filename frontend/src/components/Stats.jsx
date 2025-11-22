import { useState, useEffect } from 'react';

export default function Stats() {
  const [stats, setStats] = useState({
    projects: 0,
    transactions: 0,
    users: 0,
    volume: 0
  });

  useEffect(() => {
    // Simular actualización de estadísticas en tiempo real
    const interval = setInterval(() => {
      setStats(prev => ({
        projects: Math.min(prev.projects + Math.floor(Math.random() * 3), 150),
        transactions: Math.min(prev.transactions + Math.floor(Math.random() * 5), 1250),
        users: Math.min(prev.users + Math.floor(Math.random() * 2), 450),
        volume: Math.min(prev.volume + Math.floor(Math.random() * 100), 50000)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    { label: 'Proyectos Activos', value: stats.projects, icon: '🏪', suffix: '' },
    { label: 'Transacciones', value: stats.transactions, icon: '💳', suffix: '' },
    { label: 'Usuarios', value: stats.users, icon: '👥', suffix: '' },
    { label: 'Volumen (XLM)', value: stats.volume.toLocaleString(), icon: '💰', suffix: '' }
  ];

  return (
    <section style={{ marginTop: 64 }}>
      <h2 style={{ textAlign: 'center', fontSize: 32, marginBottom: 48 }}>
        Estadísticas en Tiempo Real
      </h2>
      
      <div className="stats-grid">
        {statItems.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}{stat.suffix}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
