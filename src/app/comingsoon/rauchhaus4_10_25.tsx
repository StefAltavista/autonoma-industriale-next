"use client";
import "./comingsoon.css";
import "./kopi7june.css";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import MuteButton from "@/components/MuteButton";
import Subscribe from "@/components/Subscribe";
import logoAutonoma from "@/../public/images/logoAutonoma.png";
import artists7june from "./artist4october25";

export default function ComingSoon() {
  const artists = artists7june;
  const imgBaseUrl = "/images/comingsoon/kopi7june25/";
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
          <source src="/videos/teaser4thOctober.mov" type="video/mp4" />
        </video>

        <div id="comingsoon">
          {enter && <div className="space_full_window_h"></div>}

          <div className="comingsoonTextSection comingsoonInfo "></div>

          <div className="comingsoonTextSection description ">
            <p className="slow_flash shake" data-glitch="glitch">
              Back in our beloved Kreuzberg basement on the 4th of October to
              welcome the cold dark times and close the year where we started
              it. This time with a four acts powerhouse concert, followed by a
              double dose of club action.
            </p>
          </div>
          <div className="comingsoonTextSection comingsoonInfo flash">
            <p>
              SATURDAY 4TH OF OCTOBER 2025<br></br>
              <br></br>
              Bethaniendamm 666, 10179 Berlin
              <br></br>
              <br></br> DOORS OPEN AT 21:00
            </p>
          </div>
          <div className="comingsoonTextSection artists">
            <h1 className="slow_flash">L I N E U P</h1>

            {artists.map((x, idx) => {
              return (
                <div className="artist" key={idx}>
                  <h1 className="flash">
                    {" "}
                    <strong>{x.name}</strong>
                  </h1>
                  {x.photo ? (
                    <Image
                      src={imgBaseUrl + x.photo}
                      alt={x.name}
                      width={500}
                      height={500}
                    ></Image>
                  ) : null}
                  <p></p>
                  {x.description && <h2 className="">{x.description}</h2>}

                  {x.link && (
                    <Link href={x.link ? x.link : "/comingsoon"} target="blank">
                      <h2 className="slow_flash">LINK</h2>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className="comingsoonTextSection links"
            id="subscribe_link"
            style={{ fontSize: "30px" }}
          >
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

          <div
            className="comingsoonTextSection disclaimer"
            style={{ fontSize: "20px", lineHeight: "30px" }}
          >
            {/* <p>
              Proceeds for Resistance<br></br>All the proceeds after artists
              contribution and technical costs will go to benefit. Supporting
              the scene has always been a core principle of our philosophy. PfR
              allows us to support relevant social battles while keeping it
              sustainable for artists and workers. All the people involved
              agreed to reduce their fees to support the cause.
            </p>
            <p>
              **The proceeds of this event will be donated to ELSC.support{" "}
              <br></br> The <strong>ELSC</strong> is the first and only
              organisation that specialises in providing legal support and
              assistance to all those facing repression for advocating for
              Palestine across Europe including the UK.
            </p>
            <br></br> */}

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
