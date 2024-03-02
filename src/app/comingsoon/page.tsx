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
                <Suspense>
                    <video
                        className="video"
                        loop
                        ref={videoRef}
                        playsInline
                        preload="auto"
                    >
                        <source
                            src="/videos/Teaser16March2024.mp4"
                            type="video/mp4"
                        />
                    </video>
                </Suspense>
                <div id="comingsoon">
                    <Suspense>
                        <Image
                            src="/images/comingsoon/poster_transparent.png"
                            alt="poster"
                            width={2400}
                            height={2400}
                            id="transparentlayer"
                        />
                    </Suspense>

                    <div className="comingsoonTextSection comingsoonInfo flash">
                        <p>
                            Saturday 16th of March 2024 from 9:00pm to 9:00am at
                            Køpi Keller
                        </p>
                    </div>

                    <div className="comingsoonTextSection description">
                        <p>
                            <strong>A</strong>mong this perpet<strong>u</strong>
                            al en<strong>t</strong>anglement within the c
                            <strong>o</strong>ils of distopya, A\I is pleased to
                            offer a throbbi<strong>n</strong>g w
                            <strong>o</strong>r<strong>m</strong>hole as an esc
                            <strong>a</strong>pe.
                        </p>
                    </div>

                    <Suspense>
                        <Image
                            src="/images/comingsoon/Hand.png"
                            alt="poster"
                            width={2480}
                            height={2480}
                            className="flash"
                        />
                    </Suspense>
                    <div className="comingsoonTextSection artists">
                        <p> Lineup </p>
                        <div className="artist">
                            <strong>Mouth Wound</strong>
                            <Image
                                src="/images/comingsoon/MouthWound.jpeg"
                                alt="mouth wound"
                                width={500}
                                height={500}
                            ></Image>
                            <p>
                                [DK] LIVE
                                <br></br>
                                <br></br>
                                From Copenhagen, the solo project of Trine
                                Paaschburg. Noise, textured soundscapes and
                                repetitive heavy rhythms. Friction between two
                                opposing forces.
                            </p>
                            <a
                                href="https://linktr.ee/mouthwound"
                                target="blank"
                            >
                                LINK
                            </a>
                        </div>
                        <div className="artist">
                            <p>
                                <strong>Gaja</strong>
                                <Image
                                    src="/images/comingsoon/Gaja.jpeg"
                                    alt="gaja"
                                    width={500}
                                    height={500}
                                ></Image>
                                [IT] LIVE
                                <br></br>
                                <br></br>
                                Ophism Records label boss (!). Long rooted,
                                merciless wax spinner. Already resident of
                                Tresor Berlin. His live, at his second
                                appearance right after OUTLINE FESTIVAL, is a
                                brutal and distorted assault of cerebral Techno.
                                Now based in northern Italy, this is a rare
                                catch.
                            </p>
                            <a
                                href="https://ophism.bandcamp.com/album/all-i-see-i-hate"
                                target="blank"
                            >
                                LINK
                            </a>
                        </div>
                        <div className="artist">
                            <p>
                                <strong>Exome</strong>
                                <Image
                                    src="/images/comingsoon/Exome.jpeg"
                                    alt="exome"
                                    width={500}
                                    height={500}
                                ></Image>
                                [IT] LIVE
                                <br></br> <br></br>
                                Existing as a necessary violence in a last
                                resort to invoke a vehicle of change.
                                Ritualistic in practice, a variation of
                                melancholic & extreme brutal harsh electronics -
                                created against life and against humanity. EXOME
                                is the purity of hate & violence, like the rot
                                that spills out of a murderous corpse. A
                                beautiful and tragic stream of consciousness,
                                dissolving and growing, quickly spreading
                                through the infectious path of disease.
                            </p>
                            <a
                                href="https://phagetapes.bandcamp.com/album/no-one-deserves-an-empty-life"
                                target="blank"
                            >
                                LINK
                            </a>
                        </div>
                        <div className="artist">
                            <p>
                                <strong>3SBAT</strong>
                                <Image
                                    src="/images/comingsoon/3sbat.jpeg"
                                    alt="exome"
                                    width={500}
                                    height={500}
                                ></Image>{" "}
                                [UK] DJ
                                <br></br> <br></br>
                                Italian born, non-binary, Glasgow based, Dj &
                                music producer and Left Hand Path practitioner
                                3SBAT (pronounced Esbat) will bring you in the
                                dark realm of their Ritual Techno - a blend of
                                dark industrial , ritual , noise and broken
                                techno. <br></br>Playing gigs in between Glasgow
                                and Berlin, 3SBAT has performed in clubs such as
                                Tresor , about://blank , OHM , and Kit Kat
                                Berlin, in events such has Gegen Berlin,
                                SUBVERTED & VuMantra. <br></br>3SBAT has
                                releases on the mighty Soma Records ; as well as
                                industrial experimental labels such as Revok
                                Records (London) , Subverted (Berlin), VuMantra
                                (Berlin) , Experiment Records Tokyo & hard tech
                                label Brutalism x Basseht. 3SBAT is also
                                resident and 1/3 of the Glaswegian Collective
                                A.D.S.R - a new space for underground techno in
                                Glasgow held bi-monthly at La Cheetah . Part of
                                the team are themselves, manu_facturer &
                                Kalopsia.
                            </p>
                            <a href="https://linktr.ee/3SBAT" target="blank">
                                LINK
                            </a>
                        </div>
                    </div>
                    <Image
                        src="/images/comingsoon/Header.png"
                        alt="poster"
                        width={2480}
                        height={2480}
                        className="flash"
                    />
                    <div className="comingsoonTextSection">
                        <p> Artists based in Berlin</p>
                        <div className="artist">
                            <strong>Templər</strong>
                            <p>[HANDS] LIVE</p>
                            <p>
                                Half of Imperial Black Unit, half of ATT CORP.
                                With releases and appearance all over the
                                electronic realm, templer emerges his
                                productions in to a violent universe, a mixture
                                of raw industrial music, noisey scapes with a
                                tribal rhytmic atmosphere.
                            </p>
                        </div>
                        <div className="artist">
                            <strong>Phallucipher ΦΛΣΦΡ</strong>
                            <p> LIVE Audio/Visual </p>
                            <p>
                                The audio visual nightmare of A and K. Emerging
                                from mixed media arts, the duo apply their sonic
                                curiosities to one another through an internal
                                and external dialogue as a means of realm
                                exploration.
                            </p>
                        </div>
                        <div className="artist">
                            <strong> Sinister Sveta </strong>
                            <p>[Autonoma Industriale] LIVE</p>
                            <p>
                                Live tapes looping black holes. The direful
                                alter ego of DJ Control Delete.
                            </p>
                        </div>
                        <div className="artist">
                            <strong>Hausverboti </strong>
                            <p>[Autonoma Industriale] DJ </p>
                            <p>Your doom techno morning dose</p>
                        </div>
                        <div className="artist">
                            <strong>1kPieces</strong>
                            <p>[Autonoma Industriale] LIVE</p>
                            <p>
                                With his last work just released on our label,
                                we could not be more thrilled to bring in the
                                live of 1kPieces to open the next Autonoma
                                Industriale. Dive into an hour of drone
                                blissness and detach from the external world.
                                Autonoma Industriale 160324 There is hope.
                            </p>
                        </div>
                    </div>
                    <div className="comingsoonTextSection links">
                        <p>
                            Join our mailing list for more info regarding this
                            and other events
                        </p>
                        <Subscribe />
                        <p>
                            or if you prefer, our{" "}
                            <a
                                href="https://t.me/autonomaindustriale"
                                target="blank"
                            >
                                Telegram
                            </a>{" "}
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

                        <p>
                            **Part of the proceeds of this event will be donated
                            to ELSC.support <br></br> The ELSC is the first and
                            only organisation that specialises in providing
                            legal support and assistance to all those facing
                            repression for advocating for Palestine across
                            Europe including the UK.
                        </p>
                    </div>
                    <div id="comingsoonBottomLogo">
                        <Image
                            src="/images/logoAutonoma.png"
                            width={100}
                            height={100}
                            alt="Logo"
                        />
                    </div>
                    <div className="comingsoon-space"></div>
                </div>
            </div>
        </div>
    );
}
