import React, { useContext, useEffect } from "react";
import { IoFastFood } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { PiShoppingCartBold } from "react-icons/pi";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input) ||
        item.food_name.toUpperCase().includes(input)
    );
    setCate(newlist);
  }, [input]);
  let item = useSelector((state) => state.cart);
  console.log(item);

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-8 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
      <IoFastFood className="w-[30px] h-[30px] text-black"/>
      </div>
      <form
        className="h-[60px] w-[45%] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <BiSearchAlt className="text-black size-[30px]" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-[100%] outline-0 text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-2xl relative cursor-pointer"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span>{item.length}</span>
        <PiShoppingCartBold className="size-8 text-black" />
      </div>
    </div>
  );
}

export default Nav;
