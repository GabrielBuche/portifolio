import { createContext, useContext, useState, useEffect } from "react";
import { themeColor } from './ThemeColor';
import { colorProps } from "../../type";

type ThemeType = {
  toggleTheme: () => void;
  theme: colorProps;
}

export const ThemeContext = createContext<ThemeType>({} as ThemeType);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
    try {
      const storedTheme = localStorage.getItem("@theme");
      return storedTheme !== null ? JSON.parse(storedTheme) : false;
    } catch (error) {
      console.error("Erro ao obter o tema do localStorage:", error);
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("@theme", JSON.stringify(isLightTheme));
    } catch (error) {
      console.error("Erro ao salvar o tema no localStorage:", error);
    }
  }, [isLightTheme]);

  function toggleTheme() {
    setIsLightTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme: isLightTheme ? themeColor.lightTheme : themeColor.darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
