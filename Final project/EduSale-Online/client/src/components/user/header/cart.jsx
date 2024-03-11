import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./header";
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { IoIosMail, IoMdStopwatch } from "react-icons/io";
import axios from "axios";
import { deleteOrder, getOrder } from "../../../services/api";
import { Button, Table ,Tag} from "antd";

const Cart = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [datas, setDatas] = useState([]);
  const [active , setActive] = useState([]);
  const [statu,setStatu]= useState(false);

  useEffect(() => {
    const getoOrdered = async () => {
     

      const result = await getOrder();
      if (result) {
        // console.log(result);
        setDatas(result);

        // console.log("data ",datas);
      } else {
        console.log("loi 200");
      }
    };
    getoOrdered();
  }, []);



  const hanldeDelete = async(report) => {
const result = await deleteOrder(report);
setActive(result);
const status = active.map(acti=>acti.isActive)

if(status === true ){
  setStatu(true);
}else {
setStatu(false)
}
  };
  const hanldUpdate = () => {};


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "NameProduct",
      dataIndex: "namePro",
    },
    {
      title: "UserName",
      dataIndex: "nameUser",
    },
    {
      title: "Email",
      dataIndex: "useremail",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      render : (index,report)=>(<div>
        {statu === true ? ( <Tag color="success"></Tag>):(<Tag color="wearing">

        </Tag>)}
      </div>
       
      )
    },
    {
      title: "Update",
      render: (index, record) => (
        <Button onClick={() => hanldUpdate(record)}>update</Button>
      ),
    },
    {
      title: "Delete",
      render: (index, record) => (
        <Button onClick={() => hanldeDelete(record.id)}>Delete</Button>
      ),
    },
  ];
  const length = datas.map((data) => data);
  console.log("leng", length.length);
  const totalLength = length.length;

  return (
    <div className="flex flex-col  h-auto w-[100%]">
      <Header />

      <div className=" flex flex-col  h-[auto] w-full  bg-pink-50 justify-center">
        {totalLength > 0 ? (
          <Table
            dataSource={datas}
            columns={columns}
            className="w-[80%] ml-auto mr-auto mt-5 "
          ></Table>
        ) : (
          <div className=" flex flex-col  h-[auto] w-full justify items-center bg-pink-50">
            <p className="text-lg text-gray-700 mt-4">Giỏ hàng (0 khóa học)</p>
            <FaShoppingCart className="text-9xl text-gray-400 m-7" />
            <p className="text-lg text-gray-700">
              Hiện tại giỏ hàng của bạn chưa có khóa học nào{" "}
            </p>
            <p className="text-lg text-gray-700">
              Vui lòng chọn thêm khóa học{" "}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-center w-[100%] h-auto bg-[#2c3238] items-center  ">
        <div className="flex flex-col justify-center items-start w-[20%] h-[400px] ">
          <p className="flex ml-5  text-blue-800  text-3xl font-bold">
            <p className="text-orange-600">U</p>NICA
          </p>
          <div className="flex flex-row ml-3 mt-2 justify items-center text-white ">
            <MdPlace className="text-orange-600" />
            267 Cầu giấy , Hà Nội{" "}
          </div>
          <div className="flex flex-row ml-3 mt-2 justify items-center text-white ">
            <MdPlace className="text-orange-600" />
            P503 , 20 Phan Đình Giót{" "}
          </div>
          <div className="flex flex-row ml-3 mt-2 justify items-center text-white text-2xl">
            <FaPhoneAlt className="text-orange-600" />
            19001568
          </div>
          <div className="flex flex-row ml-3 mt-2 justify items-center text-white ">
            <FaPhoneAlt className="text-orange-600" />
            19001568
          </div>
          <div className="flex flex-row ml-3 mt-2 justify items-center text-white ">
            <IoIosMail className="text-orange-600" />
            cskh@unica.vn
          </div>
          <div className="flex flex-row ml-3 mt-2 justify items-center text-white ">
            <IoMdStopwatch className="text-orange-600" />
            08h00 - 17h00,t2-t7{" "}
          </div>
          <select
            className="flex text-white bg-[#2c3238] px-2 py-2 m-3 border border-white rounded-md"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="option1 ">Vietnamese</option>
            <option value="option2">English</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-start w-[20%] h-[400px] ">
          <p className="text-lg font-bold text-orange-700  mb-2 ">Về unica </p>
          <p className="text-md text-white mb-2">Giới thiệu về unica </p>
          <p className="text-md text-white mb-2">Câu hỏi thường gặp </p>
          <p className="text-md text-white mb-2">Chính sách bảo mật </p>
          <p className="text-md text-white mb-2">Hướng dẫn thanh toán </p>
          <p className="text-md text-white mb-2">Kích hoạt khóa học </p>
          <p className="text-md text-white mb-2">Góc chia sẻ </p>
          <p className="text-md text-white mb-2">Điều khoản dịch vụ </p>
        </div>
        <div className="flex flex-col justify-center items-start w-[20%] h-[400px] ">
          <p className="text-lg font-bold text-orange-700  mb-2 ">
            Hợp tác liên kết{" "}
          </p>
          <p className="text-md text-white mb-2">Đăng kí thành viên </p>
          <p className="text-md text-white mb-2">Giải pháp elearning </p>
          <p className="text-md text-white mb-2">Đào tạo doanh nghiệp </p>
          <p className="text-md text-white mb-2">Đào tao inHouse </p>
          <p className="text-md text-white mb-2">Afftilica </p>
          <p className="text-md text-white mb-2">Acgency </p>
          <p className="text-md text-white mb-2">Quay dựng video </p>
        </div>
        <div className="flex flex-col justify-center items-start w-[20%] h-[400px]">
          <p className="text-lg font-bold text-orange-700 mb-2 ml-2">
            Tải app Unica{" "}
          </p>
          <img
            className="h-[50px] w-[150px] m-2"
            src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png"
            alt=""
          />
          <img
            className="h-[50px] w-[150px] m-2"
            src="https://www.osg.co.jp/en/media_dl/catalog/images/google-play-badge.png"
            alt=""
          />
          <p className="text-lg font-bold text-orange-700 mb-2 ml-2">
            Kết nối với Unica{" "}
          </p>
          <div className="flex flex-row justify items-center ml-2">
            <img
              className="h-[50px] w-[50px] m-1 rounded-sm"
              src="https://th.bing.com/th/id/OIP.UlAQZY8AXNKZZJd4G7LcmgHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
              alt=""
            />
            <img
              className="h-[50px] w-[50px] m-1 rounded-sm"
              src="https://th.bing.com/th/id/OIP.juSTgw3kFUWCPKnbJKAJAQHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
