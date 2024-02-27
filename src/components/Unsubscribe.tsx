"use client";
import { useAuthSubmit } from "../hooks/useAuthSubmit";
import { useState } from "react";

export default function Unsubscribe() {
    const [email, setEmail] = useState("");
    const [thanks, isVisib, error, handleClick] = useAuthSubmit(
        "api/mailinglist/unsubscribe",
        { email }
    );

    return (
        <div>
            <div className="app">
                {!thanks && (
                    <div className="content">
                        {error && (
                            <p className="error">
                                Looks like your email is not here: {error}
                            </p>
                        )}
                        <input
                            name="mail"
                            placeholder="Email"
                            value={thanks ? "" : email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleClick}>Unsubscribe</button>
                    </div>
                )}
                {thanks && <h2 className="seeya">GoodBye</h2>}
            </div>
        </div>
    );
}
