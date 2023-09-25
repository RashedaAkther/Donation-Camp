// import { useState } from "react";


const Banner = ({ showDonateCards }) => {


 
  const handleSearch = e => {
    e.preventDefault();
    console.log(e.target.search.value);

    // const compare = e.target.search.value;

    // const show = showDonateCards.filter(() => compare == category);

    
    
    
  
}

  return (
    <div>
      <div className="card w-full opacity-50  bg-white shadow-lg image-full ">
        <figure>
          <img
            src="/src/assets/colorful-letters-forming-word-donate.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex">
          <form onSubmit={handleSearch}>
            <p className="flex gap-5 mx-40 my-40">
              <input
                style={{ color: "red" }}
                name="search"
                id="value_search"
                className="lg:w-11/12 rounded-lg"
                type="text"
              />
              <button className="btn ">Search</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;