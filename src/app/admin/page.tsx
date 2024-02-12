"use client";
import React, { useContext, useState } from "react";

import { GlobalContext } from "../../globalContext/context";
import Authorize from "../../components/Authorize";
import useValidateAccess from "../../hooks/useValidateAccess";
import "./admin.css";

//modals
import ModalView from "../../components/ModalView";
import Mailinglist from "../../components/MailinglistView";
import NewEvent from "../../components/NewEvent";
import EditEvent from "../../components/EditEvent";
import AddToLabel from "../../components/AddToLabel";
import UploadToArchive from "../../components/UploadToArchive";

export default function Admin() {
    const [access] = useValidateAccess();
    const { globalState } = useContext(GlobalContext);
    const [toggle, setToggle] = useState(false);
    const tools = [
        "MAILING LIST",
        "NEW EVENT",
        "EDIT EVENT",
        "ADD TO LABEL",
        "UPLOAD TO ARCHIVE",
    ];
    const modals = [
        <Mailinglist key={"ml"} />,
        <NewEvent key={"ne"} />,
        <EditEvent key={"ee"} />,
        <AddToLabel key={"al"} />,
        <UploadToArchive key={"up"} />,
    ];
    const openModal = (i: any) => {
        setToggle(true);
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
                                onClick={() => openModal(i)}
                                key={i}
                            >
                                <strong>{x}</strong>
                            </div>
                        ))}
                    </div>
                    {toggle && (
                        <ModalView closeModal={() => setToggle(false)}>
                            {toggle}
                        </ModalView>
                    )}
                </>
            ) : null}
        </div>
    );
}
