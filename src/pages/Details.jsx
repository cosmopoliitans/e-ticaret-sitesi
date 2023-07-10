import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products"
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);
  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch])

  console.log("product", products);
  const increment = (stock) => { 
    if (count <= stock) {
      setCount(count + 1)
    }
  }
  const decrement = () => {
     if (count > 0) {
       setCount(count - 1);
     }
  }
  return (
    <div className="w-full flex items-center justify-center space-x-8">
      <img className="w-1/3" src={products?.image} alt="" />
      <div className="w-2/3 space-y-5">
        <div className="font-bold text-xl">{products?.title}</div>
        <div className="opacity-70">{products?.description}</div>
        <div className="opacity-70">Category: {products?.category}</div>
        <div className="opacity-70">
          Rate: {products?.rating?.rate} - Stock: {products?.rating?.count}
        </div>
        <div className="font-bold text-lg">Price: {products?.price}</div>

        <div className="flex items-center space-x-4">
          <CgMathMinus
            onClick={decrement}
            className="cursor-pointer border rounded-full p-1"
            size={30}
          />
          <span className="text-2xl">{count}</span>
          <CgMathPlus
            onClick={() => increment(products?.rating?.count)}
            className="cursor-pointer border rounded-full p-1"
            size={30}
          />
        </div>
        <button className="p-3 w-full bg-indigo-600 text-center rounded-lg text-white text-lg">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Details;
