#!/bin/bash
echo "🚀 Setting up VM for benchmarking Next.js app..."
sudo apt update && sudo apt upgrade -y
sudo apt install -y nodejs npm sysbench python3 python3-pip git curl procps
pip3 install --upgrade pip
pip3 install jupyter matplotlib psutil
npm install -g npm
echo "✅ Setup complete! You can now clone your Next.js app and run metrics."
echo "➡️ To start Jupyter: jupyter notebook"
