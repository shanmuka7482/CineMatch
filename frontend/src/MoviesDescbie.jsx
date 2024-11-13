import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MoviesDescbie = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movieVal = params.get("movieName");
  // const [data, setData] = useState([]); // Initialize with an empty array
  // const [recentName,setRecentName] = useState("")

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imgResponse = await axios.get(
          `https://www.omdbapi.com/?apikey=8298fc3b&t=${encodeURIComponent(
            movieVal
          )}`
        );
        setImageUrl(imgResponse.data || ""); // Update state with fetched image data
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
    if (movieVal) {
      fetchImages(); // Call the function to fetch data
    }
    // Log the image URL after it’s been set
  }, [movieVal]);

  return (
    <div>
      {console.log(imageUrl)}
      <div className="mx-3 flex flex-col self-start my-5 rounded-lg bg-slate-100 text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0 items-center">
        <div className="flex justify-center p-6">
          <img
            className="rounded-t-lg h-[30rem] w-96"
            src={imageUrl.Poster}
            alt="Los Angeles Skyscrapers"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            {imageUrl.title}
          </h5>
          <p className="mb-2 text-2xl font-bold">
            <span className="font-bold m-2"> Movie Name:</span> {imageUrl.Title}
          </p>
          <hr className="p-3" />
          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Genere :</span> {imageUrl.Genre}
          </p>
          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Year :</span> {imageUrl.Year}
          </p>
          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Rated :</span> {imageUrl.Rated}
          </p>
          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Runtime :</span> {imageUrl.Runtime}
          </p>
          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Stars :</span> {imageUrl.Actors}
          </p>
          <p className=" text-base">
            <span className="font-bold m-2 text-lg"> Total Box Office :</span>
            {imageUrl.BoxOffice}
          </p>
          <p className=" text-base h-26 flex items-center">
            <span className="font-bold m-2 text-lg">
              Ratings : <br />
            </span>
            {imageUrl &&
              imageUrl.Ratings.map((rating, index) => (
                <span className="m-6">
                  <span className=" font-bold m-2 text-lg">{rating.Source} :</span>
                  {rating.Value} <br />
                </span>
              ))}
            <p className="text-base">
              <span className="font-bold m-2 text-lg"> IMDB Rating :</span>
              {imageUrl.imdbRating}
            </p>
          </p>

          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Director :</span>
            {imageUrl.Director}
          </p>
          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Writiers :</span> {imageUrl.Writer}
          </p>
          <p className="mb-5 text-base">
            <span className="font-bold m-2 text-lg"> Plot :</span> {imageUrl.Plot}
          </p>
          {/* <p className="mb-2 text-base"> <span className="font-bold m-2"> Ratings : <br /> </span> {imageUrl && imageUrl.Ratings.map((rating,index)=>(
                       <span> <span className="font-bold m-2"> {rating.Source} :</span> {rating.Value} <br /></span> 
                    ))}</p> */}
        </div>
        <div className="h-14">
            <Link to={"/"} className="text-right bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit">
                Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesDescbie;
