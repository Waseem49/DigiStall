import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { fetchProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../redux/ProductSlice";
import Loader from "../components/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [page]);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((p) => p + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (status === STATUS.ERROR) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <>
      <div className="carasol">
        <img
          src="https://admin.digistall.in/static/media/Background.1023ffd8ff4485a2767a.png"
          alt="homepage"
        />
      </div>
      <div className="yourall">
        <h1>Your All Products</h1>
        <div></div>
      </div>
      <div className="productlist">
        <>
          {data?.map((el) => (
            <Product {...el} key={el.id} />
          ))}
        </>
      </div>
      {page < 10 ? status === STATUS.LOADING && <Loader /> : ""}
    </>
  );
};

export default HomePage;
