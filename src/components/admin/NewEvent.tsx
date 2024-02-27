"use client";
import React, { useState } from "react";
import "./newEvent.css";
import axios from "../../utils/axios";

import readImage from "../../utils/readImage";
import uploadImage from "../../utils/uploadImage";
import NewEventInputs from "./NewEventInputs";
import Image from "next/image";

export default function NewEvent() {
    const [error, setError] = useState<boolean>();
    const [poster, setPoster] = useState<ArrayBuffer | null | string>();
    const [imgFile, setImgFile] = useState<File>();

    // const [poster, setPoster] = useState(
    //     "images/default_image.png"
    // );

    const [eventData, setEventData] = useState({
        evt_name: "",
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        evt_location: "",
        evt_description: "",
        evt_poster: "",
        collaborators: "",
        published: false,
    });
    const handleInput = (e: any): void => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleImage = async (img: File): Promise<void> => {
        let preview: ArrayBuffer | null | string = await readImage(img);
        setPoster(preview);
        setImgFile(img);
    };

    const submit = async () => {
        const evt_poster: string = await uploadImage(imgFile);

        setEventData({ ...eventData, evt_poster });

        axios
            .post("/api/newevent", { ...eventData, evt_poster })
            .then(({ data }) => {
                if (!data.success) {
                    setError(true);
                } else {
                    location.reload();
                }
            })
            .catch((err) => {
                setError(err);
            });

        console.log(eventData);
    };

    return (
        <div id="newEventModal">
            <h3>{eventData.evt_name || "New Event"}</h3>
            <div id="newEventForm">
                <NewEventInputs
                    handleInput={(e: any) => handleInput(e)}
                    handleImage={(img: File) => handleImage(img)}
                />

                <div id="posterPreview">
                    {poster && (
                        <Image
                            src={poster.toString()}
                            alt="event"
                            width={1200}
                            height={1200}
                        />
                    )}
                </div>
            </div>

            <button onClick={submit}>Submit</button>
        </div>
    );
}
