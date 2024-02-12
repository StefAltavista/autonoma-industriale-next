import Link from "next/link";
import "./menu.css";

export default function Menu() {
    return (
        <div id="menu">
            <Link href="/events">Events</Link>
            <Link href="/label">Label</Link>
            <Link href="/archive">Archive</Link>
            <Link href="/about">About</Link>
            <Link href="/links">Links</Link>
        </div>
    );
}
