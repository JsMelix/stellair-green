# 🚀 Instrucciones de Despliegue - Market3W

## ✅ Contrato Compilado

El contrato ya está compilado en:
```
artifacts/market3w_contract.wasm
```

## 📋 Opciones para Desplegar

### Opción 1: Usar Stellar Laboratory (Más Fácil)

1. **Ve a Stellar Laboratory:**
   https://laboratory.stellar.org/

2. **Cambia a Testnet:**
   - En la esquina superior derecha, selecciona "Test"

3. **Sube el contrato:**
   - Ve a "Build Transaction" > "Upload Contract WASM"
   - Sube `artifacts/market3w_contract.wasm`
   - Firma con tu cuenta de testnet

### Opción 2: Instalar Stellar CLI (Windows con MSVC)

```bash
# Cambiar a toolchain MSVC
rustup default stable-x86_64-pc-windows-msvc

# Instalar VS Build Tools primero
# https://aka.ms/vs/17/release/vs_BuildTools.exe

# Luego instalar Stellar CLI
cargo install --locked stellar-cli
```

### Opción 3: Usar Docker

```bash
# Construir imagen con Stellar CLI
docker run --rm -it \
  -v ${PWD}:/workspace \
  stellar/quickstart:testing \
  /bin/bash

# Dentro del container:
stellar contract deploy \
  --wasm /workspace/artifacts/market3w_contract.wasm \
  --network testnet
```

### Opción 4: Descargar Stellar CLI Pre-compilado

1. **Descarga desde GitHub Releases:**
   https://github.com/stellar/stellar-cli/releases

2. **Extrae y agrega al PATH**

3. **Verifica:**
   ```bash
   stellar --version
   ```

## 🔑 Configurar Identidad

Una vez tengas Stellar CLI:

```bash
# Generar identidad
stellar keys generate deployer --network testnet

# Ver dirección
stellar keys address deployer

# Obtener fondos de testnet
stellar keys fund deployer --network testnet
```

## 🚀 Desplegar

```bash
# Desplegar el contrato
stellar contract deploy \
  --wasm artifacts/market3w_contract.wasm \
  --source deployer \
  --network testnet

# Guarda el CONTRACT_ID que te devuelve
# Ejemplo: CBGTG7RNMQXIWOQT3NKWQGZPKFJWZQPQXMEZCXNE2XFXMR6HFZPFNAUT
```

## 🔗 Actualizar Frontend

Una vez desplegado, actualiza el CONTRACT_ID:

1. **Abre:** `frontend/src/hooks/useStellarContract.js`

2. **Agrega al inicio:**
   ```javascript
   const CONTRACT_ID = 'TU_CONTRACT_ID_AQUI';
   ```

3. **Implementa las funciones reales** (ejemplo):
   ```javascript
   import * as StellarSdk from 'stellar-sdk';
   
   const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
   
   export function useStellarContract() {
     const setProject = async (id, owner, name, description) => {
       // Implementar con stellar-sdk
       const contract = new StellarSdk.Contract(CONTRACT_ID);
       // ... llamada al contrato
     };
     
     // ... resto de funciones
   }
   ```

## 🧪 Probar el Contrato

```bash
# Crear un proyecto
stellar contract invoke \
  --id $CONTRACT_ID \
  --source deployer \
  --network testnet \
  -- \
  set_project \
  --id 1 \
  --owner $(stellar keys address deployer) \
  --name "TestProject" \
  --description "My first project"

# Obtener proyecto
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

# Ver contador
stellar contract invoke \
  --id $CONTRACT_ID \
  --network testnet \
  -- \
  get_count \
  --key_id "visits"
```

## 📱 Usar desde el Frontend

1. **Conecta Freighter Wallet** en http://localhost:5176/
2. **Asegúrate de estar en Testnet**
3. **Usa los formularios** para interactuar con el contrato

## 🎯 Estado Actual

- ✅ Contrato compilado: `artifacts/market3w_contract.wasm`
- ✅ Frontend funcional con simulación
- ⏳ Pendiente: Desplegar en testnet
- ⏳ Pendiente: Actualizar CONTRACT_ID en frontend

## 💡 Mientras Tanto

El frontend ya funciona completamente con datos simulados. Puedes:
- Desarrollar más features
- Mejorar la UI
- Agregar más componentes
- Probar la experiencia de usuario

Una vez despliegues el contrato, solo necesitas actualizar el CONTRACT_ID y las funciones en `useStellarContract.js`.

## 🆘 Ayuda

Si tienes problemas:
1. Verifica que estés en Testnet
2. Asegúrate de tener fondos: `stellar keys fund deployer --network testnet`
3. Revisa los logs de error
4. Consulta: https://developers.stellar.org/docs

---

**Próximo paso:** Desplegar el contrato usando una de las opciones anteriores.
