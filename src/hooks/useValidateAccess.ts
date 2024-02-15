"use client";
import { useContext, useEffect, useState } from "react";
import axios from "../utils/axios";
import { GlobalContext } from "../globalContext/context";

export default function useValidateAccess() {
    const { dispatch } = useContext(GlobalContext);
    const [access, setAccess] = useState<boolean>();
    useEffect(() => {
        axios
            .get("api/validate")
            .then(({ data }) => {
                if (data.token) {
                    data.token
                        ? dispatch({ type: "LOG_IN", payload: data.token })
                        : null;
                    setAccess(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [access];
}
