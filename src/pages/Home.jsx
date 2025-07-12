import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Category from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  let { cate, setCate, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let new_list = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(new_list);
    }
  }

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = 40;
  let taxes = (subtotal * 0.5) / 100;
  let donation = 3;
  let total = subtotal + deliveryFee + taxes + donation;

  return (
    <div className="bg-red-500 w-full min-h-screen m-0 p-0 ">
      <Nav />
      <div className="flex flex-wrap justify-center item-center gap gap-5 ">
        {Category.map((item) => {
          return (
            <div
              className="w-[125px] h-[140px] bg-white p-5  flex flex-col-reverse gap-5 text-gray-500 font-semibold text-[20px] rounded-lg shadow-2xl hover:bg-yellow-100 transition-all duration-200 "
              onClick={() => filter(item.name)}
            >
              {item.name}
              {item.image}
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-wrap gap-5 py-10 items-center justify-center pb-100">
        {cate.length > 1 ? (
          cate.map((item) => (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-white text-xl font-semibold">
            No Dish found...
          </div>
        )}
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-red-500 shadow-2xl p-6 overflow-y-auto transform transition-transform duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center ">
          <span className="text-yellow-400 underline text-[18px] font-semibold">
            Order items
          </span>
          <RxCross2
            className="w-[45px] h-[50px] text-yellow-400 text-[18px] font-semibold cursor-pointer hover:text-gray-400"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div className="w-full mt-8 flex flex-col gap-5">
              {items.map((item) => (
                <Card2
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            <div className="w-full border-t-2 border-gray-400 mt-0 flex flex-col gap-2 p-2 "></div>
            <div className="w-full flex justify-between items-center bg-white">
              <span className="text-l">Subtotal</span>
              <span className="text-l text-black ">Rs{subtotal}/-</span>
            </div>
            <div>
              <div className="w-full flex justify-between items-center bg-white">
                <span className="text-l">DeliveryFee</span>
                <span className="text-l text-black ">Rs{deliveryFee}/-</span>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between items-center bg-white">
                <span className="text-l">TAX</span>
                <span className="text-l text-black ">Rs{taxes}/-</span>
              </div>

              <div className="w-full flex justify-between items-center bg-white">
                <span className="text-l">Donation</span>
                <span className="text-l text-black ">Rs{donation}/-</span>
              </div>

              <div className="w-full flex justify-between items-center text-xl font-semibold bg-white">
                <span className="text-l">Total</span>
                <span className="text-l text-black ">Rs{total}/-</span>
              </div>
            </div>
            <button
              className="w-[80%] h-[40px] bg-yellow-400 rounded-xl font-semibold text-white text-xl p-2 hover:bg-white hover:text-gray-500 mt-3"
              onClick={() => toast.success("Order Confirm")}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-yellow-400 text-xl underline font-bold">
            Empty Cart
          </div>
        )}
      </div>
      <div>
        <footer class="bg-yellow-400 text-white">
          <div class="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            <div class="text-5xl font-bold">
              <span class="text-red-500">Eat</span>
              <span class="text-white hover:text-red-400">ify.</span>
            </div>

            <nav class="flex flex-col md:flex-row gap-4 text-lg ">
              <a href="#" class=" hover:text-red-400">
                Home
              </a>
              <a
                href="https://www.instagram.com/humayunkhan.1"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-red-400"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/918791492995"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-red-400"
              >
                Contact
              </a>
            </nav>
          </div>

          <div class="text-center text-sm md:text-base text-white border-t border-white py-4">
            &copy; 2025 Eatify. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
