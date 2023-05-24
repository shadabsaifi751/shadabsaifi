import React from "react";
import Typer from "../Common/Typer";
import Edneed from "../../Accects/Icons/edneed.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="About" className="pt-20">
      <div className="container mx-auto px-8 lg:px-32">
        {
          <Typer
            className="font-Preahvihear mt-0 mb-5 text-center md:text-left  md:mt-20 text-xl md:text-2xl lg:text-4xl font-normal tracking-wide"
            heading="I"
            dataText={[
              "am a Software Engineer",
              "develop modern frontend apps",
              "Bringing your vision to life",
              "design dynamic user experience",
              "Transforming words into works of art",
            ]}
          />
        }
        <p
          className="text-sm md:text-base flex-wrap justify-center md:justify-start font-light font-jakarta mb-8 tracking-wide flex items-center gap-3"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Currently, I&#39;m a Software Engineer at{" "}
          <Image
            src={Edneed}
            alt="allince web"
            className=" bg-fontColor rounded p-1"
            height={80}
            width={80}
          />
        </p>
        <p
          className="text-sm text-center md:text-left lg:w-4/6 tracking-wider font-light link font-poppins"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          I&#39;m a frontend developer with expertise in HTML, CSS, JavaScript,
          React, and various frontend frameworks. My focus is on delivering
          exceptional user experiences and staying up-to-date with the latest
          trends in frontend development. I take responsibility for crafting
          user-friendly, responsive designs that prioritize customer
          satisfaction.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
