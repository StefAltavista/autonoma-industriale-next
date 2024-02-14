"use client";
import React from "react";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";
import Link from "next/link";

export default function Subscribe() {
    const [values, handleChange] = useStatefulFields();
    const [thanks, isVisib, error, handleClick] = useAuthSubmit(
        "api/subscribe",
        values
    );

    return (
        <div>
            <div className="content">
                {error && (
                    <p className="error">
                        Something went wrong, please try again
                    </p>
                )}
                <input
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
                <button onClick={handleClick}>Submit</button>
            </div>

            {thanks && <h2 className="seeya">See you soon</h2>}
            <Link href="/unsubscribe">
                <p className="unsubscribe">Unsubscribe</p>
            </Link>
        </div>
    );
}
