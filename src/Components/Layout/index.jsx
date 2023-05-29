import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import Banner from "../SectionComponent/Banner";
import AboutUs from "../SectionComponent/AboutUs";
import WorkExperince from "../SectionComponent/WorkExperince";
import Skill from "../SectionComponent/Skill";
import Project from "../SectionComponent/Project";
import Cursor from "../Common/Cursor/Cursor";
import SocialMedia from "../SocialMedia/SocialMedia";
import Gmail from "../SocialMedia/Gmail";
import GetInTouch from "../GetInTouch";
import Footer from "../Footer/Footer";

const Layout = () => {

  const [width, setWidth] = useState({
    width: undefined,
  });

  const Resizehandle = () => {
    setWidth({
      width: window.innerWidth,
    });
  };

 
  useEffect(() => {
    Resizehandle();
    window.addEventListener("resize", Resizehandle);
    return () => window.addEventListener("resize", Resizehandle);
  }, []);

  const desktop = width.width > 768;

  return (
    <React.Fragment>
      {desktop && <Cursor />}
      <Header Resize={width.width}/>
      {desktop && <SocialMedia />}
      {desktop && <Gmail />}
      <Banner />
      <AboutUs />
      <WorkExperince />
      <Skill />
      <Project />
      <GetInTouch />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
