import React, { useEffect } from "react";
import Product from "../components/Product";
import { fetchProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../redux/ProductSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUS.ERROR) {
    return <h1>SomeThing Went Wrong..</h1>;
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
          {status !== STATUS.LOADING ? (
            data?.data?.map((el) => <Product {...el} key={el._id} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      </div>
    </>
  );
};

export default HomePage;
