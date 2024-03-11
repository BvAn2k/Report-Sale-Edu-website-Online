import React, { useEffect } from "react";
import "./animation.css";
import { MdOutlineStarRate } from "react-icons/md";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { getProducts } from "../../../services/api";
import Body2 from "./body2";

const BodyHeader = () => {



  
  const [onMouse, setOnMouse] = useState(false);
  const [onMouse2, setOnMouse2] = useState(false);
  const [onMouse3, setOnMouse3] = useState(false);
  const [onMouse4, setOnMouse4] = useState(false);
  const [onMouse5, setOnMouse5] = useState(false);
  const [onMouse6, setOnMouse6] = useState(false);
  const [onMouse7, setOnMouse7] = useState(false);
  const [onMouse8, setOnMouse8] = useState(false);
  const [onMouse9, setOnMouse9] = useState(false);
  const [onMouse10, setOnMouse10] = useState(false);
  const [onMouse11, setOnMouse11] = useState(false);
  const [onMouse12, setOnMouse12] = useState(false);
  const [onMouse13, setOnMouse13] = useState(false);
  const [onMouse14, setOnMouse14] = useState(false);
  const [onMouse15, setOnMouse15] = useState(false);
  const [onMouse16, setOnMouse16] = useState(false);

  const handleOnMouse = () => {
    setOnMouse(true);
  };
  const handleUnMouse = () => {
    setOnMouse(false);
  };
  const handleOnMouse2 = () => {
    setOnMouse2(true);
  };
  const handleUnMouse2 = () => {
    setOnMouse2(false);
  };
  const handleOnMouse3 = () => {
    setOnMouse3(true);
  };
  const handleUnMouse3 = () => {
    setOnMouse3(false);
  };
  const handleOnMouse4 = () => {
    setOnMouse4(true);
  };
  const handleUnMouse4 = () => {
    setOnMouse4(false);
  };
  const handleOnMouse5 = () => {
    setOnMouse5(true);
  };
  const handleUnMouse5 = () => {
    setOnMouse5(false);
  };
  const handleOnMouse6 = () => {
    setOnMouse6(true);
  };
  const handleUnMouse6 = () => {
    setOnMouse6(false);
  };
  const handleOnMouse7 = () => {
    setOnMouse7(true);
  };
  const handleUnMouse7 = () => {
    setOnMouse7(false);
  };
  const handleOnMouse8 = () => {
    setOnMouse8(true);
  };
  const handleUnMouse8 = () => {
    setOnMouse8(false);
  };
  const handleOnMouse9 = () => {
    setOnMouse9(true);
  };
  const handleUnMouse9 = () => {
    setOnMouse9(false);
  };
  const handleOnMouse10 = () => {
    setOnMouse10(true);
  };
  const handleUnMouse10 = () => {
    setOnMouse10(false);
  };
  const handleOnMouse11 = () => {
    setOnMouse11(true);
  };
  const handleUnMouse11 = () => {
    setOnMouse11(false);
  };
  const handleOnMouse12 = () => {
    setOnMouse12(true);
  };
  const handleUnMouse12 = () => {
    setOnMouse12(false);
  };
  const handleOnMouse13 = () => {
    setOnMouse13(true);
  };
  const handleUnMouse13 = () => {
    setOnMouse13(false);
  };
  const handleOnMouse14 = () => {
    setOnMouse14(true);
  };
  const handleUnMouse14 = () => {
    setOnMouse14(false);
  };
  const handleOnMouse15 = () => {
    setOnMouse15(true);
  };
  const handleUnMouse15 = () => {
    setOnMouse15(false);
  };
  const handleOnMouse16 = () => {
    setOnMouse16(true);
  };
  const handleUnMouse16 = () => {
    setOnMouse16(false);
  };
  const [success, setSuccess] = useState(false);
  const handleButton = () => {
    setOnMouse(false);
    setOnMouse2(false);
    setOnMouse3(false);
    setOnMouse4(false);
    setOnMouse5(false);
    setOnMouse6(false);
    setOnMouse7(false);
    setOnMouse8(false);
    setOnMouse9(false);
    setOnMouse10(false);
    setOnMouse11(false);
    setOnMouse12(false);
    setOnMouse13(false);
    setOnMouse14(false);
    setOnMouse15(false);
    setOnMouse16(false);
  };
  const [datas, setdatas] = useState([]);


  useEffect(() => {
      const fetchData = async () => {
        const data = await getProducts();
        setdatas(data);
        console.log(datas);
        // console.log(datas);
      };
      fetchData();
    }, []);

  const handleShowSuss = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    setSuccess(true);
  };
  const handleTong = () => {
    handleButton();
    handleShowSuss();
  };

  return (
    <div className="bg-[#f5f5f5]">
      {success && (
        <div className="sucess-cart z-40 flex  flex-col  h-[200px] w-[300px] justify-center items-center rounded-lg">
          <FaCheckCircle className="text-green-500 text-2xl" />
          <p className="text-white font-bold text-base mt-5 ">
            Thêm vào thành công{" "}
          </p>
        </div>
      )}
      <div className="flex flex-wrap h-auto w-[90%] m-auto mt-8 justify-around bg-[#f5f5f5] ">
        <div className="flex flex-row justify-between items-center w-[100%]">
          <p className="text-black text-lg font-bold">Sưu ưu đãi hôm nay </p>
          <p className="text-black text-md">Xem thêm </p>
        </div>
        <div
          className="animation-box flex h-[310px] w-[310px] bg-white mt-5 rounded-md shadow-2xl"
          onMouseEnter={handleOnMouse}
          onMouseLeave={handleUnMouse}
        >
          <div className="absolute bg-red-600 h-[30px] w-[50px] text-white rounded-tl-md">
            -63%
          </div>
          <div className="flex flex-col justify items-center ">
            <img
              className="h-[150px] w-[310px] rounded-md "
              src="https://static.unica.vn/upload/images/2019/04/25-chieu-thuc-phat-trien-ky-nang-giao-tiep_m_1555575149.jpg"
              alt=""
            />
            <p className="text-base font-bold mt-3">
              25 chiêu thức phát triển kĩ năng giao tiếp thuyết phục bất kì ai{" "}
            </p>
            <div className="flex flex-row justify-center mt-5">
              <div className=" flex flex-col mr-5">
                <p className="text-sm text-gray-600">Andy Huynh ngoc minh</p>
                <p className="flex flex-row justify items-center">
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  (100)
                </p>
              </div>
              <div className=" flex flex-col ml-5">
                <p className="text-sm">800.000 đ</p>
                <p className="text-lg font-bold ">600.000 đ</p>
              </div>
            </div>
          </div>
          {onMouse && (
            <div className="item-mouse absolute z-20 bg-white h-[auto] w-[330px] rounded-md  shadow-2xl flex flex-col justify-center px-3 py-5">
              <p className="text-lg font-bold">
                25 chiêu thức phát triền kĩ năng giao tiếp trinh phục bất cứ ai{" "}
              </p>
              <p>
                Xây dựng mối quan hệ, đàm phán được hợp đồng, chinh phục bất kỳ
                đồng nghiệp, khách hàng, đối tác... với 25 chiêu thức phát triển
                k
              </p>

              <div className="flex flex-col w-[80%] ml-8 mb-3">
                <p className="text-gray-800 flex flex-row justify items-center text-left ">
                  <IoMdCheckmark className=" mr-2" />
                  Cung cấp tư duy đúng về con người trong giao tiếp
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Hài hòa hơn trong việc xây dựng mối quan hệ
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Được cung cấp những công thức để giao tiếp chinh phục tuyệt
                  vời
                </p>
              </div>

              <button
                className="bg-green-500 py-3 px-2 rounded-md text-white font-bold text-lg flex flex-row justify-center items-center"
                onClick={handleTong}
              >
                <FaCartPlus className="mr-3" />
                Thêm vào giỏ hàng{" "}
              </button>
            </div>
          )}
        </div>
        <div
          className="animation-box flex h-[310px] w-[310px] bg-white mt-5 rounded-md shadow-2xl"
          onMouseEnter={handleOnMouse2}
          onMouseLeave={handleUnMouse2}
        >
          {" "}
          <div className="absolute z-0 bg-red-600 h-[30px] w-[50px] text-white rounded-tl-md">
            -63%
          </div>
          <div className="flex flex-col justify items-center ">
            <img
              className="h-[150px] w-[310px] rounded-md "
              src="https://static.unica.vn/upload/images/2019/04/tu-do-tai-chinh-cung-chung-khoan_m_1555558460.jpg"
              alt=""
            />
            <p className="text-base font-bold mt-3 mb-5">
              Tự do tài chính cùng chứng khoán{" "}
            </p>
            <div className="flex flex-row justify-center mt-5">
              <div className=" flex flex-col mr-5">
                <p className="text-sm text-gray-600">Đặng trọng khang </p>
                <p className="flex flex-row justify items-center">
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  (596)
                </p>
              </div>
              <div className=" flex flex-col ml-5">
                <p className="text-sm">800.000 đ</p>
                <p className="text-lg font-bold ">600.000 đ</p>
              </div>
            </div>
          </div>
          {onMouse2 && (
            <div className="item-mouse absolute z-20 bg-white h-[auto] w-[330px] rounded-xl shadow-2xl flex flex-col justify-center px-2 py-3">
              <p className="text-lg font-bold mt-3">
                25 chiêu thức phát triền kĩ năng giao tiếp trinh phục bất cứ ai{" "}
              </p>
              <p>
                Xây dựng mối quan hệ, đàm phán được hợp đồng, chinh phục bất kỳ
                đồng nghiệp, khách hàng, đối tác... với 25 chiêu thức phát triển
                k
              </p>

              <div className="flex flex-col w-[80%] ml-8 mb-3">
                <p className="text-gray-800 flex flex-row justify items-center text-left ">
                  <IoMdCheckmark className=" mr-2" />
                  Cung cấp tư duy đúng về con người trong giao tiếp
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Hài hòa hơn trong việc xây dựng mối quan hệ
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Được cung cấp những công thức để giao tiếp chinh phục tuyệt
                  vời
                </p>
              </div>

              <button
                onClick={handleTong}
                className="bg-green-500 py-3 px-2  rounded-md text-white font-bold text-lg flex flex-row justify-center items-center "
              >
                <FaCartPlus className="mr-3" />
                Thêm vào giỏ hàng{" "}
              </button>
            </div>
          )}
        </div>
        <div
          className="animation-box flex h-[310px] w-[310px] bg-white mt-5 rounded-md shadow-2xl"
          onMouseEnter={handleOnMouse3}
          onMouseLeave={handleUnMouse3}
        >
          {" "}
          <div className="absolute bg-red-600 h-[30px] w-[50px] text-white rounded-tl-md">
            -63%
          </div>
          <div className="flex flex-col justify items-center ">
            <img
              className="h-[150px] w-[310px] rounded-md "
              src="https://static.unica.vn/upload/images/2019/04/khoa-hoc-nhap-mon-chung-khoan_m_1555570756.jpg"
              alt=""
            />
            <p className="text-base font-bold mt-3">
              25 chiêu thức phát triển kĩ năng giao tiếp thuyết phục bất kì ai{" "}
            </p>
            <div className="flex flex-row justify-center mt-5">
              <div className=" flex flex-col mr-5">
                <p className="text-sm text-gray-600">Andy Huynh ngoc minh</p>
                <p className="flex flex-row justify items-center">
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  (100)
                </p>
              </div>
              <div className=" flex flex-col ml-5">
                <p className="text-sm">800.000 đ</p>
                <p className="text-lg font-bold ">600.000 đ</p>
              </div>
            </div>
          </div>
          {onMouse3 && (
            <div className="item-mouse  absolute z-20 bg-white h-[auto] w-[330px] rounded-md  shadow-2xl flex flex-col justify-center px-3 py-5">
              <p className="text-lg font-bold">
                25 chiêu thức phát triền kĩ năng giao tiếp trinh phục bất cứ ai{" "}
              </p>
              <p>
                Xây dựng mối quan hệ, đàm phán được hợp đồng, chinh phục bất kỳ
                đồng nghiệp, khách hàng, đối tác... với 25 chiêu thức phát triển
                k
              </p>

              <div className="flex flex-col w-[80%] ml-8 mb-3">
                <p className="text-gray-800 flex flex-row justify items-center text-left ">
                  <IoMdCheckmark className=" mr-2" />
                  Cung cấp tư duy đúng về con người trong giao tiếp
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Hài hòa hơn trong việc xây dựng mối quan hệ
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Được cung cấp những công thức để giao tiếp chinh phục tuyệt
                  vời
                </p>
              </div>

              <button
                className="bg-green-500 py-3 px-2 rounded-md text-white font-bold text-lg flex flex-row justify-center items-center"
                onClick={handleTong}
              >
                <FaCartPlus className="mr-3" />
                Thêm vào giỏ hàng{" "}
              </button>
            </div>
          )}
        </div>
        <div
          className="animation-box flex h-[310px] w-[310px] bg-white mt-5 rounded-md shadow-2xl"
          onMouseEnter={handleOnMouse4}
          onMouseLeave={handleUnMouse4}
        >
          {" "}
          <div className="absolute bg-red-600 h-[30px] w-[50px] text-white rounded-tl-md">
            -63%
          </div>
          <div className="flex flex-col justify items-center ">
            <img
              className="h-[150px] w-[310px] rounded-md "
              src="https://static.unica.vn/upload/images/2019/04/guitar-dem-hat-30-ngay-cung-hien-rau_m_1555570664.jpg"
              alt=""
            />
            <p className="text-base font-bold mt-3">
              25 chiêu thức phát triển kĩ năng giao tiếp thuyết phục bất kì ai{" "}
            </p>
            <div className="flex flex-row justify-center mt-5">
              <div className=" flex flex-col mr-5">
                <p className="text-sm text-gray-600">Andy Huynh ngoc minh</p>
                <p className="flex flex-row justify items-center">
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  <MdOutlineStarRate className="text-orange-600" />
                  (100)
                </p>
              </div>
              <div className=" flex flex-col ml-5">
                <p className="text-sm">800.000 đ</p>
                <p className="text-lg font-bold ">600.000 đ</p>
              </div>
            </div>
          </div>
          {onMouse4 && (
            <div className="item-left absolute z-20 bg-white h-[auto] w-[330px] rounded-md  shadow-2xl flex flex-col justify-center px-3 py-5">
              <p className="text-lg font-bold">
                25 chiêu thức phát triền kĩ năng giao tiếp trinh phục bất cứ ai{" "}
              </p>
              <p>
                Xây dựng mối quan hệ, đàm phán được hợp đồng, chinh phục bất kỳ
                đồng nghiệp, khách hàng, đối tác... với 25 chiêu thức phát triển
                k
              </p>

              <div className="flex flex-col w-[80%] ml-8 mb-3">
                <p className="text-gray-800 flex flex-row justify items-center text-left ">
                  <IoMdCheckmark className=" mr-2" />
                  Cung cấp tư duy đúng về con người trong giao tiếp
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Hài hòa hơn trong việc xây dựng mối quan hệ
                </p>
                <p className=" text-gray-800 flex flex-row justify items-center text-left">
                  <IoMdCheckmark className="mr-2" />
                  Được cung cấp những công thức để giao tiếp chinh phục tuyệt
                  vời
                </p>
              </div>

              <button
                className="bg-green-500 py-3 px-2 rounded-md text-white font-bold text-lg flex flex-row justify-center items-center"
                onClick={handleTong}
              >
                <FaCartPlus className="mr-3" />
                Thêm vào giỏ hàng{" "}
              </button>
            </div>
          )}
        </div>
        
      
      </div>
      <Body2/>
    </div>
  );
};
export default BodyHeader;
