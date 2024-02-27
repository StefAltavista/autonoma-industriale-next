"use client";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import MailinglistView from "./MailinglistView";
import MailinglistExportList from "@/utils/MailinglistExportList";

export type MailinglistResponseType = {
    created_at: string;
    email: string;
    id: number;
};
export default function Mailinglist() {
    const [mailinglist, setMailinglist] = useState<MailinglistResponseType[]>();
    const [otherErr, setOtherErr] = useState(false);

    useEffect(() => {
        axios.post("/api/mailinglist/getlist").then((response) => {
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
                    something went wrong retrieveing the mailinglist from the
                    database
                </p>
            )}

            {mailinglist && (
                <div>
                    <div onClick={() => MailinglistExportList(mailinglist)}>
                        Export List
                    </div>{" "}
                    <MailinglistView mailinglist={mailinglist} />
                </div>
            )}
        </div>
    );
}
