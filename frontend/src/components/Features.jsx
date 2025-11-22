export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Seguridad Blockchain',
      description: 'Contratos inteligentes auditados en Stellar Soroban'
    },
    {
      icon: '⚡',
      title: 'Transacciones Rápidas',
      description: 'Confirmaciones en 3-5 segundos con bajas comisiones'
    },
    {
      icon: '🌐',
      title: 'API RESTful',
      description: 'Integración simple con documentación completa'
    },
    {
      icon: '💼',
      title: 'Multi-Moneda',
      description: 'Soporte para XLM y tokens personalizados'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Diseño responsive para todos los dispositivos'
    },
    {
      icon: '🔄',
      title: 'Actualizaciones en Tiempo Real',
      description: 'WebSockets para notificaciones instantáneas'
    }
  ];

  return (
    <section style={{ marginTop: 64 }}>
      <h2 style={{ textAlign: 'center', fontSize: 32, marginBottom: 16 }}>
        Características Principales
      </h2>
      <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: 48 }}>
        Todo lo que necesitas para construir tu negocio en blockchain
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
