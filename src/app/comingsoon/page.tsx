"use client";
import "./comingsoon.css";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import MuteButton from "@/components/MuteButton";
import Subscribe from "@/components/Subscribe";
import logoAutonoma from "@/../public/images/logoAutonoma.png";

export default function ComingSoon() {
    const videoRef = useRef<any>();
    const [enter, setEnter] = useState(false);
    const enterPage = () => {
        setEnter(true);
        videoRef.current.play();
    };
    useEffect(() => {
        fetch("/api/counter");
    }, []);

    return (
        <div>
            <div id="comingsoon-intro" style={{ color: "red" }}>
                <Image
                    src={logoAutonoma}
                    width={100}
                    height={90}
                    alt="logoAutonoma"
                    priority={true}
                />

                <p>
                    Join our mailing list for more info regarding our next event
                </p>
                <Subscribe />
                <p>
                    or if you prefer, our{" "}
                    <Link
                        href="https://t.me/autonomaindustriale"
                        target="blank"
                        style={{ color: "white" }}
                    >
                        Telegram
                    </Link>
                    channel
                </p>
            </div>

            {/* {!enter ? (
                <div id="comingsoon-intro" onClick={() => enterPage()}>
                    <Image
                        src={logoAutonoma}
                        width={100}
                        height={90}
                        alt="logoAutonoma"
                        priority={true}
                    />
                    <h1>E N T E R</h1>
                </div>
            ) : null} */}
            <div className={enter ? "open" : "close"}>
                <MuteButton videoRef={videoRef} visible={enter} />

                <video
                    className="video"
                    loop
                    ref={videoRef}
                    playsInline
                    preload="auto"
                >
                    <source
                        src="/videos/ziegra_26_10_teaser.mp4"
                        type="video/mp4"
                    />
                </video>

                <div id="comingsoon">
                    <div className="top_image">
                        <Image
                            src="/images/comingsoon/ziegra_26_10/triangle.png"
                            alt="poster"
                            width={500}
                            height={500}
                            className="toptriangle mixBlend"
                        />
                    </div>
                    <Image
                        src="/images/comingsoon/ziegra_26_10/green_graffiti.png"
                        alt="poster"
                        width={2400}
                        height={2400}
                        className="mixBlend graffiti_img"
                    />

                    <div className="comingsoonTextSection comingsoonInfo flash">
                        <p>
                            Saturday 26th of October 2024<br></br>23:00pm to
                            12:00pm<br></br>A most unusual secret location of
                            Ziegrastrasse 11, Berlin - Neukölln<br></br>
                        </p>
                        <Link href={"#subscribe_link"}>
                            <p>
                                mo<strong>R</strong>e info...
                            </p>
                        </Link>
                    </div>

                    <div className="comingsoonTextSection description ">
                        <p className="slow_flash">
                            l<strong>A</strong>st-min<strong>U</strong>te
                            edition to break the i<strong>C</strong>e of Berlin
                            winter’s severity. T<strong>H</strong>is time, we
                            will dive deep into the cold subcultures with t
                            <strong>H</strong>ree debut performances. Fe
                            <strong>A</strong>t<strong>U</strong>ring 1/2 of
                            Mueran Humano<strong>S</strong>: NOCHTEF, the dark
                            wave duo CONTES CRUELS and post punk to EBM
                            shredding SANTACRUZ. Next up, the noisy industrial
                            madness of Leipzig’s OLIOTRONIX, the obscu
                            <strong>R</strong>e ambient
                            <strong>A</strong>tmosphere of BRIDE, and the
                            forward-thinking techno of Milan-based SIMONA
                            ZAMBOLI. We are also thrilled to welcome the deb
                            <strong>U</strong>t of industrial te
                            <strong>CH</strong>no power<strong>H</strong>ouse
                            CRANYA, who will join our in-house techno militia:
                            finally b<strong>A</strong>ck on stage, o
                            <strong>U</strong>r beloved EYES GONE, followed by
                            re<strong>S</strong>ident NACASAT. Where?? In the
                            profound secrets of Kreuzberg’s Fumeríe at
                            Bethaniendamm <strong>666</strong>. <br></br>
                            Subscribe or pm for info!
                        </p>
                    </div>

                    <div className="comingsoonTextSection artists">
                        <p> Lineup </p>
                        <div className="artist">
                            <strong>Beau Wanzer</strong>
                            {/* <Image
                                src="/images/comingsoon/MouthWound.jpeg"
                                alt="mouth wound"
                                width={500}
                                height={500}
                            ></Image> */}
                            <p></p>
                            <Link
                                href="https://beauwanzer.bandcamp.com"
                                target="blank"
                            >
                                LINK
                            </Link>
                        </div>
                        <div className="artist">
                            <strong>Elena Sizova</strong>
                            {/* <Image
                                    src="/images/comingsoon/Gaja.jpeg"
                                    alt="gaja"
                                    width={500}
                                    height={500}
                                ></Image> */}
                            <p></p>
                            <Link
                                href="https://soundcloud.com/lectra"
                                target="blank"
                            >
                                LINK
                            </Link>
                        </div>
                        <div className="artist">
                            <strong>Lycurgus</strong>
                            {/* <Image
                                    src="/images/comingsoon/Exome.jpeg"
                                    alt="exome"
                                    width={500}
                                    height={500}
                                ></Image> */}
                            <p></p>
                            <Link
                                href="https://soundcloud.com/lykourg"
                                target="blank"
                            >
                                LINK
                            </Link>
                        </div>
                        <div className="artist">
                            <strong>Parand</strong>
                            {/* <Image
                                    src="/images/comingsoon/3sbat.jpeg"
                                    alt="exome"
                                    width={500}
                                    height={500}
                                ></Image>{" "} */}
                            <p></p>
                            <Link
                                href="https://soundcloud.com/paranddd"
                                target="blank"
                            >
                                LINK
                            </Link>
                        </div>
                        <div className="artist">
                            <strong>GIA b2b Control Delete</strong>
                            {/* <Image
                                    src="/images/comingsoon/3sbat.jpeg"
                                    alt="exome"
                                    width={500}
                                    height={500}
                                ></Image> */}
                            <p>
                                [Autonoma Industriale]
                                {/* <br></br> <br></br>
                                Not much presentation is neded, two of our most
                                loved freaks, for the first time back2back.
                                Double dose of relentless insanity, we would say
                                get ready, but you never will. */}
                            </p>
                            <Link
                                href="https://soundcloud.com/paranddd"
                                target="blank"
                            >
                                LINK
                            </Link>
                        </div>
                        <div className="artist">
                            <strong>Unprofessional</strong>
                            {/* <Image
                                    src="/images/comingsoon/3sbat.jpeg"
                                    alt="exome"
                                    width={500}
                                    height={500}
                                ></Image> */}
                            <p>
                                [Forgotten Planet]
                                <br></br> <br></br>
                                Wild edge cut-up beats and nasty grooves. We are
                                very happy to welcome back Unprofessional comes
                                with their bags of unfiltered material.
                                Unprofessional is at the edge of it all.
                            </p>
                            <Link
                                href="https://soundcloud.com/unprofessional"
                                target="blank"
                            >
                                LINK
                            </Link>
                        </div>
                    </div>

                    <Suspense>
                        <Image
                            src="/images/comingsoon/ziegra_26_10/poster.JPG"
                            alt="poster"
                            width={1400}
                            height={1400}
                            className="othermixBlend "
                        />
                    </Suspense>
                    <div
                        className="comingsoonTextSection links"
                        id="subscribe_link"
                    >
                        <p>
                            Join our mailing list for more info regarding this
                            and other events
                        </p>
                        <Subscribe />
                        <p>
                            or if you prefer, our{" "}
                            <Link
                                href="https://t.me/autonomaindustriale"
                                target="blank"
                            >
                                Telegram
                            </Link>{" "}
                            channel
                        </p>
                    </div>
                    <div className="comingsoonTextSection disclaimer">
                        <p>
                            Autonoma Industriale aims to create a safer and more
                            inclusive enviroment, this means that there will be
                            no tollerance for any kind of abusive, agressive or
                            discriminatory behaviour. <br></br>
                            An awareness team will be present and recognisable
                            at any time.
                        </p>

                        <p>
                            NO RACISM - NO HOMOPHOBIA - NO SEXISM - NO ZIONISM -
                            NO ANTISEMITISM - NO FOOLS
                        </p>

                        {/* <p>
                            **Part of the proceeds of this event will be donated
                            to ELSC.support <br></br> The ELSC is the first and
                            only organisation that specialises in providing
                            legal support and assistance to all those facing
                            repression for advocating for Palestine across
                            Europe including the UK.
                        </p> */}
                    </div>
                    <div id="comingsoonBottomLogo">
                        <Suspense>
                            <Image
                                src="/images/logoAutonoma.png"
                                width={100}
                                height={100}
                                alt="Logo"
                                className=" bottom_logo"
                            />
                        </Suspense>
                    </div>
                    {/* <div className="comingsoon-space"></div> */}
                </div>
            </div>
        </div>
    );
}
