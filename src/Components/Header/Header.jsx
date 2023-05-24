/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState } from "react";
import { MenuLink } from "@/Content";
import MobileMenu from "./MobileMenu";
import useOutsideClick from "../Common/DetectOutSideClick/index";
import Image from "next/image";
import Logo from "../../Accects/Icons/logo.svg";
import GradientClip from "./GradientClip";


const Header = ({ Resize }) => {
  const NavigationRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handlehumbargar = () => {
    setNavOpen(true);
  };
  const handlehumbargarClose = () => {
    setNavOpen(false);
  };

  useOutsideClick(NavigationRef, handlehumbargarClose);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  console.log(navOpen);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Mohd_shadab(Resume).pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mohd_shadab(Resume).pdf";
        alink.click();
      });
    });
  };

  return (
    <React.Fragment>
      <GradientClip/>
      <header
        className={`${
          isScrolled ? "ActiveSticky backdrop-blur" : ""
        } border border-solid border-transparent sticky top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50`}
      >
        <div className="container mx-auto">
          <div className="py-4 lg:px-8 mx-4 lg:mx-0">
            <div className="relative flex items-center">
              <a
                className="mr-3 flex-none overflow-hidden md:w-auto"
                href="/"
              >
              <Image src={Logo} alt="logo" width={160}/>
              </a>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-white">
                  <ul className="flex space-x-8">
                    {MenuLink.map((item, key) => (
                      <li key={key}>
                        <a
                          href={`#${item.ref}`}
                          className="text-white font-Jakarta hover:text-sky-500 z-60 link"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex items-center border-l border-white-200 ml-6 ps-5">
                  <button
                    onClick={onButtonClick}
                    className="rounded border border-color text-color link hover:text-metal hover:border-metal text-md p-3 py-1"
                  >
                    Resume
                  </button>
                </div>
              </div>
              {Resize < 992 && (
                <div
                  className={`flex flex-col w-8 gap-2 ml-auto`}
                  onClick={handlehumbargar}
                >
                  <span
                    className={`bg-metal border border-color border-solid`}
                  ></span>
                  <span
                    className={`bg-metal border border-color border-solid`}
                  ></span>
                  <span
                    className={`bg-metal border border-color border-solid`}
                  ></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={navOpen} NavigationRef={NavigationRef} />
    </React.Fragment>
  );
};

export default Header;
