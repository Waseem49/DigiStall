import React from "react";
// import axios from "axios";
import { AddProducts } from "../redux/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../redux/AdminSlice";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.admin);
  console.log(status);
  const handleSubmit = (e) => {
    e.preventDefault();
    const imgurl = e.target[0].value;
    const title = e.target[1].value;
    const desc = e.target[2].value;
    const price = e.target[3].value;
    dispatch(AddProducts({ imgurl, title, desc, price }));
    // try {
    //   const res = await axios.post(
    //     "https://easy-erin-viper-kilt.cyclic.app/api/products",
    //     {
    //       imgurl: imgurl,
    //       title: title,
    //       desc: desc,
    //       price: price,
    //     }
    //   );
    //   if (res.status === 200) {
    //     alert("Product Added Successfully");
    //     e.target.reset();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   alert("error: " + error.message);
    // }
  };
  if (status === STATUS.IDLE) {
    alert("Product Added Successfully");
  }
  if (status === STATUS.ERROR) {
    alert("Something went wrong");
  }
  return (
    <div className="adminform">
      <h1>Welcome to Admin Panal</h1>
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <input type="text" placeholder="Paste Image Url" required />
        <input type="text" placeholder="Product Title" required />
        <textarea
          name=""
          cols="30"
          rows="10"
          placeholder="Product Description"
          required></textarea>
        <input type="Number" placeholder="Product Price" required />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AdminPage;
