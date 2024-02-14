import React from "react";
import Link from "next/link";

export default function Contacts() {
    return (
        <div id="links">
            <div className="linkTreeContainer">
                <Link href="/mailinglist" className="link">
                    <p className="pLink">Subscibe to our Mailing List</p>
                </Link>
                <a
                    href="https://autonomaindustriale.bandcamp.com/"
                    target="_blank"
                    className="link"
                >
                    <p className="pLink">Bandcamp</p>
                </a>
                <a
                    href="https://soundcloud.com/autonoma-industriale"
                    target="_blank"
                    className="link"
                >
                    <p className="pLink">Soundcloud</p>
                </a>
                <a
                    href="https://soundcloud.com/autonoma-industriale/sets/mix-series"
                    target="_blank"
                    className="link"
                >
                    <p className="pLink">Mix Series</p>
                </a>
                <a
                    href="https://www.youtube.com/channel/UC_MYMo3Qpq7HZzDt0rz_d3Q"
                    target="_blank"
                    className="link"
                >
                    <p className="pLink">Youtube</p>
                </a>
                <a
                    href="https://www.facebook.com/AutonomaIndustriale"
                    target="_blank"
                    className="link"
                >
                    <p className="pLink">Facebook</p>
                </a>
                <a
                    href="https://www.instagram.com/autonoma.industriale/?hl=it"
                    target="_blank"
                    className="link"
                >
                    <p className="pLink">Instagram</p>
                </a>
                <p>
                    Feel free to contact us via mail for any inquiry, we will
                    answer as soon as possible, no answer means no interest.
                </p>
            </div>
        </div>
    );
}
