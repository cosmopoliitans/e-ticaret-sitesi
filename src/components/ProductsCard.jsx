
import React from "react";
import { useDispatch } from "react-redux";

import { productsCard } from "../redux/actions/card";


const ProductsCard = ({ prd }) => {
 
  const dispatch = useDispatch();
  
  const addCard = () => {
    dispatch(productsCard(prd.id));
    dispatch({ type: "DRAWER", payload: true });
  };

    return (
      <div className="hover:border-blue-700 w-1/5 h-[350px] border rounded-lg m-2  space-y-2">
        <div
          onClick={() => (window.location = `detail/ ${prd.id}`)}
          className="flex flex-col items-center p-1 cursor-pointer"
        >
          <img className="h-32 object-cover" src={prd?.image} alt="" />
          <div className="font-bold h-16 text-center mt-2">
            {(prd?.title).substring(0, 35)}...
          </div>
          <div className="text-center opacity-70 text-sm">
            {(prd?.description).substring(0, 55)}...
          </div>
          <div className="font-bold text-lg text-orange-500">${prd?.price}</div>
        </div>
        <button
          onClick={addCard}
          className="bg-blue-700 w-full p-2 rounded-lg text-white"
        >
          ADD TO BASKET
        </button>
      </div>
    );
}

export default ProductsCard
