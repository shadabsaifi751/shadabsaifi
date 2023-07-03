import { MenuLink } from "@/Content";
import React from "react";
import styles from "./Header.module.scss"

const MobileMenu = ({open,close, NavigationRef }) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SHADAB-react.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SHADAB-react.pdf";
        alink.click();
      });
    });
  };

  const ActionTOCloseHandle=()=>{
    close(false)
  }
  return (
    <div className={`${open ? `translate-x-0 h-screen w-screen fixed left-0 top-0 z-40 opacity-100 ${styles.overlay}` : "-translate-x-full opacity-0"}`}>
      <div ref={NavigationRef} className={`fixed left-0 top-0 h-screen block z-50 ease-in-out duration-500 bg-primary p-7 lg:hidden items-center ${open ? "translate-x-0 w-60" : "-translate-x-full"}`}>
        <nav className="text-sm leading-6 font-semibold text-white">
          <ul className="flex flex-col space-y-5">
            {MenuLink.map((item, key) => (
              <li key={key} >
                <a
                  className="text-white font-Jakarta hover:text-sky-500 z-60 link"
                  href={`#${item.ref}`}
                  onClick={ActionTOCloseHandle}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center mt-5">
          <button onClick={onButtonClick} className="rounded border border-color text-color link hover:text-metal hover:border-metal text-md p-3 py-1">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
