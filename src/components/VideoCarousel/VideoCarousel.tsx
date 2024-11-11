import { hightlightsSlides } from "@/constants";
import { gsap } from "gsap";

import { space } from "postcss/lib/list";
import React, { useEffect, useRef, useState } from "react";

const VideoCarousel = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLDivElement[]>([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    // Animate the progress
    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el: HTMLVideoElement | null) => {
                    if (el) {
                      videoRef.current[i] = el;
                    }
                  }}
                  onPlay={() => {
                    setVideo({ ...video, isPlaying: true });
                  }}
                  onPause={() => {
                    setVideo({ ...video, isPlaying: false });
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 rounded-full backdrop-blur">
            {hightlightsSlides.map((_, i) => (
                <span key={i} ref={(el: HTMLDivElement | null) => {
                    if (el) {
                      videoDivRef.current[i] = el;
                    }
                  }}
                  className="mx-2 w-3 h-3 rounded-full bg-gray-200 relative cursor-pointer"
                  >
                    <span className="absolute h-full w-full rounded-full"
                    ref={(el: HTMLSpanElement | null) => {
                        if (el) {
                          videoSpanRef.current[i] = el;
                        }
                      }}
                    >

                    </span>
                  </span>
            ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
