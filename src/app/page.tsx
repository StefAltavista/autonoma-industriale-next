import Link from "next/link";
import "./home.css";

export default function Home() {
    return (
        <div id="home">
            <ul>
                <li className="homeLi ">
                    <Link href="comingsoon">
                        <p>Coming Soon</p>
                    </Link>
                </li>
                <li className="homeLi">
                    <Link href="/events">
                        <p>Events</p>
                    </Link>
                </li>
                <li className="homeLi">
                    <Link href="/label">
                        <p>Releases</p>
                    </Link>
                </li>
                <li className="homeLi">
                    <Link href="/links">
                        <p>Links</p>
                    </Link>
                </li>
                <li className="homeLi">
                    <Link href="mailinglist">
                        <p>Mailinglist</p>
                    </Link>
                </li>
                <li className="homeLi">
                    <Link href="contact">
                        <p>Contact us</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
