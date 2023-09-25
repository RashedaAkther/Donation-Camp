/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Donations from "./donations";


const Donation = () => {
    const [Cards, setcard] = useState([])
    const [IsShow, setIsShow] = useState(false)
//     const [cardDonate, setCardDonate] = useState([])
//     // setCardDonate(donationList);
//     // console.log(cardDonate);
    
//     useEffect(() => {
        
//         const donationList = JSON.parse(localStorage.getItem("donate"));
//         if (donationList) {
//             setCardDonate(donationList)
//             console.log(cardDonate);
//          }
          
//     }, []
        
//   )

    // const donationList = JSON.parse(localStorage.getItem("donate"));
    // console.log(donationList);
    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('donate'))
        setcard[cards];
        
        console.log(cards);
        if (cards) {
            setcard(cards)
        }
        console.log(Cards);
    }, [])
    



//     const handleSeeAll = () => {
//         const [donation, setDonation] = useState([]);
//         const [donationLists, setDonationLists] = useState(false);
//           const donationList = JSON.parse(localStorage.getItem("donate"));
//           console.log(donationList);
        
//         if (donationList) {
//             setDonation(donationList)
//             console.log(donation);
//       }

        
//   }



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

          {/* {donationList.map((findDonation) => (
            <Donations
              key={findDonation.id}
              findDonation={findDonation}
            ></Donations>
          ))} */}
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