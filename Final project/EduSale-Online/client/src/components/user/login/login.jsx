import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./login.css";
import { useState, useEffect } from "react";
import { login, isAuthenticated } from "../../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isOpen, setOpen] = useState(false);
  const handleisOpeneMouse = () => {
    setOpen(true);
  };
  const handleUnMouseOpen = () => {
    setOpen(false);
  };

  const onChange = () => {};
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    const result = await login(username, password);
    if (result.success === 200) {
      navigate("/home");
    } else {
      console.log("resultLogin:", result);
    }
    // navigate('/admin');
    setUsername("");
    setPassword("");
  };
  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      if (authenticated) {
        navigate("/");
      } else {
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkAuthentication();
  }, []);
  return (
    <div>
      <ReCAPTCHA
        onMouseEnter={handleisOpeneMouse}
        onMouseLeave={handleUnMouseOpen}
        sitekey="6LfjAi8pAAAAAD953FCzLTqiHoapW4jvR6w4TLUG"
        onChange={onChange}
        className={` fixed top-80% left-0 -translate-x-70% -translate-y-0 ${
          isOpen ? "recapcha-log" : "recapcha-init"
        } `}
      />
      <img
        className="h-[100%] w-[100%]"
        src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-cong-nghe-full-hd.jpg"
        alt=""
      />
      <div className="fixed bg-[#e5e7eb] h-[500px] w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl ">
        <div className="flex flex-col justify-center items-center w-[100%] h-auto">
          <div className="flex flex-col w-[90%] m-auto mt-12">
            <p className="text-gray-800 text-sm font-bold">
              Email / Số điên thoại{" "}
            </p>
            <input
              className="w-[100%] h-[45px] rounded-md "
              style={{ border: "solid 1px blue" }}
              type="text"
              placeholder="    Email/Số điện thoại"
              onChange={handleUsername}
              value={username}
            />
          </div>
          <div className="flex flex-col w-[90%] m-auto mt-2 ">
            <p className="text-gray-800 text-sm font-bold mb-1 ">Mật khẩu </p>
            <input
              className="w-[100%] h-[45px] rounded-md "
              style={{ border: "solid 0.5px blue" }}
              value={password}
              type="password"
              placeholder="   Nhập mật khẩu "
              onChange={handlePassword}
            />
            <div className="flex flex-row justify items-center ">
              <input type="checkbox" className="h-[20px] w-[20px] mt-2" />
              <p className="text-sm text-gray-500 ml-2">Ghi nhớ tài khoản </p>
            </div>

            <div className="h-auto w-[100%] flex justify-center m-auto  ">
              <button
                className=" bg-green-400 text-center text-white rounded-md h-[50px] w-[100%] m-auto mt-10"
                type="submit"
                onClick={handleSubmit}
              >
                Đăng nhập{" "}
              </button>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <p className="text-sm text-blue-400 ">Quên mật khẩu </p>
              <p className="text-sm text-blue-400 ">Đăng kí </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <div>
            <p className="text-base font-bold text-gray-600">
              Hoặc đăng nhâp với{" "}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center mt-5  ">
            <img
              className="h-[40px] w-[100px] rounded-3xl mr-3 "
              src="https://i.redd.it/7knkfwltwuu01.png"
              alt=""
            />
            <img
              className="h-[40px] w-[100px] rounded-3xl ml-3 "
              src="https://d172mw7nx82lso.cloudfront.net/assets/landing/auth/facebook-2d1ce0b3f2578bf5aa71deb4af5f7febb0cb6ef8eac1c67cd3edc53bd5b04ebe.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
