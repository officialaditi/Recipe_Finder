import { CiHeart, CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <Link to={`/recipes/${data.id}`} className="links">
      <div className="card">
        <h1 className="card-heading">{data.name}</h1>
        <img src={data.image} alt={data.name} className="img" />
        <div className="fav">
          <h2 className="cuisine">Cuisine: {data.cuisine}</h2>
          <CiHeart className="icon" />
        </div>
        <div className="details">
          <div className="iconDiv1">
            <FaFire className="fireIcon" />
            <span>{data.caloriesPerServing} kcal</span>
          </div>
          <div className="iconDiv2">
            <CiStopwatch className="watchIcon" />
            <span>{data.cookTimeMinutes} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
};