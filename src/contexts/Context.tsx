import { createContext, useState, useEffect, ReactNode } from "react";
import {
  MAIN_LIGHT_CSS,
  MAIN_DARK_CSS,
  MD_LIGHT_CSS,
  MD_DARK_CSS,
} from "../components/Constants"; // 실제 위치에 맞게 경로 수정

type ContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const Context = createContext<ContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  // 로컬스토리지에서 다크모드 상태 불러오기
  const storedDarkMode = localStorage.getItem("isDarkMode");
  const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prev:boolean) => !prev);
  };

  // CSS 링크를 생성하고 추가하는 함수
  const createCSSLink = (id: string, href: string): HTMLLinkElement => {
    let link = document.getElementById(id) as HTMLLinkElement | null;
    if (link) document.head.removeChild(link);

    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);

    return link;
  };

  useEffect(() => {
    // 1. 전체 CSS Light <-> Dark Toggle
    const link1 = createCSSLink(
      "main-darkmode",
      isDarkMode ? MAIN_DARK_CSS : MAIN_LIGHT_CSS
    );

    // 2. Markdown Code Block Light <-> Dark Toggle
    const link2 = createCSSLink(
      "md-darkmode",
      isDarkMode ? MD_DARK_CSS : MD_LIGHT_CSS
    );

    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));

    return () => {
      if (link1 && document.head.contains(link1)) document.head.removeChild(link1);
      if (link2 && document.head.contains(link2)) document.head.removeChild(link2);
    };
  }, [isDarkMode]);

  const contextValue: ContextType = {
    isDarkMode,
    toggleTheme,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
