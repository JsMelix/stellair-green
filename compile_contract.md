# 🔨 Guía de Compilación del Contrato

## ⚠️ Problema Actual

Tu sistema Windows necesita **Visual Studio Build Tools** para compilar el contrato Soroban.

## ✅ Solución 1: Instalar Visual Studio Build Tools (Recomendado)

### Pasos:

1. **Descarga Visual Studio Build Tools:**
   - Link directo: https://aka.ms/vs/17/release/vs_BuildTools.exe
   - O desde: https://visualstudio.microsoft.com/downloads/

2. **Durante la instalación:**
   - Selecciona: **"Desktop development with C++"**
   - Esto instalará el compilador MSVC y link.exe

3. **Reinicia tu terminal** después de la instalación

4. **Compila el contrato:**
   ```bash
   cd contract
   cargo build --target wasm32-unknown-unknown --release
   ```

5. **El archivo WASM estará en:**
   ```
   contract/target/wasm32-unknown-unknown/release/market3w_contract.wasm
   ```

## 🐳 Solución 2: Usar Docker (Alternativa)

Si no quieres instalar Visual Studio, usa Docker:

```bash
# Construir imagen
docker build -t market3w-builder .

# Compilar contrato
docker run --rm -v ${PWD}:/workspace market3w-builder

# El WASM estará en artifacts/
```

## 🌐 Solución 3: Usar GitHub Actions (Sin compilar localmente)

El proyecto ya tiene CI configurado. Cada push a GitHub compilará automáticamente:

1. Sube el código a GitHub
2. Ve a la pestaña "Actions"
3. Descarga el artifact `market3w_contract.wasm`

## 🚀 Solución 4: Usar un Contrato Pre-compilado

Para desarrollo rápido, puedes usar un contrato ya desplegado en testnet:

```bash
# Ejemplo de contrato de prueba (reemplaza con uno real)
export CONTRACT_ID="CBGTG..."

# Probar funciones
stellar contract invoke \
  --id $CONTRACT_ID \
  --network testnet \
  -- \
  get_count \
  --key_id "visits"
```

## 📝 Verificar Instalación

Después de instalar VS Build Tools, verifica:

```bash
# Verificar que link.exe está disponible
where link.exe

# Debería mostrar algo como:
# C:\Program Files\Microsoft Visual Studio\...\link.exe
```

## 🔄 Compilar Después de Instalar

```bash
# Limpiar builds anteriores
cd contract
cargo clean

# Compilar
cargo build --target wasm32-unknown-unknown --release

# Verificar el archivo
ls target/wasm32-unknown-unknown/release/market3w_contract.wasm
```

## 📦 Optimizar el WASM (Opcional)

```bash
# Instalar stellar-cli si no lo tienes
cargo install --locked stellar-cli --features opt

# Optimizar
stellar contract optimize \
  --wasm target/wasm32-unknown-unknown/release/market3w_contract.wasm

# Esto creará un archivo optimizado más pequeño
```

## 🎯 Próximos Pasos Después de Compilar

1. **Desplegar en Testnet:**
   ```bash
   stellar contract deploy \
     --wasm target/wasm32-unknown-unknown/release/market3w_contract.wasm \
     --source deployer \
     --network testnet
   ```

2. **Actualizar el Frontend:**
   - Copia el CONTRACT_ID que te devuelve
   - Actualiza `frontend/src/hooks/useStellarContract.js`
   - Reemplaza las funciones simuladas con llamadas reales

3. **Probar:**
   - Conecta Freighter wallet
   - Interactúa con el contrato desde la UI

## 💡 Mientras Tanto...

El frontend ya está completamente funcional con **datos simulados**. Puedes:

- ✅ Probar toda la interfaz
- ✅ Conectar Freighter wallet
- ✅ Ver cómo funcionan las interacciones
- ✅ Desarrollar más features

La simulación te permite desarrollar sin esperar la compilación del contrato.

## 🆘 Ayuda Adicional

Si tienes problemas:

1. Verifica que Rust esté actualizado: `rustup update`
2. Verifica el target: `rustup target list --installed`
3. Revisa los logs de error completos
4. Consulta: https://soroban.stellar.org/docs

---

**Nota:** La compilación requiere ~2-3 GB de espacio y puede tomar 5-10 minutos la primera vez.
