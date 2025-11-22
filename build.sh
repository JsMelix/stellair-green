#!/usr/bin/env bash
set -euo pipefail
echo "[build.sh] Starting build..."

# Add wasm target
rustup target add wasm32-unknown-unknown || true

# Build contract
echo "[build.sh] Building Rust contract (wasm target)"
cd contract
cargo build --release --target wasm32-unknown-unknown

# locate wasm
WASM=$(find target -type f -name "*.wasm" | head -n1)
if [ -z "$WASM" ]; then
  echo "No .wasm found. Build may have failed."
  exit 1
fi
mkdir -p ../artifacts
cp "$WASM" ../artifacts/market3w_contract.wasm
echo "[build.sh] Wasm placed at artifacts/market3w_contract.wasm"

echo "[build.sh] Done. To deploy run (example):"
echo "  soroban contract deploy --wasm artifacts/market3w_contract.wasm --network https://horizon-testnet.stellar.org --source <YOUR_KEYPAIR>"
