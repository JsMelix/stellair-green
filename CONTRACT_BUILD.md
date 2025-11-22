# Compilación del Contrato Soroban

## Requisitos Previos

### 1. Instalar Rust y herramientas de compilación

**En Windows:**
- Instala Visual Studio Build Tools desde: https://visualstudio.microsoft.com/downloads/
- Durante la instalación, selecciona "Desktop development with C++"
- O instala solo las Build Tools: https://aka.ms/vs/17/release/vs_BuildTools.exe

**Después de instalar VS Build Tools:**
```bash
# Instalar Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Agregar target wasm32
rustup target add wasm32-unknown-unknown
```

### 2. Instalar Stellar CLI

```bash
cargo install --locked stellar-cli --features opt
```

## Compilar el Contrato

```bash
# Navegar a la carpeta del contrato
cd contract

# Compilar
cargo build --target wasm32-unknown-unknown --release

# El archivo WASM estará en:
# target/wasm32-unknown-unknown/release/market3w_contract.wasm
```

## Optimizar el Contrato (Opcional)

```bash
# Instalar stellar-cli si no lo tienes
cargo install --locked stellar-cli

# Optimizar el WASM
stellar contract optimize --wasm target/wasm32-unknown-unknown/release/market3w_contract.wasm
```

## Desplegar en Testnet

### 1. Configurar identidad

```bash
# Generar una nueva identidad
stellar keys generate deployer --network testnet

# Ver tu dirección
stellar keys address deployer

# Obtener fondos de testnet
stellar keys fund deployer --network testnet
```

### 2. Desplegar el contrato

```bash
# Desplegar
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/market3w_contract.wasm \
  --source deployer \
  --network testnet

# Esto te dará un CONTRACT_ID, guárdalo
```

### 3. Probar el contrato

```bash
# Establecer variable con el ID del contrato
export CONTRACT_ID="TU_CONTRACT_ID_AQUI"

# Crear un proyecto
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

# Obtener un proyecto
stellar contract invoke \
  --id $CONTRACT_ID \
  --network testnet \
  -- \
  get_project \
  --id 1

# Incrementar contador
stellar contract invoke \
  --id $CONTRACT_ID \
  --source deployer \
  --network testnet \
  -- \
  increment \
  --key_id "visits"

# Obtener contador
stellar contract invoke \
  --id $CONTRACT_ID \
  --network testnet \
  -- \
  get_count \
  --key_id "visits"
```

## Integrar con el Frontend

Una vez desplegado, actualiza el archivo `frontend/src/hooks/useStellarContract.js` con:

1. El CONTRACT_ID real
2. Implementación usando stellar-sdk en lugar de simulación

```javascript
import * as StellarSdk from 'stellar-sdk';

const CONTRACT_ID = 'TU_CONTRACT_ID_AQUI';
const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');

// Implementar las funciones reales del contrato
```

## Troubleshooting

### Error: linker `link.exe` not found
- Instala Visual Studio Build Tools con C++ support

### Error: failed to select a version for soroban-sdk
- Verifica que estás usando una versión compatible en Cargo.toml

### Error: insufficient balance
- Obtén más fondos de testnet: `stellar keys fund deployer --network testnet`

## Recursos

- Soroban Docs: https://soroban.stellar.org/docs
- Stellar CLI: https://developers.stellar.org/docs/tools/developer-tools/cli
- Freighter Wallet: https://freighter.app
