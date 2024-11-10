import React from "react";

const cardData = [
  {
    title: "Card 1",
    description:
      "Noteworthy technology acquisitions 2021. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Card 2",
    description:
      "Noteworthy technology acquisitions 2021. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Card 3",
    description:
      "Noteworthy technology acquisitions 2021. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  // Add more card objects as needed
];

function Cardgenerator() {
  return (<>
  <h2 className="py-8 px-10 font-semibold text-2xl">Most Watched Movies</h2>
    <div id="card-container" className="flex flex-wrap px-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="mx-3  flex flex-col self-start rounded-lg bg-slate-100 text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0"
        >
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              {card.title}
            </h5>
            <p className="mb-4 text-base">{card.description}</p>
            <div className="!text-right">
              <button className="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit">
                More like This
              </button>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
}

export default Cardgenerator;
