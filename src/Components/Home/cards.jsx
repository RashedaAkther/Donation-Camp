import { Link } from "react-router-dom";


const Cards = ({donateCard}) => {
    const {id,picture,title,category,card_bg_color,text_color,button_bg_color} = donateCard;
    return (
      <div>
        <Link to={`/show_donation/${id}`}>
          <div
            style={{ background: card_bg_color }}
            className="card h-96 w-full shadow-xl"
          >
            <figure className="px-2 pt-2">
              <img src={picture} alt="" />
            </figure>
            <div className="card-actions my-3 mx-4">
              <button
                style={{ background: button_bg_color, color: text_color }}
                className="btn"
              >
                {category}
              </button>
            </div>
            <div className="card-body">
              <h2 style={{ color: text_color }} className="card-title">
                {title}
              </h2>
              <p></p>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default Cards;