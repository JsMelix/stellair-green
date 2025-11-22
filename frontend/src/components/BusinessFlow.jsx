import { useState } from "react";

export default function BusinessFlow() {
  const [activeStep, setActiveStep] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Registra tu Negocio",
      description: "Crea tu perfil de emprendedor en la blockchain",
      icon: "📝",
      action: "Registrar",
      details: "Completa tu perfil con información de tu negocio, verifica tu identidad y obtén tu ID único en la blockchain."
    },
    {
      id: 2,
      title: "Publica Productos",
      description: "Agrega tus productos o servicios al marketplace",
      icon: "📦",
      action: "Publicar",
      details: "Sube fotos, establece precios en XLM o tokens personalizados, y gestiona tu inventario de forma descentralizada."
    },
    {
      id: 3,
      title: "Recibe Pagos",
      description: "Acepta pagos en criptomonedas de forma segura",
      icon: "💰",
      action: "Configurar",
      details: "Configura tu wallet para recibir pagos instantáneos con comisiones mínimas y sin intermediarios."
    },
    {
      id: 4,
      title: "Gestiona Ventas",
      description: "Administra pedidos y transacciones en tiempo real",
      icon: "📊",
      action: "Ver Dashboard",
      details: "Monitorea tus ventas, analiza métricas y gestiona pedidos desde un panel de control intuitivo."
    }
  ];

  const handleStepClick = (step) => {
    setSelectedStep(step);
    setShowModal(true);
  };

  return (
    <section style={{ marginTop: 64 }}>
      <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 16 }}>
        Flujo para Emprendedores
      </h2>
      <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: 48 }}>
        Inicia tu negocio en blockchain en 4 simples pasos
      </p>

      <div className="business-flow-grid">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`business-card ${activeStep === step.id ? "active" : ""}`}
            onMouseEnter={() => setActiveStep(step.id)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
            <button 
              className="step-action-btn"
              onClick={() => handleStepClick(step)}
            >
              {step.action}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedStep && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <div className="modal-icon">{selectedStep.icon}</div>
            <h3 className="modal-title">{selectedStep.title}</h3>
            <p className="modal-description">{selectedStep.details}</p>
            <button className="btn-primary" onClick={() => setShowModal(false)}>
              Comenzar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
