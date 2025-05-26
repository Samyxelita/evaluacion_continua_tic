import psutil
import time
import argparse

parser = argparse.ArgumentParser(description="Monitor de recursos del sistema")
parser.add_argument("--duration", type=int, default=60, help="Duración en segundos")
parser.add_argument("--output", type=str, default="../results/resource_usage.csv", help="Archivo de salida")
args = parser.parse_args()

with open(args.output, "w") as f:
    f.write("timestamp,cpu_percent,mem_percent\n")
    for _ in range(args.duration):
        cpu = psutil.cpu_percent(interval=1)
        mem = psutil.virtual_memory().percent
        ts = time.time()
        f.write(f"{ts},{cpu},{mem}\n")