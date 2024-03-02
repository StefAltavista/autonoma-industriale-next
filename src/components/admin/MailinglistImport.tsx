"use client";
import { useState } from "react";
import axios from "../../utils/axios";
interface ReportInterface {
    success: string[];
    fail: string[];
}
export default function MailinglistImport({
    refresh,
}: {
    refresh: () => void;
}) {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [report, setReport] = useState<ReportInterface>({
        success: [],
        fail: [],
    });

    const submit = async () => {
        const mailinglist = value.split("\n");
        mailinglist.map((x, index) =>
            x == "" ? mailinglist.splice(index, 1) : null
        );
        await axios
            .post("/api/mailinglist/addlist", { mailinglist })
            .then(({ data }) => {
                !data.success ? setError(true) : setSuccess(true);
                setReport(data.report);
                refresh();
            });
    };

    return (
        <div id="mailinglistImport">
            {!success ? (
                <div>
                    <textarea
                        placeholder="add list of email addresses"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    ></textarea>
                    <button onClick={submit}> Submit</button>
                </div>
            ) : (
                <div>
                    Success: <p>Report: {JSON.stringify(report, null, "\t")}</p>
                </div>
            )}
            {error && (
                <div>
                    ERROR: <p>Report{JSON.stringify(report, null, 2)}</p>
                </div>
            )}
        </div>
    );
}
