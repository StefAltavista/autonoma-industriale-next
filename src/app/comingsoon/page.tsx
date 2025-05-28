"use client";
import "./comingsoon.css";
import "./kopi7june.css";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import MuteButton from "@/components/MuteButton";
import Subscribe from "@/components/Subscribe";
import logoAutonoma from "@/../public/images/logoAutonoma.png";
import artists7june from "./artist7june25";

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
          <source src="/videos/Teaser7June25.mp4" type="video/mp4" />
        </video>

        <div id="comingsoon">
          <div className="top_image top_image_fixed">
            <Image
              src={imgBaseUrl + "borderText.png"}
              width={1200}
              height={1200}
              alt="autonomaindustriale"
            />
          </div>
          <div className="top_image to_top ">
            <Image
              src={imgBaseUrl + "hangedMan.png"}
              width={1000}
              height={800}
              alt="autonomaindustriale"
            />{" "}
          </div>

          <div className="comingsoonTextSection comingsoonInfo "></div>

          <div className="comingsoonTextSection description ">
            <p className="slow_flash glitch" data-glitch="glitch">
              The nothingness of being is not a void, but the unsettling force
              which displaces and disrupts. We are the void made manifest, not
              in the form of absence, but as the presence of what does not
              belong, the tension between what is and what is not
            </p>
          </div>
          <div className="comingsoonTextSection comingsoonInfo flash">
            <p>
              SATURDAY 7TH OF JUNE 2025<br></br>
              <br></br>
              SCREENING PROGRAM FROM 20:00{" "}
              <i style={{ fontSize: "18px" }}>free entry</i>
              <br></br>
              <br></br>
              CONCERT STARTS AT 22:00<br></br>UNTILL VERY LATE<br></br>
            </p>
            <h3>Køpi</h3>
          </div>
          <div className="comingsoonTextSection artists">
            <h1>L I N E U P</h1>

            {artists.map((x, idx) => {
              return (
                <div className="artist" key={idx}>
                  <h1 style={{ fontSize: "70px" }} className="flash">
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
                  {x.link && (
                    <Link href={x.link ? x.link : "/comingsoon"} target="blank">
                      LINK
                    </Link>
                  )}
                  {x.description && <p>{x.description}</p>}
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
            <p>
              **The proceeds of this event will be donated to ELSC.support{" "}
              <br></br> The <strong>ELSC</strong> is the first and only
              organisation that specialises in providing legal support and
              assistance to all those facing repression for advocating for
              Palestine across Europe including the UK.
            </p>
            <br></br>

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
