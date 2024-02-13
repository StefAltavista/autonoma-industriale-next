"use client";
import React, { useContext, useState } from "react";

import { GlobalContext } from "../../globalContext/context";
import Authorize from "../../components/Authorize";
import useValidateAccess from "../../hooks/useValidateAccess";
import "./admin.css";

//modals
import ModalView from "../../components/ModalView";
import MailinglistView from "../../components/MailinglistView";
import NewEvent from "../../components/NewEvent";
import EditEvent from "../../components/EditEvent";
import AddToLabel from "../../components/AddToLabel";
import UploadToArchive from "../../components/UploadToArchive";

export default function Admin() {
    const [access] = useValidateAccess();
    const { globalState } = useContext(GlobalContext);
    const [toggle, setToggle] = useState<number | null>();

    const tools = [
        "MAILING LIST",
        "NEW EVENT",
        "EDIT EVENT",
        "ADD TO LABEL",
        "UPLOAD TO ARCHIVE",
    ];

    const openModal = (i: number) => {
        switch (i) {
            case 1:
                return <MailinglistView />;
            case 2:
                return <NewEvent />;
            case 3:
                return <EditEvent />;
            case 4:
                return <UploadToArchive />;
        }
    };

    return (
        <div id="admin">
            {!access && !globalState.userAccessToken && <Authorize />}
            {access || globalState.userAccessToken ? (
                <>
                    <div id="adminMenu">
                        {tools.map((x, i) => (
                            <div
                                className="tools"
                                onClick={() => setToggle(i + 1)}
                                key={i}
                            >
                                <strong>{x}</strong>
                            </div>
                        ))}
                    </div>
                    {toggle && (
                        <ModalView closeModal={() => setToggle(null)}>
                            {openModal(toggle)}
                        </ModalView>
                    )}
                </>
            ) : null}
        </div>
    );
}
