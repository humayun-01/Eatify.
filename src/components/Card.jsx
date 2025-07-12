import React from "react";
import image1 from "../assets/images/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-2xl flex flex-col gap-3 shadow-lg hover:bg-yellow-100 duration-200">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-2xl ">
        <img src={image} alt="" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-semibold text-red-400">{price}/-</div>

        <div className="text-l font-semibold text-red-400 flex justify-center gap-2">
          {type == "veg" ? <LuLeafyGreen /> : <GiChickenLeg />}
          <span>{type}</span>
        </div>
      </div>

      <button
        className="w-full h-[45px] bg-yellow-300 text-white rounded-xl font-semibold text-xl p-2 hover:bg -green-300 hover:text-gray-500"
        onClick={() => {
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          );
          toast.success("item added");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
