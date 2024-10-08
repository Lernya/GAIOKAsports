import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const fetchClothing = async () => {
  try {
    const res = await fetch("http://localhost:8000/products");
    const data = await res.json();
    return data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const MainLayout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchClothing()
      .then((array) => setProducts(array))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Navbar />
      <Outlet context={{ products }} />
      <Footer />
    </>
  );
};

export default MainLayout;
