import React, {useEffect, useState} from 'react'
import {
  BsLightbulb,
  BsBasket2Fill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import {GiClothespin} from "react-icons/gi"
const Navbar = () => {
    const [color, setColor] = useState(false)

    useEffect(() => {
        const root = document.getElementById("root");
        if (color) {
            root.style.backgroundColor = "black";
            root.style.color = "gray";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }, [color])
  return (
    <div className="flex items-center justify-between px-3 h-28">
      <div className="flex items-center">
        <GiClothespin size={25} className="cursor-pointer" />
        <span className="text-2xl font-bold tracking-wider ml-2">MANDAL</span>
      </div>
      <div className="flex items-center space-x-4">
        <input
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
        <div className="relative">
          <BsBasket2Fill size={25} className="cursor-pointer" />
          <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar
