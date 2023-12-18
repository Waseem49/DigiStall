import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../redux/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartproduct = useSelector((state) => state.cart);
  const totalprice = cartproduct.reduce((acc, el) => {
    return acc + +el.price;
  }, 0);

  const handledelete = (id) => {
    dispatch(removefromcart(id));
  };

  if (cartproduct.length === 0) {
    return <h1 className="cartempty">Cart Empty...</h1>;
  }

  return (
    <>
      <div className="cartpage">
        <div className="cartlist">
          {cartproduct?.map((el) => (
            <div key={el.id} className="cartitem">
              <img src={el.thumbnail} alt={el.title} />
              <div className="titlebtn">
                <h3>{el.title}</h3>
                <button onClick={() => handledelete(el.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total_price">
          <h1>Your Order Total</h1>
          <h3>Price : ${totalprice}</h3>
        </div>
      </div>
    </>
  );
};

export default CartPage;
