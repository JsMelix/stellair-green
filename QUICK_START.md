# 🚀 Quick Start Guide - Market3W

## Inicio Rápido (5 minutos)

### 1. Frontend (Desarrollo)

```bash
cd frontend
npm install
npm run dev
```

✅ Abre http://localhost:5173

### 2. Probar la Interfaz

1. **Sin Wallet**: Puedes explorar la interfaz completa
2. **Con Freighter**: 
   - Instala Freighter desde [freighter.app](https://freighter.app)
   - Configura en Testnet
   - Haz clic en "Conectar Freighter Wallet"
3. **Interactuar**: Prueba crear proyectos y usar contadores (datos simulados)

## Compilar Contrato (Opcional)

### Windows

```bash
# 1. Instalar Visual Studio Build Tools
# Descarga: https://aka.ms/vs/17/release/vs_BuildTools.exe
# Selecciona: "Desktop development with C++"

# 2. Instalar Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 3. Agregar target
rustup target add wasm32-unknown-unknown

# 4. Compilar
cd contract
cargo build --target wasm32-unknown-unknown --release
```

### Linux/Mac

```bash
# 1. Instalar Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 2. Agregar target
rustup target add wasm32-unknown-unknown

# 3. Compilar
cd contract
cargo build --target wasm32-unknown-unknown --release
```

## Desplegar en Testnet (Avanzado)

```bash
# 1. Instalar Stellar CLI
cargo install --locked stellar-cli --features opt

# 2. Crear identidad
stellar keys generate deployer --network testnet

# 3. Obtener fondos
stellar keys fund deployer --network testnet

# 4. Desplegar
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/market3w_contract.wasm \
  --source deployer \
  --network testnet

# 5. Guardar el CONTRACT_ID que te devuelve
```

## Comandos Útiles

### Frontend

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Contrato

```bash
# Compilar
cargo build --target wasm32-unknown-unknown --release

# Verificar
cargo check

# Tests (si existen)
cargo test

# Limpiar
cargo clean
```

### Stellar CLI

```bash
# Ver identidades
stellar keys list

# Ver balance
stellar keys address deployer

# Invocar función del contrato
stellar contract invoke \
  --id CONTRACT_ID \
  --source deployer \
  --network testnet \
  -- \
  FUNCTION_NAME \
  --arg1 value1

# Ejemplos:
# Crear proyecto
stellar contract invoke --id $CONTRACT_ID --source deployer --network testnet -- set_project --id 1 --owner $(stellar keys address deployer) --name "Test" --description "Demo"

# Obtener proyecto
stellar contract invoke --id $CONTRACT_ID --network testnet -- get_project --id 1

# Incrementar contador
stellar contract invoke --id $CONTRACT_ID --source deployer --network testnet -- increment --key_id "visits"

# Ver contador
stellar contract invoke --id $CONTRACT_ID --network testnet -- get_count --key_id "visits"
```

## Estructura de Archivos Importantes

```
market3w/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx              # Presentación
│   │   │   ├── WalletConnect.jsx     # Conexión wallet
│   │   │   ├── Stats.jsx             # Estadísticas
│   │   │   ├── Ecosystem.jsx         # Diagrama
│   │   │   ├── ContractInteraction.jsx  # Interacción
│   │   │   ├── Features.jsx          # Características
│   │   │   └── BusinessFlow.jsx      # Flujo emprendedores
│   │   ├── hooks/
│   │   │   └── useStellarContract.js # Hook del contrato
│   │   ├── App.jsx                   # Componente principal
│   │   └── styles.css                # Estilos globales
│   └── package.json
├── contract/
│   ├── src/
│   │   └── lib.rs                    # Lógica del contrato
│   └── Cargo.toml                    # Dependencias
├── CONTRACT_BUILD.md                 # Guía detallada
├── QUICK_START.md                    # Esta guía
└── README.md                         # Documentación completa
```

## Próximos Pasos

1. ✅ **Explora el Frontend**: Navega por todas las secciones
2. ✅ **Conecta Freighter**: Prueba la conexión de wallet
3. ✅ **Interactúa**: Usa los formularios de interacción
4. 🔧 **Compila el Contrato**: Sigue la guía de compilación
5. 🚀 **Despliega en Testnet**: Usa Stellar CLI
6. 🔗 **Integra**: Actualiza el CONTRACT_ID en el frontend

## Solución de Problemas Comunes

### Puerto en uso
```bash
# Vite intentará automáticamente otro puerto
# O especifica uno manualmente:
npm run dev -- --port 3000
```

### Freighter no detectado
1. Verifica que esté instalado
2. Recarga la página (F5)
3. Revisa la consola del navegador (F12)

### Error de compilación Rust
```bash
# Limpia y recompila
cargo clean
cargo build --target wasm32-unknown-unknown --release
```

### Fondos insuficientes en Testnet
```bash
# Obtén más XLM de prueba
stellar keys fund deployer --network testnet
```

## Recursos Adicionales

- 📖 [README.md](README.md) - Documentación completa
- 🔨 [CONTRACT_BUILD.md](CONTRACT_BUILD.md) - Guía de compilación
- 💼 [WALLET_SETUP.md](frontend/WALLET_SETUP.md) - Configuración de wallets
- 🌐 [Stellar Docs](https://developers.stellar.org/)
- 📚 [Soroban Docs](https://soroban.stellar.org/)

---

**¿Necesitas ayuda?** Revisa la documentación o abre un issue en el repositorio.
