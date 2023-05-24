import React from "react";
import styles from "./WorkExperince.module.scss";
import Image from "next/image";
import allince from "../../Accects/Icons/allinceweb.svg";
import Edneed from "../../Accects/Icons/edneed.svg";

const WorkExperince = () => {
  return (
    <section id="Experience" className="pt-16 md:pt-20 pb-0 md:pb-14 lg:pb-32  overflow-hidden">
      <div
        className="container mx-auto px-8 lg:px-32"
      >
        <h2
          className="font-Preahvihear text-center md:text-left mb-10 pt-5 md:pt-14 text-2xl md:text-4xl font-normal tracking-wide"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Work Experience
        </h2>
        <div className={styles.main}>
          <div className={styles.grid}>
            <div
              className={`z-10 flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center w-full gap-8 ${styles.card}`}
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <Image
                src={allince}
                alt="allince web"
                className={styles.brand_Icon}
              />
              <div>
                <h2 className={` font-poppins text-center md:text-left`}>
                  Allince Web Solution Pvt Ltd.
                </h2>
                <p className={` font-poppins text-center md:text-left`}>
                  I specialize in creating intuitive, accessible websites
                  through pixel-perfect frontend development that seamlessly
                  integrates form and function.
                </p>
                <button className="link rounded-md border border-solid border-metal p-4 mt-4 py-2 text-xs tracking-wider bg-primary">
                  Learn more
                </button>
              </div>
            </div>
            <div
              className={`z-10 flex flex-wrap justify-center md:justify-start w-full md:flex-nowrap items-center gap-8 ${styles.card}`}
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <Image src={Edneed} alt="Edneed" height={100} width={100} />
              <div>
                <h2 className={` font-poppins text-center md:text-left`}>
                  Edneed Technology Pvt Ltd.
                </h2>
                <p className={`tracking-wider font-poppins text-center md:text-left`}>
                  I specialize in building visually stunning and responsive
                  frontend applications, bringing web designs to life with clean
                  code and dynamic functionality.
                </p>
                <button className="link rounded-md border border-solid border-metal p-4 mt-4 py-2 text-xs tracking-wider bg-primary">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperince;
