import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/CartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const { imgurl, title, desc, price } = props;
  const handleadd = () => {
    dispatch(addtocart(props));
  };
  return (
    <div className="product">
      <img src={imgurl} alt={title} />
      <h2>
        <span>{title}</span> <span>${price}</span>
      </h2>
      <p>{desc.substring(0, 60)}</p>
      <button onClick={handleadd}>Add to Cart</button>
    </div>
  );
};

export default Product;
