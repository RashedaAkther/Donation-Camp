/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Donations from "./donations";


const Donation = () => {
    const [Cards, setcard] = useState([])
    const [IsShow, setIsShow] = useState(false)

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('donate'))
        setcard[cards];
        
       
        if (cards) {
            setcard(cards)
        }
      
    }, [])
    


    return (
      <div className="grid justify-center items-center mx-auto gap-10">
        <div className="grid md:grid-cols-2 gap-5">
          {IsShow
            ? Cards.map((card) => (
                <Donations key={card.id} findDonation={card}></Donations>
              ))
            : Cards.slice(0, 4).map((card) => (
                <Donations key={card.id} findDonation={card}></Donations>
              ))}

          
        </div>

        <div id="isshow" className="grid justify-center items-center ">
          {Cards.length >= 4 && (
            <button
              style={{ backgroundColor: "#009444", color: "white" }}
              className="btn"
              onClick={() => setIsShow(!IsShow)}
            >
              {IsShow ? "" : "See All"}
              {IsShow
                ? document.getElementById("isshow").classList.add("hidden")
                : ""}
            </button>
          )}
        </div>
      </div>
    );
};

export default Donation;