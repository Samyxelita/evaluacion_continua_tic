'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Detectar modo del sistema por defecto
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleDark = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center transition-colors bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 w-[90%] max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Hola desde Next.js. Proyecto de Tic Samuel Herrera</h1>

        <div className="flex justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={count}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-5xl font-extrabold text-indigo-500 dark:text-indigo-300"
            >
              {count}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl transition"
          >
            Restar
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl transition"
          >
            Sumar
          </button>
        </div>

        <button
          onClick={toggleDark}
          className="mt-2 text-sm text-gray-500 dark:text-gray-300 hover:underline"
        >
          Cambiar a modo {darkMode ? 'claro' : 'oscuro'}
        </button>
      </div>
    </main>
  );
}
