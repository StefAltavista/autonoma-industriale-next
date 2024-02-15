"use client";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext, EventsDataType } from "@/globalContext/context";

import UseFetchEvents from "@/hooks/useFetchEvents";

import "./events.css";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Events() {
    const [eventList, setEventlist] = useState<EventsDataType[]>();
    const { dispatch, globalState } = useContext(GlobalContext);

    // const default_image = "images/default_image.png";

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
                        dispatch({ type: "FETCH_EVENTS", payload: data });
                        setEventlist(data);
                    }
                }
            );
        } else setEventlist([...globalState.events]);
    }, []);

    return (
        <div id="events">
            {eventList
                ? eventList.map((x, id) => {
                      return (
                          <div key={id} id="eventPreview">
                              <div id="eventBackground">
                                  <Image
                                      src={`https://softwarenoise.com/public/images/${x.evt_poster}`}
                                      alt="event poster"
                                      width={1000}
                                      height={1000}
                                      className="eventBackgroundImage"
                                  />
                              </div>
                              <div id="event">
                                  <Link
                                      href={`/events/${x.start_date}`}
                                      className="eventPoster"
                                  >
                                      <Image
                                          src={`https://softwarenoise.com/public/images/${x.evt_poster}`}
                                          alt="event poster"
                                          width={1000}
                                          height={1000}
                                          className="eventPoster"
                                      />
                                  </Link>

                                  <div id="eventInfo">
                                      <h3>
                                          <span>{x.evt_name}</span>
                                      </h3>
                                      <p>
                                          <span>{x.start_date}</span>
                                      </p>
                                      <p>
                                          <span>{x.evt_location}</span>
                                      </p>
                                      <p>
                                          <span>{x.evt_description}</span>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : null}
        </div>
    );
}
