import React from "react";
import { useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { SiGoogletranslate } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { BsPenFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { VscSymbolProperty } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuUtensils } from "react-icons/lu";
import AutoImageSlider from "./autoscoll";
const BannerHeader = () => {
  const [showform1, setShowform1] = useState(false);
  const [showform2, setShowform2] = useState(false);
  const [showform3, setShowform3] = useState(false);
  const [showform4, setShowform4] = useState(false);
  const [showform5, setShowform5] = useState(false);
  const [showform6, setShowform6] = useState(false);
  const [showform7, setShowform7] = useState(false);
  const [showform8, setShowform8] = useState(false);
  const [showform9, setShowform9] = useState(false);
  const [showform10, setShowform10] = useState(false);
  const [showform11, setShowform11] = useState(false);
  const [showform12, setShowform12] = useState(false);

  const handleForm1 = () => {
    setShowform1(true);
  };
  const handleForm2 = () => {
    setShowform2(true);
  };
  const handleForm3 = () => {
    setShowform3(true);
  };
  const handleForm4 = () => {
    setShowform4(true);
  };
  const handleForm5 = () => {
    setShowform5(true);
  };
  const handleForm6 = () => {
    setShowform6(true);
  };
  const handleForm7 = () => {
    setShowform7(true);
  };
  const handleForm8 = () => {
    setShowform8(true);
  };
  const handleForm9 = () => {
    setShowform9(true);
  };
  const handleForm10 = () => {
    setShowform10(true);
  };
  const handleForm11 = () => {
    setShowform11(true);
  };
  const handleForm12 = () => {
    setShowform12(true);
  };
  const handleFormleave1 = () => {
    setShowform1(false);
  };
  const handleFormleave2 = () => {
    setShowform2(false);
  };
  const handleFormleave3 = () => {
    setShowform3(false);
  };
  const handleFormleave4 = () => {
    setShowform4(false);
  };
  const handleFormleave5 = () => {
    setShowform5(false);
  };
  const handleFormleave6 = () => {
    setShowform6(false);
  };
  const handleFormleave7 = () => {
    setShowform7(false);
  };
  const handleFormleave8 = () => {
    setShowform8(false);
  };
  const handleFormleave9 = () => {
    setShowform9(false);
  };
  const handleFormleave10 = () => {
    setShowform10(false);
  };
  const handleFormleave11 = () => {
    setShowform11(false);
  };
  const handleFormleave12 = () => {
    setShowform12(false);
  };

  return (
    <div className=" flex justify-center bg-gray-200 ">
      <div className=" relative flex flex-row w-[80%] h-auto mt-4 justify  ">
        <div className=" flex flex-col w-[25%] shadow-lg rounded-md bg-white ml-[100px]                                                                      00px] ">
          <div
            className=" flex flex-row ml-3 justify items-center hover:bg-slate-200"
            onMouseEnter={handleForm1}
            onMouseLeave={handleFormleave1}
          >
            <SiGoogletranslate /> <p className="ml-2"> Ngoại ngữ </p>
            {showform1 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-30">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả ngoại ngữ </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tiếng Nhật</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tiếng Hàn </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Tiếng Đức</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Tiếng Tây</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Tiếng Trung</p>
              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm2}
            onMouseLeave={handleFormleave2}
          >
            <FaChartLine /> <p className="ml-2">Marketing </p>{showform2 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả marketing </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">  facebook</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">mar zalo </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >mar Email</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >mar goole</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >mar sel</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >mar youobe</p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm3}
            onMouseLeave={handleFormleave3}
          >
            <MdComputer /> <p className="ml-2">Tin học văn phòng </p>{showform3 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả tin hoc  </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Exel</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Work </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Goole shwet</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Powerpoint</p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm4}
            onMouseLeave={handleFormleave4}
          >
            <FaRocket /> <p className="ml-2"> Kinh doanh khởi nghiệp </p>{showform4 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả kinh doanh </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Quản trị khách sạn </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Quản trị du lịch </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Kinh tế khoa học</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Quản trị văn phòng </p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm5}
            onMouseLeave={handleFormleave5}
          >
            <FaRegMoneyBillAlt /> <p className="ml-2"> Tài chính kế toán </p>{showform5 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả Tài chính & kế toán   </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tài chính </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Kế toán  </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Chứng khoán </p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm6}
            onMouseLeave={handleFormleave6}
          >
            <IoCartSharp /> <p className="ml-2"> Sale bán hàng </p>{showform6 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả bán hàng  </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Bán hàng shoppe </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Bán hàng lazada  </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >livestrem bán hàng</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Chăm sóc khách hàng </p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm7}
            onMouseLeave={handleFormleave7}
          >
            <BsPenFill /> <p className="ml-2"> Thiết kế và xây dựng </p>{showform7 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả thiết kế & xây dựng </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Thiết kế đồ hoạ</p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Thiết kế nội thất </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Xây dựng công trình </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >xây dựng kiến trúc </p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm8}
            onMouseLeave={handleFormleave8}
          >
            <FaRegLightbulb /> <p className="ml-2">Thiết kế </p>{showform8 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả thiết kế  </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Thiết kế thời trang </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Thiết kế nội thất  </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Thiết kế đồ họa </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Thiết kế mô hình </p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm9}
            onMouseLeave={handleFormleave9}
          >
            <VscSymbolProperty /> <p className="ml-2">Công nghệ </p>{showform9 && (
              <div className="box-item absolute h-[280px] w-[220px] bg-white shadow-lg rounded-md mt-[260px] ml-[290px] flex flex-col z-40">
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Tất cả công nghệ  </p>
<p  className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Công nghệ thông tin </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200">Hệ thống thông tin  </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Thông tin và bảo mật </p>
<p className="h-[20px] w-[auto] text-left m-2 hover:bg-gray-200" >Công nghệ mobile</p>

              </div>
            )}
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm10}
            onMouseLeave={handleFormleave10}
          >
            <GiTechnoHeart /> <p className="ml-2"> Sức khỏe & làm đẹp </p>
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm11}
            onMouseLeave={handleFormleave11}
          >
            <LuUtensils /> <p className="ml-2"> Phong cách sống </p>
          </div>
          <div
            className="flex flex-row ml-3 justify items-center hover:bg-gray-200"
            onMouseEnter={handleForm12}
            onMouseLeave={handleFormleave12}
          >
            <FaPeopleGroup /> <p className="ml-2"> Tình yêu hôn nhân và gia đình </p>
          </div>
        </div>
        <div className=" flex w-[60%] bg-blue-200 z-20 ">
            <AutoImageSlider/>
        </div>
      </div>
    </div>
  );
};
export default BannerHeader;
