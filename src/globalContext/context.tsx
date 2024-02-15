"use client";
import React, { createContext, useReducer } from "react";
import globalReducer from "./reducer";

export type EventsDataType = {
    collaborators: string;
    created_at: string;
    end_date: string;
    end_time: string;
    evt_description: string;
    evt_location: string;
    evt_name: string;
    evt_poster: string;
    id: number;
    published: boolean;
    start_date: string;
    start_time: string;
};

const initialState = { userAccessToken: "", events: [] };

type InitialStateType = {
    userAccessToken: string;
    events: EventsDataType[];
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
