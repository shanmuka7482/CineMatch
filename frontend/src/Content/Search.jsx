import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ moviename, Category, filtername }) => {
    const [movieVal, setMovieVal] = useState(moviename);
    const [filterType, setFilterType] = useState(Category);
    const [filterVal,SetFilterVal] = useState(filtername)
  
    const navigate = useNavigate();

    const search = (e) => {
      e.preventDefault();
      navigate(
        `/content?movieVal=${movieVal}&filterType=${filterType}&filterVal=${filterVal}`
      );
    };

    // Function to handle changes in the text input
    const handleTextChange = (e) => {
      setMovieVal(e.target.value);
      if (e.target.value) {
        setFilterType('Select by category'); // Reset the select if text is entered
      }
    };
  
    // Function to handle changes in the select input
    const handleSelectChange = (e) => {
      setFilterType(e.target.value);
      if (e.target.value !== 'Select by category') {
        setMovieVal(''); // Clear text input if select is changed
      }
    };

    const handleFilterChange = (e) => {
      SetFilterVal(e.target.value)
      if (e.target.value !== 'Select by category') {
        setMovieVal('');
      }
    }

  return (
    <div>
      <div className="grid gap-4 mb-4 grid-cols-7 m-3">
        <div className="col-span-2">
          {/* <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Movie Name
          </label> */}
          <input
            type="text"
            name="Movie name"
            id="name"
            className="border-teal-500 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 "
            placeholder="Search"
            required=""
            value={movieVal}
            onChange={handleTextChange}
            disabled={filterType !== "Select by category"}
          />
        </div>
        {/* <div className="">
          <h5 className="text-center text-white">OR</h5>
        </div> */}
        <div className="col-span-2">
          {/* <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Category
          </label> */}
          <select
            id="category"
            name="category"
            value={filterType}
            onChange={handleSelectChange}
            disabled={movieVal !== ""}
            className="border-teal-500 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 "
          >
            <option defaultValue="">Select by category</option>
            <option value="genres">Genres</option>
            <option value="director">Director</option>
            <option value="cast">Cast</option>
            {/* <option value=""></option>
                    <option value=""></option> */}
          </select>
        </div>
        <div className="col-span-2">
          {/* <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Filter Name
          </label> */}
          <input
            type="text"
            name="Movie name"
            id="name"
            className="border-teal-500 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 "
            placeholder="Select filter value"
            required=""
            value={filterVal}
            onChange={handleFilterChange}
            disabled={movieVal !== ""}
          />
        </div>
        <div className="flex justify-center items-center">
        <button
        type="submit"
        className="text-white inline-flex items-center bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-700 dark:focus:ring-teal-900"
        onClick={search}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
          />
        </svg>
        <span className="px-3">
          Search
        </span>
      </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
