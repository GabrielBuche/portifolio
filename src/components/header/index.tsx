import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { DarkModeToggle } from "../darkModeTogleButton";
import { TranslateTogleButton } from "../translateTogleButton";
import { useTranslation } from "react-i18next";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();
  return (
    <header className="dark:bg-stone-950 bg-white flex h-16 shadow-2xl drop-shadow-md p-4 items-center">
      <div className="flex-1">
        <p className="dark:text-white text-neutral-900 text-2xl">{t("portfolio")}</p>
      </div>

      <nav className="w-1/2 flex justify-end items-center space-x-6">
        <a href="#about" className="dark:text-white text-neutral-900  dark:hover:text-gray-400 hover:text-neutral-500 transition-colors">
          {t("about")}
        </a>
        <a href="#projects" className="dark:text-white text-neutral-900   dark:hover:text-gray-400 hover:text-neutral-500 transition-colors">
         
          {t("projects")}
        </a>
        <a href="#contact" className="dark:text-white text-neutral-900  dark:hover:text-gray-400 hover:text-neutral-500 transition-colors">
          {t("contact")}  
        </a>

        <TranslateTogleButton />

        <DarkModeToggle />

        <a
          href="https://github.com/GabrielBuche/portifolio" 
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub className="dark:text-white text-neutral-900 text-xl dark:hover:text-gray-400 hover:text-neutral-500  transition-colors" />
        </a>

      </nav>
    </header>
  );
};

export default Header;
