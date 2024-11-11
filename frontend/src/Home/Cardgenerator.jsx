import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Cardgenerator() {
  const [data, setData] = useState([]); // Initialize with an empty array
  const [recentName,setRecentName] = useState("")
  const navigate = useNavigate();

  const handleClick = (movieVal) => {
    // Navigate to a new route, passing movieVal as a query parameter
    navigate(`/content?movieVal=${movieVal}&filterType=Select by category&filterVal=`);
  };

  useEffect(() => {
    // Fetch data from the API once the component mounts
      console.log("useEffect called.")
      const name = JSON.parse(localStorage.getItem('recentSearch'));
      if (name) {
      setRecentName(name);
      }
    if(name){
      const fetchData = async () => {
        try {
          // Main API call to get the recommended movie data
          const response = await axios.post("http://127.0.0.1:8000/recommend", {
            movie_title: recentName || null,
            filter_type: null,
            filter_value: null,
          });
  
          const cardData = response.data.rows.flat();

          await fetchImages(cardData); // Fetch images for each movie
  
        } catch (err) {
          console.error("Error when sending request:", err);
      
        } 
      };
  
      const fetchImages = async (cardData) => {
        try {
          const updatedData = await Promise.all(
            cardData.map(async (card) => {
              if (card.title) {
                const imgResponse = await axios.get(
                  `https://www.omdbapi.com/?apikey=8298fc3b&t=${encodeURIComponent(card.title)}`
                );
                return { ...card, imageUrl: imgResponse.data.Poster || "" };
              }
              return { ...card, imageUrl: "" };
            })
          );
          setData(updatedData); // Update state with card data including image
        } catch (err) {
          console.error("Error fetching images:", err);
        }
      };
  
      fetchData();
    }else{
      const fetchPopularData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/popular");
          const cardData = response.data;
  
          // Update data with fetched card information
          setData(cardData);
  
          // After card data is fetched, fetch images for each card
          await fetchPopularImages(cardData);
        } catch (error) {
          console.log("Error when sending request: ", error);
        }
      };
      
      // Fetch image URLs from a separate API for each card using the card title
      const fetchPopularImages = async (cardData) => {
        try {
          const updatedData = await Promise.all(
            cardData.map(async (card) => {
              const imgResponse = await axios.get(
                `https://www.omdbapi.com/?apikey=8298fc3b&t=${encodeURIComponent(card.title)}`
              );
              return { ...card, imageUrl: imgResponse.data.Poster };
            })
          );
          setData(updatedData); // Update state with card data including images
        } catch (error) {
          console.log("Error fetching images: ", error);
        }
      };
  
      fetchPopularData();
    }

  }, [recentName]); // Empty dependency array ensures this only runs on mount

  console.log(data)

  
  
  return (
    <>
      {
        recentName?(
          <>
            <h2 className="py-8 px-10 font-semibold text-2xl">Since Your Searched For "{recentName}"</h2>
            <div id="card-container" className="grid grid-cols-3 gap-2 px-5">
              {data.map((card, index) => (
                <div
                  key={index}
                  className="mx-3 flex flex-col self-start my-5 rounded-lg bg-slate-100 text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0"
                >
                  <div className="flex justify-center p-6">
                    <img
                      className="rounded-t-lg h-[30rem] w-96"
                      src={card.imageUrl}
                      alt="Los Angeles Skyscrapers"
                    /></div>
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">
                      {card.title}
                    </h5>
                    <p className="mb-2 text-base"> <span className="font-bold"> Genere:</span> {card.genres}</p>
                    <p className="mb-2 text-base"> <span className="font-bold"> Year:</span> {card.release_date.substring(0, 4)}</p>
                    <p className="mb-2 text-base"> <span className="font-bold"> Popularity:</span> {card.popularity.toString().substring(0,3)}</p>
                    <div className="!text-right">
                      <button className="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"
                      onClick={()=>handleClick(card.title)}>
                        More like This
                      </button>
                    </div>
                  </div>
            </div>
        ))}
      </div>
          </>
        ):(
          <>
              <h2 className="py-8 px-10 font-semibold text-2xl">Most Watched Movies</h2>
              <div id="card-container" className="grid grid-cols-3 gap-2 px-5">
                {data.map((card, index) => (
                  <div
                    key={index}
                    className="mx-3 flex flex-col self-start my-5 rounded-lg bg-slate-100 text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0"
                  >
                    <div className="flex justify-center p-6">
                      <img
                        className="rounded-t-lg h-[30rem] w-96"
                        src={card.imageUrl}
                        alt="Los Angeles Skyscrapers"
                      /></div>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight">
                        {card.title}
                      </h5>
                      <p className="mb-2 text-base"> <span className="font-bold"> Genere:</span> {card.genres}</p>
                      <p className="mb-2 text-base"> <span className="font-bold"> Year:</span> {card.release_date.substring(0, 4)}</p>
                      <p className="mb-2 text-base"> <span className="font-bold"> Popularity:</span> {card.popularity.toString().substring(0,3)}</p>
                      <div className="!text-right">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"
                        onClick={()=>handleClick(card.title)}>
                          More like This
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </>
        )
      }
    </>
  );
}

export default Cardgenerator;
