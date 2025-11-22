# 🌟 Market3W - Complete Project

Plataforma modular para emprendimientos, wallets y desarrolladores — integrada con Stellar + Soroban.

## 📦 Contenido del Proyecto

- `contract/` - Contrato Soroban en Rust (gestión de proyectos + contador)
- `frontend/` - Aplicación React (Vite) con diseño futurista e interactivo
- `build.sh` - Script para compilar contrato a WASM
- `Dockerfile` - Imagen base para reproducir compilación
- `.github/workflows/ci.yml` - CI para build del contrato
- `artifacts/` - Directorio para archivos .wasm compilados

## 🚀 Características

### Contrato Inteligente
- ✅ Gestión de proyectos (crear, obtener)
- ✅ Sistema de contadores
- ✅ Autenticación de propietarios
- ✅ Almacenamiento persistente

### Frontend Interactivo
- ✅ Conexión con Freighter Wallet
- ✅ Interacción con contratos Soroban
- ✅ Estadísticas en tiempo real
- ✅ Diagrama del ecosistema API
- ✅ Flujo para emprendedores con modales
- ✅ Dashboard de características
- ✅ Diseño responsive

## 🛠️ Instalación y Uso

### Requisitos Previos

**Para el Contrato:**
- Rust (con target wasm32-unknown-unknown)
- Stellar CLI (opcional para deploy)
- Visual Studio Build Tools (Windows)

**Para el Frontend:**
- Node.js 18+
- npm o yarn

### Compilar el Contrato

```bash
# 1. Instalar Rust y target wasm
rustup target add wasm32-unknown-unknown

# 2. (Opcional) Instalar Stellar CLI
cargo install --locked stellar-cli --features opt

# 3. Compilar
./build.sh
# O manualmente:
cd contract
cargo build --target wasm32-unknown-unknown --release
```

El archivo WASM estará en `target/wasm32-unknown-unknown/release/market3w_contract.wasm`

### Iniciar el Frontend

```bash
cd frontend
npm install
npm run dev
```

Abre http://localhost:5173 (o el puerto que indique Vite)

## 🌐 Deploy en Stellar Testnet

### 1. Configurar Identidad

```bash
# Generar identidad
stellar keys generate deployer --network testnet

# Ver dirección
stellar keys address deployer

# Obtener fondos de testnet
stellar keys fund deployer --network testnet
```

### 2. Desplegar Contrato

```bash
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/market3w_contract.wasm \
  --source deployer \
  --network testnet
```

Guarda el CONTRACT_ID que te devuelve.

### 3. Probar el Contrato

```bash
# Establecer variable
export CONTRACT_ID="TU_CONTRACT_ID_AQUI"

# Crear proyecto
stellar contract invoke \
  --id $CONTRACT_ID \
  --source deployer \
  --network testnet \
  -- \
  set_project \
  --id 1 \
  --owner $(stellar keys address deployer) \
  --name "MiTienda" \
  --description "Tienda Web3"

# Obtener proyecto
stellar contract invoke \
  --id $CONTRACT_ID \
  --network testnet \
  -- \
  get_project \
  --id 1
```

## 🎯 Funcionalidades del Contrato

### `set_project(id, owner, name, description)`
Crea o actualiza un proyecto en la blockchain. Requiere autenticación del propietario.

### `get_project(id) -> Option<Vec<String>>`
Obtiene información de un proyecto por ID. Retorna nombre y descripción.

### `increment(key_id) -> i128`
Incrementa un contador identificado por clave y retorna el nuevo valor.

### `get_count(key_id) -> i128`
Obtiene el valor actual de un contador.

## 🎨 Componentes del Frontend

| Componente | Descripción |
|------------|-------------|
| **Hero** | Presentación principal con gradientes |
| **WalletConnect** | Integración con Freighter Wallet |
| **Stats** | Estadísticas animadas en tiempo real |
| **Ecosystem** | Diagrama visual del ecosistema API |
| **ContractInteraction** | Interfaz para interactuar con el contrato |
| **Features** | Grid de características principales |
| **BusinessFlow** | Flujo de 4 pasos con modales interactivos |

## 🔗 Integración con Stellar

### Testnet Configuration
```
Horizon: https://horizon-testnet.stellar.org
Network Passphrase: Test SDF Network ; September 2015
```

### Freighter Wallet Setup
1. Instala desde [freighter.app](https://freighter.app)
2. Configura en modo Testnet
3. Obtén XLM de prueba en [Stellar Laboratory](https://laboratory.stellar.org/#account-creator?network=test)
4. Conecta en la aplicación Market3W

## 📚 Documentación Adicional

- [CONTRACT_BUILD.md](CONTRACT_BUILD.md) - Guía detallada de compilación
- [frontend/WALLET_SETUP.md](frontend/WALLET_SETUP.md) - Configuración de wallets

## 🔧 Troubleshooting

### Error: linker `link.exe` not found (Windows)
Instala Visual Studio Build Tools con soporte C++:
https://aka.ms/vs/17/release/vs_BuildTools.exe

### Error: Freighter not detected
1. Verifica que la extensión esté instalada
2. Recarga la página
3. Asegúrate de estar en Testnet

### Error: insufficient balance
Obtén más fondos: `stellar keys fund deployer --network testnet`

## 🤝 Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🌐 Recursos

- [Stellar Developers](https://developers.stellar.org/)
- [Soroban Documentation](https://soroban.stellar.org/)
- [Freighter Wallet](https://docs.freighter.app/)
- [Stellar Laboratory](https://laboratory.stellar.org/)

## 👥 Equipo Market3W

Construyendo el futuro del comercio descentralizado con tecnología blockchain.

---

**Estado del Proyecto**: 🟢 Activo | **Versión**: 0.1.0 | **Red**: Stellar Testnet
