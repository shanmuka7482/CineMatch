import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

function ContentCard({ movieVal="Iron man", filterType="Select by category" , filterVal }) {
  const [data, setData] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  const navigate = useNavigate();

  const handleClick = (movieVal) => {
    // Navigate to a new route, passing movieVal as a query parameter
    navigate(`/content?movieVal=${movieVal}&filterType=Select by category&filterVal=`);
  };

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Main API call to get the recommended movie data
        const response = await axios.post("http://127.0.0.1:8000/recommend", {
          movie_title: movieVal || null,
          filter_type: filterType !== "Select by category" ? filterType : null,
          filter_value: filterVal || null,
        });

        const cardData = response.data.rows.flat();
        if(movieVal!==""){
          localStorage.setItem('recentSearch', JSON.stringify(movieVal));
        }
        await fetchImages(cardData); // Fetch images for each movie

      } catch (err) {
        console.error("Error when sending request:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
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
        setData(updatedData); // Update state with card data including images

      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to fetch images");
      }
    };

    fetchData();
  }, [movieVal, filterType, filterVal]); // Dependencies ensure refetch on prop change

  if (loading) return <div className="w-24 m-auto"><CircularProgress color="inherit"/></div>;
  if (error) return <p>{error}</p>;

  return (
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
              alt={card.title || "Movie Poster"}
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              {card.title}
            </h5>
            <p className="mb-2 text-base">
              <span className="font-bold">Genre:</span> {card.genres}
            </p>
            <p className="mb-2 text-base">
              <span className="font-bold">Year:</span> {card.release_date}
            </p>
            <p className="mb-2 text-base">
              <span className="font-bold">Popularity:</span> {card.popularity}
            </p>
            <div className="!text-right">
              <button className="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"
              onClick={()=>handleClick(card.title)}>
                More like This
              </button>
            </div>
          </div>
        </div>
      ))}
              {movieVal}{filterType}{filterVal}
    </div>
  );
}

export default ContentCard;
