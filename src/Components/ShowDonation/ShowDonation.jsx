import { useLoaderData, useParams } from "react-router-dom";

const ShowDonation = () => {
  const load = useLoaderData();

  const { id } = useParams();
  const findDonation = load.find(donation => donation.id === id)
  console.log(findDonation);

    return (
        <div>
      
        </div>
    )
};

export default ShowDonation;
