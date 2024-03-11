import React from "react";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
const AdminHeader = () => {
  const [showAd, setShowAd] = useState(false);
  const handleShowAd = () => {
    setShowAd(!showAd);
  };
  return (
    <div className="flex flex-col h-auto w-full">
      <div className="flex h-[80px] w-full bg-orange-400 border border-yellow-300 justify-start items-center  rounded-bl-2xl rounded-tr-2xl">
        <p className="text-2xl font-bold text-white ml-5 ">
          Giao diện admin UNICA{" "}
        </p>
      </div>
      <div className="flex flex-row w-[100%] h-[500px]">
        <div className="flex flex-col w-[20%] h-[500px] ">
          <div className="flex flex-col  w-[100%] h-[150px] bg-yellow-600 justify-center px-2 ">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.kHF-c59aD0Ds-HdHfPuXUAAAAA&pid=Api&P=0&h=220"
              alt=""
              className="flex h-[70px] w-[70px] rounded-full"
            />
            <div className="flex flex-col ">
              <p className="text-white text-base font-bold ">ho va ten </p>
              <p className="text-white text-base font-bold ">
                buivan@gmail.com
              </p>
            </div>
          </div>
          <div className="flex w-[100%] h-[300px] flex-col justify items-center  ">
            <div className="flex w-[100%] h-auto flex-col ">
                <div className="flex flex-row justify-between ">
                     <p className="text-white font-bold">User</p>
                <SlArrowDown onClick={handleShowAd} />
                
                </div>
               
                { !showAd ?(<div className="showitem h-[100px] w-[100%] bg-slate-700"></div>) : (<div className="offitem"></div>)}

                </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] h-[500px] "></div>
      </div>
    </div>
  );
};
export default AdminHeader;
