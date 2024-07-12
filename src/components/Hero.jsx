import React, { useRef } from "react";
import Section from "./Section";
import curve from "../assets/hero/curve.png";
import Button from "./Button";
import hero from "../assets/hero/hero.svg";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses={true}
      crossesOffset="lg:translate-y-[5.25]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            <p>Explore the world of Open Source with</p>
            <span className="inline-block relative">
              The Boring Rats
              <img
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
                src={curve}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-cyan-100 lg:mb-8">
            We are a community of developers, designers, and creators who are
            passionate about Open Source and the impact it has on the world.
          </p>
          <Button href="#about" white>
            Get Started
          </Button>
        </div>

        <div className="relative max-w-full md:max-w-5xl xl:mb-24">
          <div className="relative bg-n-8 rounded-[1rem]">
            <div className="relative z-1 p-0.5 rounded-2xl bg-slate-900">
              <div className="h-[1.4rem] bg-pink-200 rounded-t-[0.9rem]" />
              <div
                className="rounded-b-[0.9rem] overflow-hidden"
                style={{
                  boxShadow: "0 0 20px 10px rgba(0, 255, 0, 0.6)", // green glow
                }}
              >
                <img
                  className="w-full translate-y-[9%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[1%]"
                  src={hero}
                  alt="hero image"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[2.5rem] bottom-[9.5rem] px-5 py-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-3" key={index}>
                        <img src={icon} alt="icon" height={25} width={24} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>

            <Gradient/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
