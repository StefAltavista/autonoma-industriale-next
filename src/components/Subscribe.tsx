"use client";
// import React from "react";
import { useAuthSubmit } from "../hooks/useAuthSubmit";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [thanks, isVisib, error, handleClick] = useAuthSubmit(
    "api/mailinglist/subscribe",
    { email },
  );

  return (
    <div>
      {!thanks && (
        <div>
          {error && (
            <p className="error">Something went wrong, please try again</p>
          )}
          <div className="flex flex-row">
            <input
              name="email"
              placeholder="e-mail address"
              value={thanks ? "" : email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button onClick={handleClick}>Submit</button>
        </div>
      )}

      {thanks && <h2 className="seeya">See you soon</h2>}
      {/* <Link href="/unsubscribe">
                <p className="unsubscribe">Unsubscribe</p>
            </Link> */}
    </div>
  );
}
