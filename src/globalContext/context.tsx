import React, { ReactNode, createContext, useReducer } from "react";
import globalReducer from "./reducer";

const initialState = {};
export const GlobalContext = createContext(initialState);
const Provider = GlobalContext.Provider;

export function GlobalProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [globalState, dispatch] = useReducer(globalReducer, initialState);

    return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
}
