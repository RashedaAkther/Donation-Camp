import { Link } from "react-router-dom";

const Donations = ({ findDonation }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg_color,
    text_color,
    button_bg_color,
  } = findDonation;

  return (
    <div>
      <div
        style={{ background: card_bg_color }}
        className="card  w-full shadow-xl mx-auto grid grid-cols-2 justify-center  "
      >
        <div>
          <figure className="h-full px-2 py-2">
            <img src={picture} alt="" />
          </figure>
        </div>
        <div className="card-actions mx-3 my-3">
          <button
            style={{ background: button_bg_color, color: text_color }}
            className="btn "
          >
            {category}
          </button>

          <h2 style={{ color: text_color }} className="card-title">
            {title}
          </h2>

          <Link to={`/show_donation/${id}`}>
            <button
              style={{ background: text_color, color: "white" }}
              className="btn  "
            >
              See Details
            </button>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donations;
