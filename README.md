# Benchmark Next.js: Docker vs VM

# 🖥️ Tecnologías de la Información - Proyecto

## Samuel Herrera

---

## 1. Introducción

Una **máquina virtual (VM)** emula un sistema operativo completo y corre sobre un hipervisor como **VirtualBox**. Por otro lado, **Docker** es una tecnología de contenedores que permite ejecutar aplicaciones de forma más ligera, compartiendo el kernel del sistema host.

Ambas tecnologías son útiles para virtualización, pero tienen diferencias clave en rendimiento, uso de recursos y portabilidad. Este proyecto compara ambas en un entorno controlado.

🔗 Repositorio: [https://github.com/Samyxelita/Proyecto_tic](https://github.com/Samyxelita/Proyecto_tic)

Se adjuntan un archivo `.sh` y un `Dockerfile` para levantar ambas aplicaciones respectivamente.

---

## 2. Configuración del entorno de prueba

### 🖥️ Host

- **Sistema operativo**: Windows 11  
- **RAM**: 16 GB  
- **Procesador**: Ryzen 7 / AMD equivalente  
- **Disco**: SSD  

### 💾 VM (VirtualBox)

- **Sistema**: Ubuntu 22.04  
- **RAM asignada**: 4 GB  
- **Núcleos**: 4  
- **App instalada**: Next.js  

### 🐳 Docker

- **Imagen base**: `node:alpine`  
- **Contenedor con la misma app que la VM (Next.js)**

---

## 3. Métricas y herramientas utilizadas

| Métrica                    | Herramienta                     |
|---------------------------|----------------------------------|
| Uso de CPU y RAM          | `htop`, `top`, `docker stats`   |
| Uso de disco              | `du -sh`, `df -h`               |
| Tiempo de arranque        | `time`, `systemd-analyze`       |
| Pruebas de rendimiento CPU| `sysbench`, `stress-ng`         |
| Pruebas de disco          | `fio`, `dd`                     |
| Velocidad de red          | `iperf3`                        |
| Latencia y rendimiento app| `ab`, `wrk`                     |

---

## 📊 Resultados de prueba simulados

### 🔧 Uso de recursos en reposo

| Métrica       | VM     | Docker |
|---------------|--------|--------|
| RAM usada     | 100 MB | 30 MB  |
| CPU (idle)    | 2%     | 1%     |
| Disco usado   | 500 MB | 100 MB |

### 📈 Gráficos

- Docker consume menos RAM, CPU y disco.
- Docker arranca mucho más rápido.
- Docker tiene mejor rendimiento (más requests por segundo y menor latencia).

---

## 🕸️ Gráfico araña

### Interpretación del gráfico radar: VM vs Docker

| Métrica                | Resultado    | Interpretación |
|------------------------|--------------|----------------|
| CPU                   | Docker > VM  | Menor sobrecarga en Docker |
| Uso de memoria        | Docker > VM  | Docker no necesita SO completo |
| Disco                 | Docker > VM  | Acceso más rápido al disco |
| Tiempo de inicio      | Docker >> VM | Docker inicia en segundos |
| Latencia de la app    | Docker > VM  | Menor latencia bajo carga |

---

## 🚀 Rendimiento bajo carga con `wrk`

**Comando de prueba (en la VM):**

```bash
wrk -t4 -c100 -d10s http://localhost:3000



Este proyecto compara el rendimiento de una aplicación Next.js ejecutada en Docker y en una Máquina Virtual (VM) usando pruebas de carga (`wrk`) y monitoreo de recursos (`psutil`).

## Estructura

- **app/**: Código fuente de la app Next.js y Dockerfile.
- **scripts/**: Scripts para benchmarking y monitoreo.
- **notebooks/**: Análisis y visualización de resultados.
- **results/**: Resultados generados por los benchmarks.

## ¿Cómo ejecutar los benchmarks?

1. **Instala dependencias** en tu VM y/o contenedor:
   - Python 3 y `psutil`
   - `wrk`

2. **Arranca la app Next.js**:
   - En VM:  
     ```sh
     cd app
     npm install
     npm run build
     npm start
     ```
   - En Docker:  
     ```sh
     cd app
     docker build -t nextjs-bench .
     docker run -p 3000:3000 nextjs-bench
     ```

3. **Ejecuta el benchmark**:
   ```sh
   cd scripts
   bash benchmark.sh
   ```

4. **Analiza los resultados**:
   - Abre el notebook en `notebooks/` para visualizar y comparar.

## Recomendaciones

- Ejecuta los benchmarks en condiciones similares (misma máquina física, sin otros procesos intensivos).
- Guarda los resultados de cada entorno con nombres distintos para comparar fácilmente.

---