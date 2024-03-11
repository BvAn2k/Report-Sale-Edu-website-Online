import React, { useEffect } from "react";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { Await, useNavigate } from "react-router-dom";
import ProfileDetail from "./profill";
import { FaPlus } from "react-icons/fa";
import "./admin.css";
import { IoPersonSharp } from "react-icons/io5";
import { createUser, getUsers } from "../../services/api";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import ProductList from "./productList";

const AdminHeader = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handlegotoAdduser = () => {
    navigate("/adduser");
  };
  const gotoAddproduct = ()=>{
    navigate('/addproduct')
  }
  const [datas, setdatas] = useState([]);
  const [showAd, setShowAd] = useState(false);
  const [showpro, setShowpro] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const [showFormAdd, setShowFormAdd] = useState(false);
  const [product, setProduct] = useState(false);
  const handleClickProduct = () => {
    setProduct(true);
    setClickUser(false);
  };
  const handleShowFormAdd = () => {
    setShowFormAdd(!showFormAdd);
  };
  const handleShowAd = () => {
    setShowAd(!showAd);
    setClickUser(false);
  };
  const handleshowProduct = () => {
    setShowpro(!showpro);
    setProduct(false);
  };
  const handleShowOrder = () => {
    setShowOrder(!showOrder);
  };
  const [clickUser, setClickUser] = useState(false);
  const handleClickUser = () => {
    setClickUser(true);
   setProduct(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setdatas(result);
    };
    fetchData();
    console.log(datas);
  }, []);

  // const refreshData = async () => {
  //   try {
  //     const userList = await getUsers();
  //     // console.log("userList", userList);
  //     setdatas(userList);
  //   } catch (error) {
  //     // Handle error
  //     // console.error('Error:', error);
  //   }
  // }
  return (
    <div className="flex flex-col h-auto w-full">
      <div className="flex h-[80px] w-full bg-orange-400 border border-yellow-300 justify-start items-center  rounded-bl-2xl rounded-tr-2xl">
        <img src="" alt="" />
        <p className="text-2xl font-bold text-white ml-5 ">
          Giao diện admin UNICA{" "}
        </p>
      </div>
      <div className="flex flex-row w-[100%] h-[auto]">
        <div className="flex flex-col w-[20%] h-[auto] ">
          <div className="flex flex-col  w-[100%] h-[150px] bg-yellow-400 justify-center px-2 ">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.kHF-c59aD0Ds-HdHfPuXUAAAAA&pid=Api&P=0&h=220"
              alt=""
              className="flex h-[70px] w-[70px] rounded-full"
            />
            <div className="flex flex-col ">
              {datas.find((data) => data.id === 2) && (
                <div>
                  <p className="text-white text-base ">
                    {datas.find((data) => data.id === 2).username}
                  </p>
                  <p className="text-white text-base ">
                    {datas.find((data) => data.id === 2).email}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex w-[100%] h-[500px] flex-col  justify items-center bg-orange-400">
            <div className="flex w-[100%] h-auto flex-col bg-yellow-500 m-3 ">
              <div className="flex flex-row justify-between h-[30px] items-center ">
                <div className="flex justify-center items-center ml-3">
                  <IoPersonSharp className="text-white" />
                  <p className="text-white m-3">Quản lí người dùng </p>
                </div>

                <button className=" " onClick={handleShowAd}>
                  {!showAd ? (
                    <span>
                      <SlArrowRight className="inline-block mr-2 text-white text-sm" />
                    </span>
                  ) : (
                    <span>
                      <SlArrowDown className="inline-block mr-2 text-white text-sm" />{" "}
                    </span>
                  )}
                </button>
              </div>

              {!showAd ? (
                <div
                  className="showitem h-[30px] w-[100%] bg-slate-700 hover:bg-gray-500 flex flex-row justify-between items-center"
                  onClick={handleClickUser}
                >
                  <p className="text-gray-400 text-base ml-3 ">
                    Danh sách người dùng 
                  </p>
                  <FaPlus
                    className="text-gray-400 m-3"
                    onClick={handlegotoAdduser}
                  />
                </div>
              ) : (
                <div className="offitem h-[0px] w-[100%]"></div>
              )}
            </div>
            <div className="flex w-[100%] h-auto flex-col bg-yellow-500 m-3">
              <div className="flex flex-row justify-between h-[30px] items-center ">
                <div className="flex justify-center items-center m-3">
                  <FaProductHunt className="text-white" />
                  <p className="text-white  m-3">Quản lí sản phẩm </p>
                </div>

                <button className=" " onClick={handleshowProduct}>
                  {!showpro ? (
                    <span>
                      <SlArrowRight className="inline-block mr-2 text-white text-sm" />
                    </span>
                  ) : (
                    <span>
                      <SlArrowDown className="inline-block mr-2 text-white text-sm" />{" "}
                    </span>
                  )}
                </button>
              </div>

              {!showpro ? (
                <div className=" h-[auto] w-[100%] bg-slate-700 justify-center items-center">
                  <div
                    className="showitem h-[30px] border hover:bg-gray-500 border-gray-500 w-[100%] bg-slate-700 flex justify-center items-center "
                    onClick={handleClickProduct}
                  >
                    <div className="flex justify-between items-center">
                      
                       <p className="text-gray-500 mr-10 "> Danh sách tất các sản phẩm</p>
                       <FaPlus className=" text-gray-400 " onClick={gotoAddproduct}/> 
                    </div>
                  
                   
                  </div>
                  <div className="showitem h-[30px] border hover:bg-gray-500 border-gray-500 w-[100%] bg-slate-700"></div>
                  <div className="showitem h-[30px] border hover:bg-gray-500 border-gray-500 w-[100%] bg-slate-700"></div>
                  <div className="showitem h-[30px] border hover:bg-gray-500 border-gray-500 w-[100%] bg-slate-700"></div>
                </div>
              ) : (
                <div className="offitem h-[0px] w-[100%]"></div>
              )}
            </div>
            <div className="flex w-[100%] h-auto flex-col bg-yellow-500 m-3 ">
              <div className="flex flex-row justify-between h-[30px] items-center ">
                <div className="flex justify-center items-center m-3">
                  <FaCartArrowDown className="text-white" />
                  <p className="text-white  m-3">Quản lí đơn hàng </p>
                </div>

                <button className=" " onClick={handleShowOrder}>
                  {!showOrder ? (
                    <span>
                      <SlArrowRight className="inline-block mr-2 text-white text-sm" />
                    </span>
                  ) : (
                    <span>
                      <SlArrowDown className="inline-block mr-2 text-white text-sm" />{" "}
                    </span>
                  )}
                </button>
              </div>

              {!showOrder ? (
                <div className="showitem h-[30px] w-[100%] bg-slate-700 hover:bg-gray-500"></div>
              ) : (
                <div className="offitem h-[0px] w-[100%]"></div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] h-[auto] justify  ">
          {clickUser ? (
            <div className="h-auto w-full ">
              <ProfileDetail />
            </div>
          ) : (
            <div></div>
          )}{" "}
          {product ? (
            <div>
              <ProductList />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AdminHeader;
