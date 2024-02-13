"use client";
import React from "react";

export default function NewEventInputs({
    handleInput,
    handleImage,
}: {
    handleInput: (e: any) => void;
    handleImage: (img: File) => void;
}) {
    const fields = [
        "evt_name",
        "start_date",
        "start_time",
        "end_date",
        "end_time",
        "evt_location",
        "evt_description",
        "collaborators",
    ];

    return (
        <div className="inputs">
            {fields.map((x, i) => {
                return x != "evt_description" ? (
                    <div className="eventInput" key={i}>
                        <p>{x}</p>
                        <input
                            type="text"
                            name={x}
                            onChange={handleInput}
                        ></input>
                    </div>
                ) : (
                    <div className="eventInput" key={i}>
                        <p>{x}</p>
                        <textarea name={x} onChange={handleInput}></textarea>
                    </div>
                );
            })}

            <div className="eventInput">
                <p>Poster</p>
                <input
                    type="file"
                    name="evt_poster"
                    onChange={(e) => {
                        if (!e.target.files) return;
                        handleImage(e.target.files[0]);
                    }}
                />
            </div>
            <div className="eventInput">
                <p>Public</p>
                <input type="radio" name="published" onChange={handleInput} />
            </div>
        </div>
    );
}
