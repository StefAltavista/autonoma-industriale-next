"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import UseFetchEvents from "@/hooks/useFetchEvents";
import { GlobalContext, EventsDataType } from "@/globalContext/context";
import "./eventPage.css";

type eventPageParams = {
    params: { id: string };
};

export default function EventPage({ params }: eventPageParams) {
    const start_date = params.id;
    const [event, setEvent] = useState<EventsDataType>();
    const [notFound, setNotFound] = useState<boolean>(false);
    const { globalState } = useContext(GlobalContext);

    useEffect(() => {
        if (!globalState.events[0]) {
            console.log("fetching events");
            UseFetchEvents().then(
                ({
                    error,
                    data,
                }: {
                    error: string | null;
                    data: EventsDataType[] | null;
                }) => {
                    if (error) {
                        console.log("deal with it");
                    } else if (data) {
                        const evt = data.find(
                            (x) => x.start_date == start_date
                        );
                        evt ? setEvent(evt) : setNotFound(true);
                    }
                }
            );
        } else {
            const evt = globalState.events.find(
                (x) => x.start_date == start_date
            );
            evt ? setEvent(evt) : setNotFound(true);
        }
    }, []);

    return (
        <>
            {event ? (
                <div id="eventPage">
                    <Image
                        src={`https://softwarenoise.com/public/images/${event.evt_poster}`}
                        alt="event poster"
                        width={1000}
                        height={1000}
                    />

                    <div id="eventInfo">
                        <h3>
                            <span>{event.evt_name}</span>
                        </h3>
                        <p>
                            <span>{event.start_date}</span>
                        </p>
                        <p>
                            <span>{event.evt_location}</span>
                        </p>
                        <p>
                            <span>{event.evt_description}</span>
                        </p>
                    </div>
                </div>
            ) : (
                <div id="eventNotFound">Event not Found</div>
            )}
        </>
    );
}
