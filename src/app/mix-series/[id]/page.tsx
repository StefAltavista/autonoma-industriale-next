"use client";
import MixSeriesData from "@/lib/mixSeriesData";
import "./page.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import ModalView from "@/components/ModalView";

type eventPageParams = {
  params: { id: string };
};

export default function Mix({ params }: eventPageParams) {
  const mix = MixSeriesData.find(
    (mix) => mix.id.toLocaleLowerCase() === params.id
  );
  const [openImage, setOpenImage] = useState(false);
  if (!mix) notFound();
  const newLineOnDot = (paragraph: string) =>
    paragraph.replace(/\. (?=[A-Z])/g, ".\n\n");

  return (
    <>
      <div id="mixPage">
        <div className="rowContainer">
          <div className="leftColumn">
            <Image
              src={mix.coverImage}
              alt={`${mix.name} cover image`}
              className="mixCoverImage mixCoverImage-desktop"
              width={500}
              height={500}
              onClick={() => {
                console.log("open");
                setOpenImage(true);
              }}
            />
            <Link
              href="/mix-series"
              className="backToMixesBtn backToMixesBtn-desktop"
            >
              ⟵ Back to Mixes
            </Link>
          </div>
          <div className="mixTextContent">
            {/* Mobile back button at end of text */}
            <Link
              href="/mix-series"
              className="backToMixesBtn backToMixesBtn-mobile"
            >
              ⟵ Back to Mixes
            </Link>
            <Link href={mix.soundcloudLink} target="_blank">
              <h2 style={!!mix.note ? { marginBottom: 0 } : {}}>{mix.name}</h2>
            </Link>
            {!!mix.note && <p style={{ marginTop: 0 }}>{mix.note}</p>}
            {/* Mobile image at end of text */}
            <Image
              src={mix.coverImage}
              alt={`${mix.name} cover image`}
              className="mixCoverImage mixCoverImage-mobile noDesktop"
              width={500}
              height={500}
              onClick={() => {
                console.log("open");
                setOpenImage(true);
              }}
            />

            {!!mix.dialog && (
              <>
                {/* <div className="introBox">
                <p style={{ marginBottom: "5px", fontStyle: "italic" }}>
                  Our Mix Series returns in a new form, a convergence of sounds,
                  stories and original graphics for a special edition of five
                  episodes, one every month till the end of the year.
                </p>
                <p style={{ fontStyle: "italic" }}>
                  Each episode focusing on an emerging artist whose work, both
                  solo and within their collective, is contributing to redefine
                  the cultural landscape of the town. Each one featuring an
                  interview with the author and an original work by the visual
                  artist Bece, exploring shades and connections between
                  different layers of expression.
                </p>
                <p style={{ marginBottom: "5px", fontStyle: "italic" }}>
                  Five artists and collectives we like, respect, or take
                  inspiration from — all bound by passion, authenticity, and a
                  relentless dedication to the cause. Individualities and
                  multiplicities with whom we’re glad to share visions, spaces,
                  struggles, and long, beautifully messed-up parties.
                </p>
              </div> */}

                <div style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
                  {mix.description}
                </div>

                {mix.dialog && (
                  <div
                    className="dialogLabel"
                    style={{
                      borderTop: "1px solid red",
                      marginTop: "30px",
                      paddingTop: "30px",
                    }}
                  >
                    <span className="dialogSymbol">[</span>
                    <span className="dialogChar"> d</span>
                    <span className="dialogChar">i</span>
                    <span className="dialogChar">a</span>
                    <span className="dialogSymbol"> /</span>
                    <span className="dialogChar"> l</span>
                    <span className="dialogChar">o</span>
                    <span className="dialogChar">g </span>
                    <span className="dialogSymbol">]</span>
                  </div>
                )}
              </>
            )}
            {mix.dialog && (
              <div id="dialogSection">
                {mix.dialog.map((entry, index) => (
                  <div key={index} className="dialogEntry">
                    <strong>{entry.talker}:</strong>{" "}
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      {newLineOnDot(entry.message)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            zIndex: 100,
            border: 0,
            backgroundColor: "#880101ff",
            width: "100%",
            padding: "15px",
          }}
        >
          <div>
            <iframe
              width="100%"
              height="20"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={mix.soundcloudEmbed}
            />
          </div>
        </div>
      </div>

      <ModalView isOpen={openImage} closeModal={() => setOpenImage(false)}>
        <Image
          src={mix.coverImage}
          alt={`${mix.name} cover image`}
          className="openImage"
          width={1000}
          height={1000}
        />
      </ModalView>
    </>
  );
}
