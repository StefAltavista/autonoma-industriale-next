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
    const env = process.env.NODE_ENV;
    // console.log(
    //     env == "development" ? "DEVELOPMENT MODE" : "Welcome in Autonoma"
    // );

    const header = pathname != "/comingsoon" && (
        <div id="header">
            <div id="shortBorder"></div>
            <Link href="/">
                <Image
                    src="/images/logoAutonoma.png"
                    alt="Logo"
                    width={150}
                    height={125}
                />
            </Link>

            <h1 id="header-title"> AUTONOMA INDUSTRIALE</h1>
            {env == "development" && (
                <div
                    onClick={() => setToggleMenu(!toggleMenu)}
                    id="toggle-menu"
                    className={toggleMenu ? "menuOn" : "menuOff"}
                >
                    {pathname != "/" && <p>Menu</p>}
                </div>
            )}
            {toggleMenu && (
                <Menu closeMenu={() => setToggleMenu(!toggleMenu)} />
            )}
        </div>
    );
    return header;
}
