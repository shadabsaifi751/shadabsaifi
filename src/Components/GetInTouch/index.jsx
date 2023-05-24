import { getInTouch } from "@/Content";
import React, { useRef, useState } from "react";
import { EmailId } from "@/Content";
import FormPopup from "./FormPopup";
import useOutsideClick from "../Common/DetectOutSideClick";

const GetInTouch = () => {

  const ModalRef = useRef(null)
  const [open,setOpen] = useState(false);
  // const [closeModal,setCloseModal] = useState(false);

  useOutsideClick(ModalRef);

  const modalHandle=() =>{
    setOpen(true)
  }
  const closeHandle=() =>{
    setOpen(false)
  }

  return (
    <>
      <section id="Contact" className="pb-8">
        <div className="container mx-auto px-8 lg:px-32">
          <div className="flex flex-col items-center text-center pb-10">
            <h2
              className=" font-Preahvihear text-2xl md:text-3xl text-opacity-75 mb-8"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Get In Touch
            </h2>
            <p className=" text-sm tracking-wider font-light link font-poppins md:w-1/2 mb-5 md:mb-8">
              {getInTouch}
            </p>

            <button
              onClick={modalHandle}
              className="rounded border border-color text-color link hover:text-metal hover:border-metal text-md p-4 py-2"
            >
              Say Hello
            </button>
          </div>
        </div>
      </section>
      <FormPopup ModalRef={ModalRef} Close={closeHandle} isOpen={open}/>
    </>
  );
};

export default GetInTouch;
