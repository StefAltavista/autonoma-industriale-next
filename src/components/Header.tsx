"use client";
import { useState } from "react";
import Link from "next/link";
import "./header.css";
import Menu from "./Menu";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const pathname = usePathname();
    console.log(pathname);

    const header =
        pathname != "/comingsoon" ? (
            <div id="header">
                <Link href="/">
                    <Image
                        src="/images/logoAutonoma.png"
                        alt="Logo"
                        width={150}
                        height={125}
                    />
                </Link>
                <h1 id="header-title"> AUTONOMA INDUSTRIALE</h1>
                <div
                    onClick={() => setToggleMenu(!toggleMenu)}
                    id="toggle-menu"
                    className={toggleMenu ? "menuOn" : "menuOff"}
                >
                    <p>Menu</p>
                </div>
                {toggleMenu && <Menu />}
            </div>
        ) : null;
    return header;
}
