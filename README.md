# ChainSense 🧭
> Understand the blockchain, not just read it.

ChainSense visualizes wallet interactions, token flows, and smart-contract activity as dynamic graphs.  
It helps researchers and builders *see* blockchain behavior instead of scanning block explorers.

## 🧠 Roadmap
- [ ] Live transaction streaming
- [ ] Wallet clustering by behavior
- [ ] Smart-contract pattern recognition

## 🚀 Features
- Graph-based visualization of on-chain relationships  
- REST API powered by **FastAPI**  
- Frontend built with **D3.js**  
- Support for Ethereum, Mina, and Solana data sources  

## 🧩 Tech Stack
Python · FastAPI · D3.js · SQLite · WebSockets

## 🛠️ Quick Start
```bash
git clone https://github.com/calvinjones883/chainsense.git
cd chainsense
pip install -r requirements.txt
uvicorn backend.main:app --reload
