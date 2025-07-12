import React from "react";
import image1 from "../assets/images/image1.avif";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DecreamentQty, IncreamentQty, RemoveItem } from "../redux/cartSlice";

const Card2 = ({ name, id, price, image, qty }) => {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between bg-white">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-5">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-3xl border-2 text-xl border-black">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-black hover:bg-gray-300"
              onClick={() => {
                qty > 1 ? dispatch(DecreamentQty(id)) : qty;
              }}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center text-black ">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-black hover:bg-gray-300"
              onClick={() => {
                dispatch(IncreamentQty(id));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-xl text-black font-semibold">{price}</span>
        <MdDelete
          className="w-[30px] h-[30px] text-red-400"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
};

export default Card2;
