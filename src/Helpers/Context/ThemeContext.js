import { useState, createContext, useContext } from "react";

const ThemeModeContext = createContext();

const ThemeModeProvider = ({children}) => {

    const [themeMode, setThemeMode] = useState("light");
    
    return(
        <ThemeModeContext.Provider value={{themeMode, setThemeMode}}>
            {children}
        </ThemeModeContext.Provider>
    )

}

const useThemeMode = () => useContext(ThemeModeContext);

export { useThemeMode, ThemeModeProvider}; 
