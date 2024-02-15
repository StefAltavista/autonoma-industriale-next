import Link from "next/link";
import "./home.css";
import Image from "next/image";

export default function Home() {
    return (
        <div id="home">
            <ul>
                <li className="homeLi ">
                    <Link href="comingsoon">Coming Soon</Link>
                </li>
                <li className="homeLi">
                    <Link href="/events">Events</Link>
                </li>
                <li className="homeLi">
                    <Link href="/label">Releases</Link>
                </li>
                <li className="homeLi">
                    <Link href="/links">Links</Link>
                </li>
                <li className="homeLi">
                    <Link href="mailinglist">Mailinglist</Link>
                </li>
                <li className="homeLi">
                    <Link href="contact">Contact us</Link>
                </li>
            </ul>
        </div>
    );
}
