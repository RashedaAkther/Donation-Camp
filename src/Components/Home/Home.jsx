import { useLoaderData } from "react-router-dom";
// import Banner from "../Banner/Banner";
import Cards from "./cards";
import { useState } from "react";

const Home = () => {
  const [cardsDetails, setCardsDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const showDonateCards = useLoaderData();

  const handleSearch = () => {
    if (searchValue.trim() === "") {
      setCardsDetails(showDonateCards);
      console.log(cardsDetails);
    } else {
      const filterData = showDonateCards.filter((data) =>
        data.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCardsDetails(filterData);
    }
  };

  return (
    <div>
      <div>
        <div className="card w-full opacity-50  bg-white shadow-lg image-full ">
          <figure>
            <img
              src="./src/assets/colorful-letters-forming-word-donate.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <p className="flex gap-5 mx-40 my-40">
              <input
                style={{ color: "red" }}
                name="search"
                id="value_search"
                value={searchValue}
                className="lg:w-11/12 pl-3 rounded-lg"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                onClick={handleSearch}
                style={{ backgroundColor: "red", color: "white" }}
                className="btn "
              >
                Search
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-36">
        {cardsDetails.length > 0
          ? cardsDetails.map((donateCard) => (
              <Cards key={donateCard.id} donateCard={donateCard}></Cards>
            ))
          : showDonateCards.map((donateCard) => (
              <Cards key={donateCard.id} donateCard={donateCard}></Cards>
            ))}
      </div>
    </div>
  );
};

export default Home;
