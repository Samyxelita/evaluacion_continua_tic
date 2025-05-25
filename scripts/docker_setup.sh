#!/bin/bash
echo "🐳 Setting up Docker for benchmarking Next.js app..."
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3 python3-pip sysbench git curl procps
pip3 install --upgrade pip
pip3 install jupyter matplotlib psutil
echo "✅ Docker/WSL2 setup complete!"
echo "➡️ To start Jupyter: jupyter notebook --ip=0.0.0.0 --port=8888 --no-browser"
