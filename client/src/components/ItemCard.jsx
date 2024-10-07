import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  const { product_img, product_name, price, category_name } = product;
  return (
    <div className="card glass w-96">
      <figure>
        <img src={product_img} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end items-center">
          <Link>{category_name}</Link>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
