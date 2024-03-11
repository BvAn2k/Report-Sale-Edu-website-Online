import React, { useEffect } from "react";
import "./animation.css";
import { MdOutlineStarRate } from "react-icons/md";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { createOrder, getProducts } from "../../../services/api";
const Body2 = () => {
  const [onMouse, setOnMouse] = useState(false);

  const handleOnMouse = () => {
    setOnMouse(true);
  };
  const handleUnMouse = () => {
    setOnMouse(false);
  };

  // const handleShowSuss = ()=>{
  //   setTimeout(()=>{
  //     setSuccess(false)
  //   },3000)
  //   setSuccess(true)

  // }
  const [datas, setdatas] = useState([]);
  const productId = datas.map(proId =>proId.productId);
  // console.log('product Id la',productId)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setdatas(data);
      console.log(datas);
    };
    fetchData();
  },{} );
  const [success, setSuccess] = useState(false);

  const handleSucuess = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    setSuccess(true);
  };

  const handleClikOrder = async (idpro) => {
    const OrderObject = {};
    // console.log(idpro);

    const result = await createOrder(OrderObject, idpro);
    if (result) {
      console.log("result", result);
      handleSucuess();
    } else {
      console.log("lose");
    }
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
        {/* <div className="flex flex-row justify-between items-center w-[100%]">
            <p className="text-black text-lg font-bold">Học nhiều trong tuần  </p>
            <p className="text-black text-md">Xem thêm </p>
          </div> */}
        {datas.map((data) => (
          <div
            key={data.productId}
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
              <p className="text-base font-bold mt-3">{data.productName}</p>
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
                  25 chiêu thức phát triền kĩ năng giao tiếp trinh phục bất cứ
                  ai{" "}
                </p>
                <p>{data.description}</p>

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
                  onClick={() => handleClikOrder(data.productId)}
                  className="bg-green-500 py-3 px-2 rounded-md text-white font-bold text-lg flex flex-row justify-center items-center"
                >
                  <FaCartPlus className="mr-3" />
                  Thêm vào giỏ hàng{" "}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body2;
