import React, { useState } from 'react'
import image from "./images/logo.png"
import { Link } from 'react-router-dom'
import Model from './Home/Model';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [searchVal,setSearchVal] = useState("")

  const navigate = useNavigate()
  
  const search = (e) => {
    e.preventDefault();
    navigate(
      `/content?movieVal=${searchVal}`
    );
  };

  return (
    <header
    className="border-b bg-white font-sans min-h-[60px] px-10 py-2 tracking-wide relative z-50"
  >
    <div
      className="flex flex-wrap justify-between items-center max-lg:gap-y-6 max-sm:gap-x-4"
    >
      <div>
        <Link to="/">
          <img src={image} alt="logo" className="w-24" />
        </Link>
      </div>
      <div
        className="bg-gray-200 border border-gray-200 !focus-within:bg-gray-800 flex px-6 rounded-full h-10 lg:w-2/4 mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="fill-gray-600 mr-3 rotate-90"
        >
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
          ></path>
        </svg>
        <input
          type="search"
          value={searchVal}
          placeholder="Search..."
          id="headder_search"
          onChange={(e)=>setSearchVal(e.target.value)}
          className="w-full outline-none border-0 bg-transparent text-teal-500 font-semibold text-[15px]"
        />
        <button
            type="button"
            onClick={search}
            className="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-4 my-0.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"
          >
            Search
         </button>        

      </div>
      {/* <Link to="/login">
      <button
            type="button"
            className="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"
          >
            Login
      </button>
      </Link> */}
      <a href="https://github.com/shanmuka7482/CineMatch">
        <FaGithub size={"35"}/>
      </a>
    </div>
    <Model isOpen={isModalOpen} onClose={closeModal} />
  </header>
  )
}

export default Header