import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "./cards";


const Home = () => {
    const showDonateCards = useLoaderData();
    console.log(showDonateCards);
    return (
      <div>
        <div>
          {" "}
          <Banner showDonateCards={showDonateCards}></Banner>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-36">
          {showDonateCards.map((donateCard) => (
            <Cards key={donateCard.id} donateCard={donateCard}></Cards>
          ))}
        </div>
      </div>
    );
};

export default Home;