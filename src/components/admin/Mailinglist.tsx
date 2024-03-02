"use client";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import MailinglistView from "../admin/MailinglistView";
import MailinglistExport from "./MailinglistExport";
import MailinglistImport from "./MailinglistImport";
import "./mailinglist.css";

export type MailinglistResponseType = {
    created_at: string;
    email: string;
    id: number;
};

export default function Mailinglist() {
    const [mailinglist, setMailinglist] = useState<MailinglistResponseType[]>();
    const [axiosError, setAxiosError] = useState(false);
    const [error, setError] = useState(false);
    const [action, setAction] = useState("");
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        axios.post("/api/mailinglist/getlist").then((response) => {
            if (response.status != 200) {
                setAxiosError(true);
            } else {
                const data: MailinglistResponseType[] = response.data;
                console.log("Mailinglist response:", response);
                setMailinglist(data);
            }
        });
    }, [refresh]);

    const exportFile = async () => {
        if (mailinglist) {
            const f = await MailinglistExport(mailinglist);
            f ? setFile(f) : null;
            setAction("export");
        }
    };

    return (
        <div id="mailinglist">
            {axiosError && (
                <p className="error">
                    something went wrong retrieveing the mailinglist from the
                    database
                </p>
            )}
            {loading && <div>LOADING</div>}

            {mailinglist && (
                <div className="mailinglistActions">
                    <div onClick={() => setAction("view")} className="tools">
                        View List
                    </div>
                    <div onClick={exportFile} className="tools">
                        Export List
                    </div>
                    <div onClick={() => setAction("import")} className="tools">
                        Import List
                    </div>
                    <div onClick={() => setAction("fix")} className="tools">
                        Fix List
                    </div>
                </div>
            )}
            {mailinglist && (
                <div id="manageMailinlistBody">
                    {action == "view" ? (
                        <MailinglistView mailinglist={mailinglist} />
                    ) : null}
                    {action == "export" ? (
                        <a href={file} download="mailinglist.txt">
                            Download Mailinglist
                        </a>
                    ) : null}
                    {action == "import" ? (
                        <MailinglistImport
                            refresh={() => setRefresh(refresh + 1)}
                        />
                    ) : null}
                    {action == "fix" ? (
                        <MailinglistView mailinglist={mailinglist} />
                    ) : null}
                </div>
            )}
        </div>
    );
}
