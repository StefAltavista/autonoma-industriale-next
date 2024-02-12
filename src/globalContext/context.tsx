"use client";
import React, { createContext, useReducer } from "react";
import globalReducer from "./reducer";

const initialState = { userAccessToken: "" };
type InitialStateType = {
    userAccessToken: string;
};
export const GlobalContext = createContext<{
    globalState: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    globalState: initialState,
    dispatch: () => null,
});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [globalState, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ globalState, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}
