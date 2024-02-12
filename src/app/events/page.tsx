"use client";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { AxiosResponse } from "axios";
import "./events.css";
import Image from "next/image";

// import EventModal from "./EventModal";
// import ModalView from "./ModalView";

interface ResponseData {
    data: { success: boolean; data: [] };
}

export default function Events() {
    const [eventList, setEventlist] = useState();
    const [eventView, setEventView] = useState(false);
    const default_image = "images/default_image.png";

    useEffect(() => {
        axios.get<AxiosResponse>("/api/events").then((response) => {
            console.log("AXIOS response", response);
            if (response.status == 200) {
                console.log("AXIOS ERROR");
            } else {
                const { data } = response;
                data.reverse();
                setEventlist(data);
            }
        });
    }, []);

    return (
        <div id="events">
            {eventList
                ? eventList.map((x, id) => {
                      console.log("image:", x);
                      return (
                          <div key={id}>
                              <Image
                                  src={`https://softwarenoise.com/public/images/${x.evt_poster}`}
                                  alt="poster"
                                  width={1000}
                                  height={1000}
                              />
                              <h3>{x.evt_name}</h3>
                          </div>
                      );
                  })
                : null}
            {/* {eventView && (
                <ModalView closeModal={() => setEventView(false)}>
                    <EventModal event={eventView} />
                </ModalView>
            )} */}
        </div>
    );
}
