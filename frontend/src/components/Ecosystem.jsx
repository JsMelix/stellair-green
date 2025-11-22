export default function Ecosystem() {
  const nodes = [
    { id: 1, icon: "🏪", title: "Emprendimientos", color: "#f59e0b", position: { top: "10%", left: "15%" } },
    { id: 2, icon: "</> ", title: "Desarrolladores", color: "#06b6d4", position: { top: "10%", left: "50%", transform: "translateX(-50%)" } },
    { id: 3, icon: "🛒", title: "Comercio electrónico", color: "#f59e0b", position: { top: "10%", right: "15%" } },
    { id: 4, icon: "👥", title: "Comunidad", color: "#06b6d4", position: { bottom: "10%", right: "15%" } },
    { id: 5, icon: "⛓️", title: "Blockchain", color: "#06b6d4", position: { bottom: "10%", left: "50%", transform: "translateX(-50%)" } },
    { id: 6, icon: "💳", title: "Wallet", color: "#06b6d4", position: { bottom: "10%", left: "15%" } }
  ];

  return (
    <section style={{ marginTop: 64 }}>
      <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 48 }}>
        Ecosistema API Market3W
      </h2>
      
      <div className="ecosystem-container">
        {/* Central API Hub */}
        <div className="api-hub">
          <div className="api-box">
            <div style={{ fontSize: 48, fontWeight: "bold", color: "#fff" }}>API</div>
            <div style={{ fontSize: 18, color: "#dbeafe", marginTop: 8 }}>MARKET3W</div>
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="connection-lines" viewBox="0 0 600 400" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <line x1="300" y1="200" x2="150" y2="80" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="300" y1="200" x2="300" y2="80" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="300" y1="200" x2="450" y2="80" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="300" y1="200" x2="150" y2="320" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="300" y1="200" x2="300" y2="320" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="300" y1="200" x2="450" y2="320" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          
          {/* Connection dots */}
          <circle cx="300" cy="200" r="4" fill="#06b6d4" />
          <circle cx="150" cy="80" r="4" fill="#06b6d4" />
          <circle cx="300" cy="80" r="4" fill="#06b6d4" />
          <circle cx="450" cy="80" r="4" fill="#06b6d4" />
          <circle cx="150" cy="320" r="4" fill="#06b6d4" />
          <circle cx="300" cy="320" r="4" fill="#06b6d4" />
          <circle cx="450" cy="320" r="4" fill="#06b6d4" />
        </svg>

        {/* Ecosystem Nodes */}
        {nodes.map((node) => (
          <div key={node.id} className="ecosystem-node" style={node.position}>
            <div className="node-circle" style={{ borderColor: node.color }}>
              <span style={{ fontSize: 40 }}>{node.icon}</span>
            </div>
            <div className="node-title">{node.title}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, textAlign: "center", color: "#94a3b8" }}>
        <p>Una API centralizada que conecta todos los componentes del ecosistema blockchain</p>
      </div>
    </section>
  );
}
