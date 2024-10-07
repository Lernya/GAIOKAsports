import { useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const { products } = useOutletContext();
  console.log(products);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
