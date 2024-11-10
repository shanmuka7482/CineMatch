import React, { useState } from "react";
import image from "../images/pexels-steve-28947857.jpg";
import Model from "./Model";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-900 min-h-screen to-indigo-800 py-16 font-[sans-serif] flex items-center">
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Background Image"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-screen-lg mx-auto z-10 text-white flex flex-col items-left space-y-4 font-medium pr-48">
          <h1 className="text-6xl font-bold leading-tight">Find Movie</h1>
          <h1 className="text-6xl font-bold leading-tight">recommendations</h1>
          <h1 className="text-6xl font-bold leading-tight">
            similar to
            <span className="animate-blink text-teal-500">_</span>
          </h1>
          <button
            onClick={openModel}
            type="button"
            className="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Pass the state and close function as props to Model */}
      <Model isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Hero;
