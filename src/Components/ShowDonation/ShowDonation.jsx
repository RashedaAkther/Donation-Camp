import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const ShowDonation = () => {
  const load = useLoaderData();

    const params = useParams();
    console.log(params);
  const findDonation = load.find(
    (donation) => donation.id === parseInt(params.id)
    );
     const {
       id,
       rectangle_picture,
       title,
       category,
       price,
       description,
       card_bg_color,
       text_color,
       button_bg_color,
    } = findDonation;
    
    const handleDonateBtn = () => { 
       
        const donateItem = JSON.parse(localStorage.getItem('donate'))

         const donateData = [];
        if (donateItem) {

            
            const isExist = donateItem.find((donationPrice) => donationPrice.id === id);
            
            if (isExist) {
                swal("Opps !", "Youu have already donate ", "error", {
                    button: "Aww Remember!",
                });
            }
            else { 
                donateData.push(...donateItem, findDonation);
              localStorage.setItem('donate', JSON.stringify(donateData));
                swal("Good job!", "You clicked the button!", "success", {
                  button: "Aww yiss!",
                });
          
            }

        }
        else { 

             donateData.push(findDonation);
            localStorage.setItem('donate', JSON.stringify(donateData));
           

             swal("Good job!", "You clicked the button!", "success", {
               button: "Aww yiss!",
             });
        }



    }
 

    return (
      <div>
        <div className="card">
          <div>
            <figure>
              <img
                className="w-full lg:h-[490px]"
                src={rectangle_picture}
                alt=""
              />
            </figure>

            <p className="relative bg-gray-700 opacity-75 -mt-[70px] rounded-lg">
              <button onClick={handleDonateBtn}
                style={{ background: text_color, color: "white" }}
                className="btn mx-3 my-3"
              >
                Donate: {price} $
              </button>
            </p>
                </div>
                
                <p className="text-2xl font-semibold">{ category}</p>
                <p >{ description}</p>
        </div>
      </div>
    );
};

export default ShowDonation;
