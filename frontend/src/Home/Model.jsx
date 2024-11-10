import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Model = ({ isOpen, onClose }) => {
  const [movieVal, setMovieVal] = useState("");
  const [filterType, setFilterType] = useState("Select by category");
  const [filterVal, setFilterVal] = useState("");

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(
      `/content?movieVal=${movieVal}&filterType=${filterType}&filterVal=${filterVal}`
    );
  };

  // Other handler functions remain the same
  const handleTextChange = (e) => {
    setMovieVal(e.target.value);
    if (e.target.value) {
      setFilterType("Select by category"); // Reset the select if text is entered
    }
  };

  const handleSelectChange = (e) => {
    setFilterType(e.target.value);
    if (e.target.value !== "Select by category") {
      setMovieVal(""); // Clear text input if select is changed
    }
  };

  const handleFilterChange = (e) => {
    setFilterVal(e.target.value);
    if (e.target.value !== "Select by category") {
      setMovieVal("");
    }
  };

  return (
    <div>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isOpen ? "" : "hidden"
        } overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full`}
      >
        <div className="relative p-4 w-full max-w-screen-lg max-h-screen-lg">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Search
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Movie Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Movie name"
                    value={movieVal}
                    onChange={handleTextChange}
                    disabled={filterType !== "Select by category"}
                  />
                </div>
                <div className="col-span-2">
                  <h5 className="text-center text-white">OR</h5>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    value={filterType}
                    onChange={handleSelectChange}
                    disabled={movieVal !== ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="">Select by category</option>
                    <option value="genres">Genres</option>
                    <option value="Director">Director</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="filterVal"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Filter Name
                  </label>
                  <input
                    type="text"
                    id="filterVal"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Select filter value"
                    value={filterVal}
                    onChange={handleFilterChange}
                    disabled={movieVal !== ""}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-700 dark:focus:ring-blue-800"
                onClick={search}
              >
                <span className="px-3">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
