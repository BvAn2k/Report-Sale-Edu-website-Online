import React, { useEffect, useState } from "react";

import { RiHandbagLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./input.css";


const Header = () => {
  const [datas, setDatas] = useState([]);
  const [showNumber, setshowNumber] = useState(0);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/admin");
  };
  const handleSign = () => {
    navigate("/admin");
  };
  const gotocart = () => {
    navigate("/cart");
  };
 

  return (
    <div className="flex flex-col">
      <div className=" flex flex-row h-auto w-[100%]">
        <div className="flex flex-row w-[50%] bg-white justify-center items-center">
          <img
            className="h-[80px] w-[25%]"
            src="https://th.bing.com/th/id/R.a6ab4d30234c1b75ec2db66fcbc887be?rik=QedD2wsjucraFw&pid=ImgRaw&r=0"
            alt="logo "
          />
          <div className="flex flex-row justify-between w-[50%] rounded-3xl h-[40px] bg-white items-center m-5 border hover:border-gray-800 ">
            <input
              className="h-[auto] rounded-3xl border-blue-500 w-[100%] "
              type="text"
              placeholder="    Tìm khóa học , giảng viên "
            ></input>
            <RiSearchLine className="m-3 text-xl" />
          </div>
        </div>
        <div className="flex flex-row h-auto w-[50%] bg-white justify-center items-center">
          <div className="flex flex-row h-auto w-[auto] justify-around">
            <button className="flex flex-row justify items-center m-3  bg-gray-400 rounded-md h-auto p-2 py-1 text-gray-700 hover:bg-gray-500">
              Kích hoạt khóa học <RiHandbagLine className="m-3" />
            </button>
            <button className="flex flex-row justify items-center m-3 bg-orange-500 rounded-md h-auto p-2 py-1 text-white hover:bg-gray-500 ">
              Hội viên <FaPeopleGroup className="m-3" />{" "}
            </button>
            <div className="flex ">
              <FaShoppingCart
                className="text-gray-600 h-[20px] w-[20px] m-auto hover:text-red-800"
                onClick={gotocart}
              />
              <div className="h-[20px] w-[20px] rounded-full bg-black ">
                {showNumber}
              </div>
            </div>
          </div>
          <div className="flex flex-row  w-auto justify-center items-center ml-3">
            <img
              className="h-[25px] w-[25px]"
              src="https://tse2.explicit.bing.net/th?id=OIP.Z-1UkmI3IXf8CVGj8XEVawHaE8&pid=Api&P=0&h=220"
              alt=""
            />
            <button
              className="bg-white rounded-md p-2 m-2 hover:bg-gray-500 "
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
            <button
              className="bg-orange-700 rounded-md p-2 px-5 m-2 hover:bg-gray-500 "
              onClick={handleSign}
            >
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
