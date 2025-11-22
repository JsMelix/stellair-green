FROM rust:1.72-slim

RUN apt-get update && apt-get install -y build-essential curl git pkg-config libssl-dev

# Install soroban-cli (optional)
RUN cargo install --locked soroban-cli || true

WORKDIR /work
COPY . /work
RUN rustup target add wasm32-unknown-unknown || true

CMD ["bash", "build.sh"]
