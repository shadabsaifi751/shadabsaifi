import Image from "next/image";
import React from "react";
import styles from "./ProjectSection.module.scss";

const ProjectSection = (
  {
    title,
    projectName,
    discription,
    RepoUrl,
    technology,
    LayoutChange,
    image,
    url,
  },
  ...props
) => {
  return (
    <React.Fragment>
      <div className={` pb-10 md:pb-32`}>
        <div className="grid grid-cols-1 md:grid-cols-12 items-start relative gap-8 md:gap-0">
          {LayoutChange ? (
            <React.Fragment>
              <div
                className={`overflow-hidden rounded-2xl border border-primary ${styles.left_panel} ${styles.Even_Active} bg-Icon hover:bg-transparent`}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image
                  src={image}
                  alt="Project"
                  height={354}
                  className={`${styles.sepia_filter}`}
                />
              </div>
              <div
                className={`${styles.right_panel}  ${styles.Even_Active} z-10`}
              >
                <h5
                  className="font-poppins md:text-end text-base font-semibold  tracking-wide text-color mb-3"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  {title}
                </h5>
                <h2
                  className="font-Preahvihear  md:text-end text-2xl md:text-3xl text-opacity-75 mb-8"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  {projectName}
                </h2>
                <div
                  className={`mb-3 md:mb-5 rounded-xl px-4 py-3 md:px-6 md:py-4 ${styles.card_title} backdrop-blur-md`}
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <p
                    className={`text-sm  md:text-end tracking-wider font-light link font-poppins aos-init aos-animate`}
                  >
                    {discription}
                  </p>
                </div>
                <div
                  className={`flex gap-2 lg:gap-4 flex-wrap justify-start md:justify-end items-center ${styles.Icon_group}`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  {technology &&
                    technology.map((item, key) => (
                      <span
                        className={`link font-Preahvihear text-xs md:text-sm `}
                        key={key}
                      >
                        {item}
                      </span>
                    ))}
                  {RepoUrl && (
                    <a href={RepoUrl} target="_blank">
                      <i className={`${styles.Icon_Github} link`}></i>
                    </a>
                  )}
                  {url && (
                    <a href={url} target="_blank" className="order-1">
                      <i className={`${styles.Icon_Link} link`}></i>
                    </a>
                  )}
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={`${styles.left_panel} z-10`}>
                <h5
                  className="font-poppins text-base font-semibold  tracking-wide text-color mb-3"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  {title}
                </h5>
                <h2
                  className="font-Preahvihear text-2xl md:text-3xl text-opacity-75 mb-8"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  {projectName}
                </h2>
                <div
                  className={`mb-3 md:mb-5 rounded-xl px-4 py-3 md:px-6 md:py-4 ${styles.card_title} backdrop-blur-md`}
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <p
                    className={`text-sm tracking-wider font-light link font-poppins aos-init aos-animate`}
                  >
                    {discription}
                  </p>
                </div>
                <div
                  className={`flex gap-2 lg:gap-4 flex-wrap items-center ${styles.Icon_group}`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  {RepoUrl && (
                    <a href={RepoUrl} target="_blank">
                      <i className={`${styles.Icon_Github} link`}></i>
                    </a>
                  )}
                  {url && (
                    <a href={url} target="_blank">
                      <i className={`${styles.Icon_Link} link`}></i>
                    </a>
                  )}
                  {technology &&
                    technology.map((item, key) => (
                      <span
                        className={`link font-Preahvihear text-xs md:text-sm`}
                        key={key}
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
              <div
                className={`overflow-hidden rounded-2xl border border-primary ${styles.right_panel} bg-Icon`}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image
                  src={image}
                  alt="Project1"
                  className={`${styles.sepia_filter}`}
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectSection;
