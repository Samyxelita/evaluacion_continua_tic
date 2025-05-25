# 📦 Benchmarking Next.js App: Docker vs Virtual Machine

This project compares the performance of a simple Next.js app when deployed using Docker vs directly on a Virtual Machine.

## 🧱 Structure
- `notebooks/`: Jupyter notebook to record and compare metrics
- `scripts/`: Setup scripts for VM and Docker
- `app/`: Placeholder for your Next.js app with Docker setup
- `results/`: Raw metrics collected (RAM, CPU, build time, etc.)

## ⚙️ Requirements
- Docker (for Docker tests)
- VirtualBox or native Linux VM
- Python 3.8+
- sysbench, jupyter, psutil, curl

## 🚀 Quick Start

```bash
# Setup VM
cd scripts
bash vm_setup.sh

# OR setup Docker host
bash docker_setup.sh
```

## 📊 Metrics to Compare
- Startup time (`docker compose up` vs `npm start`)
- Build time (`npm run build`)
- RAM/CPU usage (`top`, `psutil`, `docker stats`)
- Time to first byte (using curl)
