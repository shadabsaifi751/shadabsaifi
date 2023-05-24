import Image from "next/image";
import React from "react";
import styles from "./Skill.module.scss";
import { SkillIcon } from "@/Content";
import SkillDom from "../../Accects/Icons/skill-dom.svg";
import Logo from "../../Accects/Icons/favicon.svg";

const Skill = () => {
  return (
    <section className={`${styles.SkillWrapper} pb-10 md:pb-32`}>
      <div className={`container mx-auto px-8 lg:px-32`}>
        <h2
          className=" font-Preahvihear font-normal text-2xl text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          I&#39;m currently looking to join a{" "}
          <span className="text-color">cross-functional</span> team
        </h2>
        <h2
          className=" font-poppins font-light text-base text-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          that values improving people&#39;s lives through accessible design
        </h2>
        <ul className="flex justify-center flex-wrap items-center gap-5 mt-10">
          {SkillIcon.length &&
            SkillIcon.filter((item) => item.tech === "Frontend").map(
              (items, key) => (
                <li
                  data-aos="flip-left"
                  className={`w-11 h-11 flex items-center justify-center rounded-full ${styles.IconWrapper} link`}
                  key={key}
                >
                  <i className={styles[items.IconName]}></i>
                </li>
              )
            )}
        </ul>
        <ul className="flex justify-center flex-wrap items-center gap-5 mt-5">
          {SkillIcon.length &&
            SkillIcon.filter((item) => item.tech === "design tool").map(
              (items, key) => (
                <li
                  data-aos="flip-right"
                  className={`w-11 h-11 flex items-center justify-center rounded-full ${styles.IconWrapper} link`}
                  key={key}
                >
                  <i className={styles[items.IconName]}></i>
                </li>
              )
            )}
        </ul>
        <ul
          className={`flex justify-center flex-wrap items-center gap-5 mt-5 ${styles.connection} relative`}
        >
          {SkillIcon.length &&
            SkillIcon.filter((item) => item.tech === "other").map(
              (items, key) => (
                <li
                  data-aos="flip-left"
                  className={`w-11 h-11 flex items-center justify-center rounded-full relative ${styles.IconWrapper} link`}
                  key={key}
                >
                  <i className={`relative ${styles[items.IconName]}`}></i>
                </li>
              )
            )}
        </ul>
        <div
          className={`flex justify-center items-center gap-6 mt-52 relative ${styles.skillDomWrapper}`}
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Image
            src={SkillDom}
            alt="SkillDom"
            height={styles.skillDom}
            width={styles.skillDomW}
          />
          <div
            className={styles.brand_wrapper}
            // data-aos="zoom-in"
            // data-aos-anchor-placement="center"
          >
            <Image src={Logo} alt="Logo" className={styles.logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
