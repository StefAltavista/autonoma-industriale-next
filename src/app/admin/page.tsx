"use client";
import React, { useContext, useState } from "react";

import { GlobalContext } from "../../globalContext/context";
import Authorize from "../../components/admin/Authorize";
import useValidateAccess from "../../hooks/useValidateAccess";
import "./admin.css";

//modals
import ModalView from "../../components/ModalView";
import Mailinglist from "../../components/admin/Mailinglist";
import NewEvent from "../../components/admin/NewEvent";
import EditEvent from "../../components/admin/EditEvent";
import UploadToArchive from "../../components/admin/UploadToArchive";

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
                return <Mailinglist />;
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
                        <ModalView isOpen={!!toggle} closeModal={() => setToggle(null)}>
                            {openModal(toggle)}
                        </ModalView>
                    )}
                </>
            ) : null}
        </div>
    );
}
