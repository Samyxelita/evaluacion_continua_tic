#!/bin/bash

URL="http://localhost:3000"
DURATION=60s
CONNECTIONS=50
THREADS=4
MONITOR_DURATION=60

mkdir -p ../results

echo "Iniciando monitor de recursos..."
python monitor.py --duration $MONITOR_DURATION --output ../results/resource_usage.csv &

MONITOR_PID=$!

echo "Iniciando benchmark HTTP con wrk..."
wrk -t$THREADS -c$CONNECTIONS -d$DURATION $URL/ > ../results/wrk_result.txt

wait $MONITOR_PID

echo "Benchmark y monitoreo finalizados. Resultados en la carpeta results/"