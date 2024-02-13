"use client";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

import "./events.css";
import Image from "next/image";

interface ResponseData {
    collaborators: string;
    created_at: string;
    end_date: string;
    end_time: string;
    evt_description: string;
    evt_location: string;
    evt_name: string;
    evt_poster: string;
    id: number;
    published: boolean;
    start_date: string;
    start_time: string;
}

export default function Events() {
    const [eventList, setEventlist] = useState<ResponseData[]>();

    const default_image = "images/default_image.png";

    useEffect(() => {
        axios.get("/api/events").then((response) => {
            console.log("AXIOS response", response);
            if (response.status != 200) {
                console.log("AXIOS ERROR");
            } else {
                const data: ResponseData[] = response.data.reverse();
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
                          <div key={id} id="eventPreview">
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
        </div>
    );
}
