import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/CartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const { thumbnail, title, description, price } = props;
  const handleadd = () => {
    dispatch(addtocart(props));
  };
  return (
    <div className="product">
      <img src={thumbnail} alt={title} />
      <h2>
        <span>{title}</span> <span>${price}</span>
      </h2>
      <p>{description.substring(0, 60)}</p>
      <button onClick={handleadd}>Add to Cart</button>
    </div>
  );
};

export default Product;
