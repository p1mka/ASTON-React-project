import { createContext, useState, useContext, useMemo } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [headerColor, setHeaderColor] = useState("#fff");

    const contextValue = useMemo(
        () => ({
            headerColor,
            changeHeaderColor: () => {
                headerColor === "#fff"
                    ? setHeaderColor("#a05282")
                    : setHeaderColor("#fff");
            },
        }),
        [headerColor]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
