# Benchmark Next.js: Docker vs VM

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