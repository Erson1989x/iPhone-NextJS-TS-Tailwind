"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import animateWithGsap from "@/utils/animateGsap";
import React, { useRef } from "react";
import { explore1Img, explore2Img, exploreVideo } from "@/utils";
import Image from "next/image";

const Features = () => {
  const videRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videRef.current?.play();
      },
    });
    animateWithGsap("#features_title", { opacity: 1, y: 0 });
    animateWithGsap(
      ".g_grow",
      { opacity: 1, scale: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc overflow-hidden relative">
      <div className="screen-max-width">
        <div className="w-full mb-12">
          <h1 id="features_title" className="section-heading">
            Explore the full story!
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium !
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image
                    src={explore2Img}
                    alt="titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 fex-center">
                  <p className="feature-text g_text">
                    iPhone 16 Pro is{" "}
                    <span className="text-white">
                      The firt iPhone to feature an aerospae-grade Titanium
                      design
                    </span>
                    using to the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 fex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength to weight ratios,
                    making it{" "}
                    <span className="text-white">
                      lightest iPhone models to date
                    </span>
                    you notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
