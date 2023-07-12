import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BsLightbulb,
  BsBasket2Fill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import {GiClothespin} from "react-icons/gi"
import { searchAction } from '../redux/actions/search';
const Navbar = () => {
  const [color, setColor] = useState(false)
  const dispatch = useDispatch();
  const { cardItems } = useSelector(state => state.card);
  const [search, setSearch] = useState("")

    useEffect(() => {
        const root = document.getElementById("root");
        if (color) {
            root.style.backgroundColor = "rgb(17 24 39)";
            root.style.color = "gray";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }, [color])
  const searchPost = (e) => {
    if (e.key === "Enter") {
      dispatch(searchAction(search))
    }
  }
  return (
    <div className="flex items-center justify-between px-8 h-28">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <GiClothespin size={25} className="cursor-pointer" />
          <span className="text-2xl font-bold tracking-wider ml-2">MANDAL</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          value={search}
          onKeyPress={searchPost}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 outline-none rounded-lg"
          type="text"
          placeholder="search"
        />
        <div onClick={() => setColor(!color)}>
          {color ? (
            <BsLightbulb size={25} className="cursor-pointer" />
          ) : (
            <BsFillMoonStarsFill size={25} className="cursor-pointer" />
          )}
        </div>
        <div
          onClick={() => dispatch({ type: "DRAWER", payload: true })}
          className="relative"
        >
          <BsBasket2Fill size={25} className="cursor-pointer" />
          <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
            {cardItems?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar
