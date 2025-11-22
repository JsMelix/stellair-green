# Configuración de Wallet Stellar

## Instalación de Freighter Wallet

Freighter es la wallet oficial para Stellar que permite interactuar con contratos inteligentes Soroban.

### Pasos de instalación:

1. **Instalar la extensión del navegador:**
   - Chrome/Brave: https://chrome.google.com/webstore/detail/freighter/bcacfldlkkdogcmkkibnjlakofdplcbk
   - Firefox: https://addons.mozilla.org/en-US/firefox/addon/freighter/
   - Edge: Usa la Chrome Web Store

2. **Configurar tu wallet:**
   - Abre la extensión Freighter
   - Crea una nueva wallet o importa una existente
   - Guarda tu frase de recuperación en un lugar seguro

3. **Cambiar a Testnet:**
   - Abre Freighter
   - Ve a Settings (⚙️)
   - Selecciona "Testnet" en Network
   - Esto te permitirá probar sin usar fondos reales

4. **Obtener XLM de prueba:**
   - Visita: https://laboratory.stellar.org/#account-creator?network=test
   - Pega tu dirección pública de Freighter
   - Haz clic en "Get test network lumens"

## Uso en Market3W

Una vez instalado Freighter:

1. Haz clic en "Conectar Freighter Wallet" en la aplicación
2. Autoriza la conexión en el popup de Freighter
3. Tu dirección aparecerá en la interfaz
4. Ya puedes interactuar con los contratos Soroban

## Stellar CLI (Opcional para desarrolladores)

Si quieres usar Stellar CLI para desarrollo:

```bash
# Instalar Stellar CLI
cargo install --locked stellar-cli --features opt

# Generar una identidad
stellar keys generate alice --network testnet

# Ver tu dirección
stellar keys address alice

# Obtener fondos de testnet
stellar keys fund alice --network testnet
```

## Recursos

- Freighter Docs: https://docs.freighter.app/
- Stellar Docs: https://developers.stellar.org/
- Soroban Docs: https://soroban.stellar.org/
