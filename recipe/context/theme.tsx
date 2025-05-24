import { useContext, createContext, type PropsWithChildren, useState } from 'react';
import { useColorScheme } from 'nativewind';


const ThemeContext = createContext<{ colorScheme: string | undefined, toggleColorScheme: () => void }>({
    colorScheme: 'light',
    toggleColorScheme: () => null
});

export function useTheme() {
    const value = useContext(ThemeContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useThemes must be wrapped in a <ThemeProvider />');
        }
    }
    return value;
}

export function ThemeProvider({ children }: PropsWithChildren) {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <ThemeContext.Provider
            value={{ colorScheme, toggleColorScheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}