import Link from "next/link";
import "./menu.css";

export default function Menu({ closeMenu }: { closeMenu: () => void; }) {
    return (
        <div id="menu">
            <Link href="/events">
                <div onClick={closeMenu}>Events</div>
            </Link>
            <Link href="/label">
                <div onClick={closeMenu}>Label</div>
            </Link>
            <Link href="/mix-series">
                <div onClick={closeMenu}>Mix Series</div>
            </Link>
            <Link href="/about">
                <div onClick={closeMenu}>About</div>
            </Link>
            <Link href="/contacts">
                <div onClick={closeMenu}>Contacs</div>
            </Link>
        </div>
    );
}
