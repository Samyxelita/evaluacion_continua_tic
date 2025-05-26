# App Next.js para Benchmark

Esta carpeta contiene la aplicación Next.js utilizada para las pruebas de rendimiento.

## Comandos útiles

- `npm install` — Instala dependencias.
- `npm run build` — Compila la app para producción.
- `npm start` — Inicia la app en modo producción.

## Docker

El `Dockerfile` permite construir y ejecutar la app en un contenedor. Incluye la herramienta `wrk` para pruebas de carga.

```sh
docker build -t nextjs-bench .
docker run -p 3000:3000 nextjs-bench
```