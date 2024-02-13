"use client";
import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

type MailinglistResponseType = {
    created_at: string;
    email: string;
    id: number;
};
export default function MailinglistView() {
    const [mailinglist, setMailinglist] = useState<MailinglistResponseType[]>();
    const [otherErr, setOtherErr] = useState(false);

    useEffect(() => {
        axios.post("/api/mailinglist").then((response) => {
            if (response.status != 200) {
                setOtherErr(true);
            } else {
                const data: MailinglistResponseType[] = response.data;
                console.log("Mailinglist response:", response);
                setMailinglist(data);
            }
        });
    }, []);

    return (
        <div id="mailinglist">
            {otherErr && (
                <p className="error">
                    Fuck, something went wrong, call Luca please
                </p>
            )}
            {mailinglist && (
                <div className="resultsContainer">
                    <h3 className="mailingList">Mailing List</h3>
                    <p className="total">[ Total: {mailinglist.length} ]</p>
                    {mailinglist.map((email, idx) => {
                        return (
                            <div key={idx} className="email">
                                <p className="email">
                                    <strong>{email.email}</strong>
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
