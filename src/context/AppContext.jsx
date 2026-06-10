import { useState, createContext } from "react";

export const AppContext = createContext();

export function AppProvider({children}) {
    const [loader, setLoader] = useState()

    return (
        <AppContext.Provider
            value={{
                loader,
                setLoader
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
