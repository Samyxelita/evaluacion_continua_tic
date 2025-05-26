# Scripts de Benchmark y Monitoreo

Esta carpeta contiene scripts para automatizar las pruebas de carga y el monitoreo de recursos.

- `benchmark.sh`: Ejecuta el benchmark con `wrk` y lanza el monitor de recursos.
- `monitor.py`: Registra el uso de CPU y memoria durante el benchmark.

## Uso

```sh
bash benchmark.sh
```

Los resultados se guardan en la carpeta `../results/`.