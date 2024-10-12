"use client";
import "./comingsoon.css";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef, useState } from "react";
import MuteButton from "@/components/MuteButton";
import Subscribe from "@/components/Subscribe";

export default function ComingSoon() {
    const videoRef = useRef<any>();
    const [enter, setEnter] = useState(false);

    const enterPage = () => {
        setEnter(true);
        videoRef.current.play();
    };

    return (
        <div>
            {!enter ? (
                <div id="comingsoon-intro" onClick={() => enterPage()}>
                    <Image
                        src="/images/logoAutonoma.png"
                        width={100}
                        height={90}
                        alt="logoAutonoma"
                    />
                    <h1>E N T E R</h1>
                </div>
            ) : null}
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
                            12:00pm<br></br>The most unusual secret location of
                            Ziegrastrasse 11, Neukölln Berlin<br></br>
                            Subscribe to our channels for more info
                        </p>
                    </div>

                    <div className="comingsoonTextSection description ">
                        <p className="slow_flash">
                            A <strong>S</strong>ONI<strong>C</strong> RITUAL OF
                            PSYC<strong>H</strong>IC EXPLO<strong>R</strong>AT
                            <strong>I</strong>ON
                            <br></br>
                            <br></br>
                            The <strong>P</strong>rom<strong>P</strong>t descend
                            of th<strong>E</strong> flying saucer is set to land
                            for t<strong>H</strong>e first encounter in one of
                            the grittiest DIY sp<strong>A</strong>ces in town{" "}
                            <strong>W</strong>ith <strong>A</strong> line-up of
                            outs<strong>I</strong>ders from the edges of the
                            electronic mus<strong>I</strong>c world:
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
                            <p>
                                [Nation - Dark Entries]
                                <br></br>
                                <br></br>
                                Over excited to bring in town Chicago`s weirdest
                                Beau Wanzer. Inspired by early industrial and
                                minimal synth from the `80s, with releases on
                                Mannequin, Dark Entries and Minimal Wave to name
                                a few, his music is an unpredictable mixture of
                                ebm, industrial and techno curveballs.
                                Distorted, intricate and as dark as it gets.
                            </p>
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
                            <p>
                                [Der Zykklus - Outsounder]
                                <br></br>
                                <br></br>
                                One of the finest selectors we’ve had the chance
                                to listen to. Engineering lecturer at the
                                National Technical University of Minsk during
                                the day, half of Der Zyklus along Heinrich
                                Mueller, her mixes are a sonic exploration that
                                weaves together `the old with the new, the rare
                                with the obscure``. Electro and Techno at its
                                best.
                            </p>
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
                            <p>
                                [Bunker Panzerkreuz - Tar Hallow]
                                <br></br> <br></br>
                                Athens based Lycurgus is an elusive figure in
                                the deeper underground. He has released some
                                seriously abrasive music on legendary labels
                                such as the dutch Bunker Panzerkreuz and Pi
                                Electronics. His music is corrosive as acid,
                                raw, heavy, machine made industrial. His rare
                                appearance live is something you want to catch.
                            </p>
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
                            <p>
                                [New Flesh] DJ
                                <br></br> <br></br>
                                Iranian born, Berlin based electro queen Parand
                                relentlessly worked her way in the city’s wide
                                sonic spectrum spinning records and sharing
                                decks with several influential artists during
                                these last years. Her new work, set to be
                                released soon on Umwelt`s New Flesh, is the next
                                step of a path she is writing wax after wax.
                            </p>
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
                                <br></br> <br></br>
                                Not much presentation is neded, two of our most
                                loved freaks, for the first time back2back.
                                Double dose of relentless insanity, we would say
                                get ready, but you never will.
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
                    <div className="comingsoonTextSection links">
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
