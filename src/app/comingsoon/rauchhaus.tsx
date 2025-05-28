"use client";
import "./comingsoon.css";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import MuteButton from "@/components/MuteButton";
import Subscribe from "@/components/Subscribe";
import logoAutonoma from "@/../public/images/logoAutonoma.png";

export default function ComingSoon() {
  const imgBaseUrl = "/images/comingsoon/rauchhaus/";
  const videoRef = useRef<any>();
  const [enter, setEnter] = useState(false);
  const enterPage = () => {
    setEnter(true);
    videoRef.current.play();
  };
  useEffect(() => {
    fetch("/api/counter");
  }, []);

  const artists = [
    {
      name: "Nochteff",
      photo: "nochteff.jpg",
      link: "https://http://www.youtube.com/watch?v=ItV5iKi-DVM&ab_channel=HeadsRadio",
      description:
        "Founder and bass player of the legendary formation Dios (1992), half of the internationally acclaimed duo Mueran Humanos, Nochteff is the latest project of the Argentinian musician Tomás Nochteff. Looped bass lines and mechanical drums meets poetry in this flaming incarnation of an artist whose legacy extends oversee. Fire, walk with me.",
    },
    {
      name: "Simona Zamboli",
      photo: "zamboli.jpg",
      link: "https://forceincmilleplateaux.bandcamp.com/album/a-laugh-will-bury-you",
      description:
        "Sound engineer and designer based in Milano. Her works use a combination of analog synthesis and digital processing via computer music, playing freely in repetitive, yet free, chaotic, noisy and interrupted patterns.",
    },
    {
      name: "Santacruz",
      photo: "santacruz.jpg",
      link: "https://www.youtube.com/watch?v=wlhbsyBsgzM&ab_channel=SANTACRUZ",
      description:
        "Already DIY 1990, alias under which he releases his first EP for Lobster Theremin in 2017, Santacruz is the punk sublimation of musician and performer Alberto Santacruz. A distorted confluence of EBM, post punk and proto-industrial, his music already got the attention of the german cult label A+W, that in November 2024 list in their catalogue his single ‘Respiración’, along a remix from the excellent Spanish producer Geistform. Vibrant, charismatic, explosive, this performance is set to be one of the highlights of the night.",
    },
    {
      name: "Bride",
      photo: "bride.jpg",
      link: "https://mybride.bandcamp.com/track/rotaewn-ravenous-people",
      description:
        "Bride is an experimental noise musician and sound artist, constructing allegories within harsh and dissonant environments to embrace a grating vehemence, often enchanting terror and warmth in chorus. She has released works on Psychic Liberation, Industrial Coast, Mindseyerecords, Longform Editions and No Holiday amongst others including her own label and platform Alloy Choir, started in early 2023.",
    },
    {
      name: "Contes Cruels",
      photo: "contes.jpg",
      link: "https://contescruels.bandcamp.com/album/s-ance-2",
      description:
        "Also from Argentina, Contes Cruels is the dark wave duo formed by Pris V (Avant Post, Jinx, Nocturnal Emissions) and M. Cruel. Taking inspiration from the seminal post-punk sound of Britain, decadent literature and experimental electronic, Contes Cruels ventures into the realms of hauntology, crafting a minimalist, sensual sound where cold lyrics meets vintage gears to embody into a spectral presence and eclipse into postmodernity.",
    },
    {
      name: "Cranya",
      photo: "cranya.jpg",
      link: "https://on.soundcloud.com/d1BksnB97i5gU4sV6",
      description:
        "Never deserting pitch black territories, Cranya has approached a variety of different facets of obscure dance music in the last years. The decaying stimuli of modern society are the main inspiration for his characteristic perpetual gloomy sound. Fascinated by the vigilant induced state and energy recharging power of disruptive music, “Cranya” unfolds this force on the floor.",
    },
    {
      name: "Oliotronix",
      photo: "oliotronix.jpg",
      link: "https://gleeetch.bandcamp.com/album/murrrlo",
      description:
        "Audio hacker queen, notorious amongst those who knows that boundaries are but mere induced limitations. This unique, Leipzig based, cyberpunk musician delivers a crossover of most subversive electronic genres you’d barely heard of. An eclectic noise performance with a most liberating punk attitude. `When life gives you junk, make music with it`",
    },
    {
      name: "Eyesgone",
      photo: "eyesgone.jpg",
      link: "https://www.youtube.com/watch?v=ripmpifsCLU&t=1359s&ab_channel=EyesGone",
      description:
        "Formally a bass player in punk bands, yet largely influenced by the works of Jeff Mills and Mark E.Smith. Their improvised live sets are oneiric journeys that deeply combines dub and techno to result in an immersive, black tinted experience.",
    },
    {
      name: "Nacasat",
      photo: "nacasat.jpg",
      link: "https://soundcloud.com/destroyevsky5000/live-set-kora-transformatorA",
      description:
        "Known for sculpting hypnotic yet driving soundscapes, Nacasat’s sets are a masterclass in tension and release, capturing the gritty energy of warehouse raves while resonating on club sound systems.  DJ and producer with a decade-long legacy, their industrial-influenced techno has since echoed through some of Europe’s most revered venues, including Corsica Studios and Fold in London, Griessmühle and Mensch Meier in Berlin.",
    },
  ];

  return (
    <div>
      {!enter ? (
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
      ) : null}
      <div className={enter ? "open" : "close"}>
        <MuteButton videoRef={videoRef} visible={enter} />

        <video className="video" loop ref={videoRef} playsInline preload="auto">
          <source src="/videos/teaser18Jan25.mp4" type="video/mp4" />
        </video>

        <div id="comingsoon">
          <div className="top_image">
            <Image
              src={imgBaseUrl + "AutonomaCenter.png"}
              width={600}
              height={100}
              alt="autonomaindustriale"
            />
          </div>
          <div className="top_image">
            <Image
              src={imgBaseUrl + "AdressCenter.png"}
              width={600}
              height={100}
              alt="autonomaindustriale"
            />{" "}
          </div>

          <div className="comingsoonTextSection comingsoonInfo ">
            {/* <p>
                            Saturday 18th of January 2025<br></br>21:00pm to
                            06:00pm<br></br>In the secret promises of the house
                            of George von Rauch<br></br>Bethaniendamm 666, 10997
                            Berlin - Kreuzberg<br></br>
                        </p> 
                        <Link href={"#subscribe_link"}>
                            <p>more info...</p>
                        </Link>*/}
          </div>

          <div className="comingsoonTextSection description ">
            <p className="slow_flash">
              9 Live Shows to b<strong>R</strong>e<strong>A</strong>k thro
              <strong>U</strong>gh <strong>C</strong>ontemporary dystopian
              degeneration and t<strong>H</strong>e severity of Berlin`s winter.{" "}
              <br></br>
              <br></br>January 18th 2025 - at 21:00 <br></br>
              <br></br>In the secret promises of the <strong>HAUS</strong> of
              George von Rauch
              <br></br>
              Bethaniendamm 666, 10997 Berlin - Kreuzberg<br></br>
              {/* <br></br>T<strong>H</strong>is time, we will dive
                            deep into the cold subcultures with t
                            <strong>H</strong>ree debut performances. Fe
                            <strong>A</strong>t<strong>U</strong>ring 1/2 of
                            Mueran Humano<strong>S</strong>: NOCHTEF, the dark
                            wave duo CONTES CRUELS and post punk to EBM
                            shredding SANTACRUZ. <br></br>
                            <br></br>Next up, the noisy industrial madness of
                            Leipzig’s OLIOTRONIX, the obscu
                            <strong>R</strong>e ambient
                            <strong>A</strong>tmosphere of BRIDE, and the
                            forward-thinking techno of Milan-based SIMONA
                            ZAMBOLI. We are also thrilled to welcome the deb
                            <strong>U</strong>t of industrial te
                            <strong>CH</strong>no power<strong>H</strong>ouse
                            CRANYA, who will join our in-house techno militia:
                            finally b<strong>A</strong>ck on stage, o
                            <strong>U</strong>r beloved EYES GONE, followed by
                            re<strong>S</strong>ident NACASAT. */}
            </p>
          </div>

          <div className="comingsoonTextSection artists">
            <p> Lineup </p>

            {artists.map((x, idx) => {
              return (
                <div className="artist" key={idx}>
                  <strong>{x.name}</strong>
                  {x.photo ? (
                    <Image
                      src={imgBaseUrl + x.photo}
                      alt={x.name}
                      width={500}
                      height={500}
                    ></Image>
                  ) : null}
                  <p></p>
                  <Link href={x.link ? x.link : "/comingsoon"} target="blank">
                    LINK
                  </Link>
                  <p>{x.description}</p>
                </div>
              );
            })}
          </div>
          <div className="comingsoonTextSection links" id="subscribe_link">
            <p>
              Join our mailing list for more info regarding this and other
              events
            </p>
            <Subscribe />
            <p>
              or if you prefer, our{" "}
              <Link href="https://t.me/autonomaindustriale" target="blank">
                Telegram
              </Link>{" "}
              channel
            </p>
          </div>

          <div className="comingsoonTextSection disclaimer">
            <p>
              Autonoma Industriale aims to create safer and more inclusive
              environments, this means that there will be no tolerance for any
              kind of abusive, aggressive or discriminatory behaviour. <br></br>
              An awareness team will be present and recognisable at any time.
            </p>

            <p>
              NO RACISM - NO HOMOPHOBIA - NO SEXISM - NO ZIONISM - NO
              ANTISEMITISM - NO FOOLS
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
