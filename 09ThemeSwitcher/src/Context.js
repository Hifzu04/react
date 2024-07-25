import { createContext, useContext } from "react";

//create the context
export const themeContext = createContext({
    ThemeMode : "light",
    DarkTheme : () => {},
    lightTheme : () => {}
})

//provide the context
export const ThemeProvider = themeContext.Provider;

//use the context
export default function useTheme() {
    return useContext(themeContext);
}
