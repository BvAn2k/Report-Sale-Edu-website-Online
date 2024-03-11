import React from "react";
import "./footer.css";
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

const FooterTop = () => {
  return (
    <div className=" bg-[#f5f5f5] mt-8 mb-8 ">
      <div className="flex flex-col w-[90%] h-auto m-auto">
        <div className=" flex justify-start w-[50%] m-5">
          <p className="text-3xl font-bold text-gray-600">
            Chinh phục mục tiêu của bạn{" "}
          </p>
        </div>
        <div className="flex flex-row h-auto w-[100%] justify-between ">
          <div className="contener-img  flex w-[48%] rounded-xl border   bg-orange-300 h-[300px]">
            <img
              className="h-[100%] w-[100%] rounded-xl"
              src="https://thebank.vn/uploads/2021/07/23/chung-khoan-hien-nay.jpg"
              alt=""
            />
            <div className="absolute h-auto flex flex-row justify items-center mt-[250px]   ">
              <img
                className="h-[50px] w-[50px] mr-3 rounded-md"
                src="https://th.bing.com/th/id/OIP.5yh_oNlwEZCwR4Scw3Dz8gHaHa?rs=1&pid=ImgDetMain"
                alt=""
              />
              <p className="text-md text-white font-bold">
                Đầu tư chứng khoán chuyên nghiêp Đặng Trọng Khang{" "}
              </p>{" "}
            </div>
          </div>
          <div className="contener-img flex w-[48%] rounded-xl border   bg-orange-400 h-[300px]">
            <img
              className="h-[100%] w-[100%] rounded-xl"
              src="https://th.bing.com/th/id/OIP.L2NuOLAmE9QR0LFSsdhZtQHaE3?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className="asitent-item absolute h-auto flex flex-row justify items-center mt-[250px]  ">
              <img
                className="h-[50px] w-[50px] mr-3 rounded-md"
                src="https://th.bing.com/th/id/OIP.5yh_oNlwEZCwR4Scw3Dz8gHaHa?rs=1&pid=ImgDetMain"
                alt=""
              />
              <p className="text-md text-white font-bold">
                Combo marketing online{" "}
              </p>{" "}
            </div>
          </div>
        </div>{" "}
        <div className=" flex flex-row  h-auto w-[100%] mt-5 justify-stretch">
          <div className="img-background flex h-[200px] w-[30%] rounded-md ">
            <img
              className=" h-[100%] w-[100%] rounded-md"
              src="https://th.bing.com/th/id/OIP.i03_JM44aF9SUAA1EwV2zgHaE8?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className=" absolute h-[60px] mt-[140px] justify items-center w-[auto] flex flex-row ">
              <img
                className="h-[50px] w-[50px] rounded-sm"
                src="https://th.bing.com/th/id/OIP.8SH_Sqw6z_ulpUVhknkQeAAAAA?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />

              <div className="flex flex-col justify items-start ml-2  ">
                <p className="text-lg text-black font-bold">
                  Học tiếng anh Online{" "}
                </p>
                <p className="text-sm text-gray-500">6 khóa học </p>
              </div>
            </div>
          </div>
          <div className="img-background flex h-[200px] w-[30%] m-auto  rounded-md ">
            <img
              className="h-[100%] w-[100%] rounded-md"
              src="https://th.bing.com/th/id/OIP.UeyYwTyb-wJ8KmNf5ZzpHwHaEK?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className="absolute h-[60px] mt-[140px] justify items-center w-[auto]  flex flex-row ">
              <img
                className="h-[50px] w-[50px] rounded-sm"
                src="https://th.bing.com/th/id/OIP.KlmxlY9ld5_CsMMyY-3kiAHaEo?rs=1&pid=ImgDetMain"
                alt=""
              />
              <div className="flex flex-col justify items-start ml-2  ">
                <p className="text-lg text-black font-bold">
                  Combo kế toán misa epect{" "}
                </p>
                <p className="text-sm text-gray-500">6 khóa học </p>
              </div>
            </div>
          </div>
          <div className="img-background flex h-[200px] w-[30%]   rounded-md ">
            <img
              className="h-[100%] w-[100%] rounded-md"
              src="https://i.ytimg.com/vi/jaSEwWNtPZs/maxresdefault.jpg"
              alt=""
            />

            <div className="absolute h-[60px] mt-[140px] justify items-center w-[auto]  flex flex-row ">
              <img
                className="h-[50px] w-[50px] rounded-sm"
                src="https://suijm9clouobj.vcdn.cloud/PUBLIC/MEDIA/5b3e5636-9f83-4e59-bcb8-21256f277863.jpg"
                alt=""
              />
              <div className="flex flex-col justify items-start ml-2  ">
                <p className="text-lg text-black font-bold">
                  Combo kế toán misa epect{" "}
                </p>
                <p className="text-sm text-gray-500">6 khóa học </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-auto m-auto flex flex-col mt-10  bg-[#f5f5f5]">
        <div className="flex flex-col justify items-center ">
          <p className="text-3xl font-bold text-gray-600">
            Bạn chưa tìm thấy khóa học mình quan tâm ?{" "}
          </p>
          <p className="text-3xl font-bold text-gray-600">
            Unica có hơn 2000 khóa học đang chờ bạn khám phá{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-around items-center mt-8">
          <div className="flex flex-col h-[100px] rounded-md hover:shadow-xl w-[200px]  justify-center items-center bg-white">
            <FaChartLine className="text-[50px] text-gray-500" />
            <p className="text-base text-black">marketing</p>
          </div>
          <div className="flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <SiGoogletranslate className="text-[50px] text-gray-500" />
            <p className="text-base text-black">ngoại ngữ </p>
          </div>
          <div className="flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <MdComputer className="text-[50px] text-gray-500" />
            <p className="text-base text-black">máy tính </p>
          </div>
          <div className="flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <FaRocket className="text-[50px] text-gray-500" />
            <p className="text-base text-black">kinh doanh</p>
          </div>
          <div className="flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <FaRegMoneyBillAlt className="text-[50px] text-gray-500" />
            <p className="text-base text-black">tài chính </p>
          </div>
          <div className="flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <IoCartSharp className="text-[50px] text-gray-500" />
            <p className="text-base text-black">sale bán hàng </p>
          </div>
          <div className="mt-4 flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <BsPenFill className="text-[50px] text-gray-500" />
            <p className="text-base text-black">thiết kế xây dựng </p>
          </div>
          <div className="mt-4 flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <FaRegLightbulb className="text-[50px] text-gray-500" />
            <p className="text-base text-black">thiết kế </p>
          </div>
          <div className="mt-4 flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <GiTechnoHeart className="text-[50px] text-gray-500" />
            <p className="text-base text-black">sức khỏe làm đẹp </p>
          </div>
          <div className="mt-4 flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <VscSymbolProperty className="text-[50px] text-gray-500" />
            <p className="text-base text-black">công nghệ</p>
          </div>
          <div className="mt-4 flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <FaPeopleGroup className="text-[50px] text-gray-500" />
            <p className="text-base text-black">tình yêu hôn nhân </p>
          </div>
          <div className="mt-4 flex flex-col h-[100px] rounded-md hover:shadow-lg w-[200px]  justify-center items-center bg-white">
            <LuUtensils className="text-[50px] text-gray-500" />
            <p className="text-base text-black">phong cách sống </p>
          </div>
        </div>
        <div className="flex flex-col justify items-center ">
          <div className="m-5">
            <p className="text-3xl font-bold text-gray-900">
              3 LÍ DO BẠN NÊN HỌC ONLINE TẠI UNICA
            </p>
          </div>
          <div className="flex flex-row  justify-between">
            <div className="flex flex-col h-[300px] w-[300px] justify-center items-center">
              <img
                className="mb-5"
                src="https://unica.vn/media/images/icon-ts-1.png"
                alt=""
              />
              <p className="text-black text-lg">Giảng viên uy tín </p>
              <p className="text-gray text-md">Bài giảng chất lượng </p>
            </div>
            <div className="flex flex-col h-[300px] w-[300px]  justify-center items-center">
              <img
                className="mb-5"
                src="https://unica.vn/media/images/icon-ts-2.png"
                alt=""
              />
              <p className="text-black text-lg">Thanh toán 1 lần </p>
              <p className="text-gray text-md">Học mãi mãi </p>
            </div>
            <div className="flex flex-col h-[300px] w-[300px]  justify-center items-center">
              <img
                className="mb-5"
                src="https://unica.vn/media/images/icon-ts-3.png"
                alt=""
              />
              <p className="text-black text-lg">Học trực tuyến </p>
              <p className="text-gray text-md">Hỗ trợ học trực tuyến </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-gray-900">
            GIẢNG VIÊN TIÊU BIỂU{" "}
          </p>
          <div className="flex flex-row justify-around items-center h-auto w-[100%] mt-5">
            <div className="flex flex-col justify-center items-center h-[330px] w-[23%] rounded-md bg-white hover:shadow-lg">
              <img
                className="rounded-full h-[130px] w-[130px]"
                src="https://unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg"
                alt=""
              />
              <p className="text-lg text-black font-bold m-5">
                Ts.Lê Thẩm Dương{" "}
              </p>
              <p className="text-md text-gray-500 ">
                Tiến sĩ , diễn giả , chuyên gia tài chính , lãnh đạo nhân sự{" "}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-[330px] w-[23%] rounded-md bg-white hover:shadow-lg">
              <img
                className="rounded-full h-[130px] w-[130px]"
                src="https://unica.vn/uploads/dang-trong-khang/July222021258pm_dang-trong-khang_thumb.png"
                alt=""
              />
              <p className="text-lg text-black font-bold m-5">
                Ts.Đăngj trọng khoang{" "}
              </p>
              <p className="text-md text-gray-500 ">
                causlity investing speaker{" "}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-[330px] w-[23%] rounded-md bg-white hover:shadow-lg">
              <img
                className="rounded-full h-[130px] w-[130px]"
                src="https://unica.vn/uploads/doanhuyen209@gmail.com/June62017533pm_nguyen-phung-phong_thumb.jpg"
                alt=""
              />
              <p className="text-lg text-black font-bold m-5">
                Ts.Nguyễn Phùng Minh{" "}
              </p>
              <p className="text-md text-gray-500 ">
                Kỉ lục gia siêu trí nhớ thế giới , chủ tịch tổ chức trí nhớ việt
                nam{" "}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-[330px] w-[23%] rounded-md bg-white hover:shadow-lg">
              <img
                className="rounded-full h-[130px] w-[130px]"
                src="https://unica.vn/uploads/thai-van-linh-linh-thai/July142022456pm_thai-van-linh-linh-thai_thumb.jpg"
                alt=""
              />
              <p className="text-lg text-black font-bold m-5">
                Ts.Thái thị linh{" "}
              </p>
              <p className="text-md text-gray-500 ">
                Nhà sáng lập skills brige và TVL{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-gray-900 m-5">
            GẢI PHÁP KHÁC TỪ UNICA{" "}
          </p>
          <div className="flex flex-row justify-between w-[100%] items-center">
            <div className="flex flex-col w-[45%] h-[400px] rounded-lg justify items-start bg-white shadow-xl">
              <img className="h-[70%] w-[100%] rounded-tl-lg rounded-tr-lg mb-2"
                src="https://unica.vn/media/images_v2018/hb-edu.jpg"
                alt=""
              />
              <p className="text-lg text-black font-bold">Edebit.vn-Ai cũng có thể dậy học online </p>
              <p className="text-md text-gray-500">Giải pháp elearning giúp tạo bài giảng , khảo sát online chỉ với click chuột </p>
            </div>
            <div className="flex flex-col w-[45%] h-[400px] rounded-lg justify items-start bg-white shadow-xl">
              <img className="h-[70%] w-[100%] rounded-tl-lg rounded-tr-lg mb-2"
                src="https://unica.vn/media/images_v2018/hb-aca.jpg"
                alt=""
              />
              <p className="text-lg text-black font-bold">Acabiz.vn- Giải pháp đào tạo nội bộ cho doanh ngiệp </p>
              <p className="text-md text-gray-500">Nâng cao năng lực đội ngũ cùng Acabiz với hơn 500 khóa học được chọn lọc từ Unica </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTop;
