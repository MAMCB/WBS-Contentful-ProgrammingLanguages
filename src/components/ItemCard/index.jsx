import { Link } from "react-router-dom";
import "./index.css";

const ItemCard = ({ fields, id }) => {
  return (
    <>
      <div className="item-card">
        <img
          className="item-card__image"
          src={fields.thumbnail.fields.file.url}
        />
        <div className="item-card__info-container">
          <h3>{fields.name}</h3>
          <p>{fields.useCase}</p>
          <Link to={`/detail-page/${id}`}>More detail</Link>
        </div>{" "}
      </div>
    </>
  );
};

export default ItemCard;
