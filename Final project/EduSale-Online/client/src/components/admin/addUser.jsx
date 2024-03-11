import React, { useState } from "react";
import { createUser, getUsers } from "../../services/api";
import "./admin.css";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [datas, setdatas] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("errr", name, email, phone, role, password);
    const result = await createUser({ name, email, phone, role, password });
    if (result.success === 200) {
      console.log(result);
      // refreshData();
    } else {
      console.log("errr");
    }
  };
  const refreshData = async () => {
    try {
      const userList = await getUsers();
      setdatas(userList);
    } catch (error) {
      // Handle error
      // console.error('Error:', error);
    }
  };
  return (
    <div>
      <div className=" show-form-add flex  flex-col z-20 justify-center items-center">
        <p className="text-2xl font-bold text-blue-600">ĐĂNG KÍ </p>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="h-[40px] w-[80%] outline-none bg-white rounded-md m-4 "
            placeholder="   your name"
          />
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="h-[40px] w-[80%] outline-none bg-white rounded-md m-4 "
            placeholder="   your email"
          />
          <input
            value={role}
            type="text"
            onChange={(e) => setRole(e.target.value)}
            className="h-[40px] w-[80%] outline-none bg-white rounded-md m-4 "
            placeholder="   your address"
          />
          <input
            value={phone}
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            className="h-[40px] w-[80%] outline-none bg-white rounded-md m-4 "
            placeholder="   your phone"
          />
          <input
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="h-[40px] w-[80%] outline-none bg-white rounded-md m-4 "
            placeholder="   your address"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
