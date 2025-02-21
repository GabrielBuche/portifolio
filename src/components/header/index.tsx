import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineTranslate, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<HeaderProps> = () => {
  // Estado para controlar o dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    // Alterna a classe "dark" no elemento root (html)
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Handler para ação de tradução (implemente sua lógica)
  const handleTranslate = () => {
    console.log("Acionar tradução");
    // Aqui você pode chamar uma função para alterar o idioma da sua aplicação
  };

  return (
    <header className="dark:bg-stone-950 bg-white flex h-16 shadow-2xl drop-shadow-md p-4 items-center">
      <div className="flex-1">
        <p className="text-white text-2xl">Portifolio</p>
      </div>

      <nav className="w-1/2 flex justify-end items-center space-x-6">
        <a href="#about" className="text-white text-xl hover:text-gray-300 transition-colors">
          Sobre
        </a>
        <a href="#projects" className="text-white text-xl hover:text-gray-300 transition-colors">
          Projetos
        </a>
        <a href="#contact" className="text-white text-xl hover:text-gray-300 transition-colors">
          Contato
        </a>
        <a
          href="https://github.com/seuusuario"  // substitua pelo seu URL
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub className="text-white text-xl hover:text-gray-300 transition-colors" />
        </a>

        <button onClick={handleTranslate} title="Traduzir">
          <MdOutlineTranslate className="text-white text-xl hover:text-gray-300 transition-colors" />
        </button>

        <button onClick={toggleDarkMode} title="Alternar Modo Escuro">
          {darkMode ? (
            <MdOutlineLightMode className="text-white text-xl hover:text-gray-300 transition-colors" />
          ) : (
            <MdOutlineDarkMode className="text-white text-xl hover:text-gray-300 transition-colors" />
          )}
        </button>

      </nav>
    </header>
  );
};

export default Header;
