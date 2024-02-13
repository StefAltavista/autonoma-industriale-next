import { useState } from "react";

export const useStatefulFields = (): [{}, (e: any) => void] => {
    const [values, setValues] = useState({});

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    return [values, handleChange];
};
