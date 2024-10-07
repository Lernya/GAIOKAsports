import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  const { image, title, price, category } = product;
  return (
    <div className="card glass w-96">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end items-center">
          <Link>{category}</Link>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
