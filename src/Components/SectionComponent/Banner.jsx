import React from "react";
import Avtar from "../../Accects/Icons/Me.svg";
import Image from "next/image";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className="pt-12 lg:pt-32" id="home">
      <div  className="container mx-auto px-8 lg:px-20">
        <div className="flex flex-wrap items-center ">
          <div
            className={`flex flex-col text-center gap-11 md:gap-0  md:flex-row items-center justify-center relative ${styles.avtar_Wrap}`}
          >
            <h5
              className={`relative md:absolute text-sm md:text-base top-3 right-auto left-auto md:left-auto md:-right-64 font-Preahvihear tracking-wide p-3 rounded-xl link ${styles.title}`}
              data-aos="fade-up"
              data-aos-duration="400"
            >
              Hello! 👋 I Am{" "}
              <span className=" text-primaryGlow">Mohd Shadab Saifi</span>
            </h5>
            <Image src={Avtar} alt="avtar" />
          </div>
          <div>
            <h1
              className={`font-Preahvihear text-center md:text-left text-2xl md:text-4xl mb-5 ${styles.main_title}`}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Building pixel-perfect websites
              <br className="hidden md:flex" /> that bring your{" "}
              <span className="text-fontColor">vision</span> to life.
            </h1>
            <p
              className="text-sm  text-center md:text-left md:text-base font-normal tracking-wide font-poppins"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              I have a obsession for attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
