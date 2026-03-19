import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Al montar el componente, revisamos si el fondo está en modo oscuro
    const isDarkNow = document.documentElement.classList.contains('dark') || 
                      (!document.documentElement.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkNow);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none shadow-inner border border-black/10 dark:border-white/10 ${
        isDark ? 'bg-indigo-600' : 'bg-gray-200'
      }`}
      aria-label="Alternar modo oscuro"
      role="switch"
      aria-checked={isDark}
    >
      <span className="sr-only">Cambiar apariencia</span>
      <span
        className={`inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-800 ${
          isDark ? 'translate-x-8' : 'translate-x-1'
        }`}
      >
        {isDark ? (
          // ICONO DE LUNA (Modo Oscuro)
          <svg 
            className="w-3.5 h-3.5 text-indigo-900" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          // ICONO DE SOL (Modo Claro)
          <svg 
            className="w-3.5 h-3.5 text-yellow-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </span>
    </button>
  );
}
