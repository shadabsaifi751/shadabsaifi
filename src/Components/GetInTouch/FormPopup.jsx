import React, { useRef, useState } from "react";
import Modal from "../Common/Modal/modal";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormPopup = ({ Close, isOpen, ModalRef }) => {
  const FormRef = useRef();
  const [contact, setContact] = useState(
    {
      name: "",
      email: "",
      number: "",
      message: "",
    }
  );

  const [formErrors, setFormErrors] = useState({});

  const toastifySuccess = () => {
    toast('Thank you for contact me', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success bg-success',
      toastId: 'notifyToast',
      theme: "light"
    });
  };



  const sendEmail = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!contact.name) {
      errors.name = 'Please enter your name';
    }
    if (!contact.email) {
      errors.email = 'Please enter your email';
    }
    if (!contact.message) {
      errors.message = 'Please enter a message';
    }
    if (!contact.number) {
      errors.number = 'Please enter a number';
    }
    setFormErrors(errors);

    const isValid = !contact.name && !contact.email && !contact.message && !contact.number;

    const contact_Us = {
      name: contact.name,
      email: contact.email,
      number: contact.number,
      message: contact.message,
    }
    console.log(isValid, "valid fields")
    if (!isValid) {
      try {
        await emailjs.send(
          "service_hyyr9xa",
          "template_lvc8gzl",
          contact_Us,
          "3E0IJworTzn9pyQSu"
        );
        // console.log(reset, "contact_Us");
        toastifySuccess();
        setContact({
          name: "",
          email: "",
          number: "",
          message: "",
        })
      } catch (e) {
        console.log(e);
      }

    } else {
      alert("please enter valid information")
    }
  };


  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });

    if (e.target.value.trim().length > 0) {
      console.log('✅ Input is not empty');
    } else {
      console.log('⛔️ Input is empty');
    }

  }

  console.log(contact, "contact")

  return (
    <>
      <Modal ref={ModalRef} onClose={Close} isOpen={isOpen}>
        <div className="relative flex-auto">
          <form className="w-full mt-5" onSubmit={(e) => sendEmail(e)}>
            <div class="relative mb-6">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={contact.name}
                  onChange={onChangeHandle}
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=""
                />
                <label
                  htmlFor="name"
                  class="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Name
                </label>
              </div>
              {formErrors.name && <span className="error text-error">{formErrors.name}</span>}
            </div>
            <div class="relative mb-6">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=""
                  value={contact.email}
                  onChange={onChangeHandle}
                />
                <label
                  htmlFor="email"
                  class="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              {formErrors.email && <span className="error text-error">{formErrors.email}</span>}
            </div>
            <div class="relative mb-6">
              <div>
                <input
                  type="number"
                  id="number"
                  name="number"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=""
                  maxLength={10}
                  value={contact.number}
                  onChange={onChangeHandle}
                />
                <label
                  htmlFor="number"
                  class="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Number
                </label>
              </div>
              {formErrors.number && <span className="error text-error">{formErrors.number}</span>}
            </div>
            <div class="relative mb-6">
              <div>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  class="block h-28 px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  value={contact.message}
                  onChange={onChangeHandle}
                />
                <label
                  htmlFor="message"
                  class="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Message
                </label>
              </div>
              {formErrors.message && <span className="error text-error">{formErrors.message}</span>}
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="text-primary border-primary border font-bold uppercase text-sm px-6 py-2 rounded w-full outline-none focus:outline-none"
              >Send Message</button>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default FormPopup;
