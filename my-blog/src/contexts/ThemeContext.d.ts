type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};
export declare const ThemeProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
