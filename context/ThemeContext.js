import { useState, createContext } from "react";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    // Ensure colorScheme is never null
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme() || "light");
    const theme = Colors[colorScheme] || Colors.light; // Prevent undefined errors

    return (
        <ThemeContext.Provider value={{ theme, colorScheme, setColorScheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
