import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleResizeWindow = () => {
    window.innerWidth < 760
      ? setVideoSrc(smallHeroVideo)
      : setVideoSrc(heroVideo);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full  flex-center flex-col items-center">
        <p id="hero" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            muted
            autoPlay
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a className="btn" href="#highlights">
          Buy
        </a>
        <p className="font-normal text-xl">Form $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
