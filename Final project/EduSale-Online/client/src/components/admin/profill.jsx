import React, { useContext, useState } from "react";
import { getUsers,deleteUser } from "../../../src/services/api";
import {} from "react-router-dom";
import { useEffect } from "react";
import { Button, Table } from "antd";
import { AuthContext } from "../../AuthProvider";


const ProfileDetail = () => {
  const {userInfo}  = useContext(AuthContext);

  const [datas, setdatas] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setdatas(data);
      console.log(datas);
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    console.log('Delete clicked for ID:', id);
    const response = await deleteUser(id);
    refreshData();
    console.log("delete:", response);
  };

 
 
  
  const refreshData = async () => {
    try {
      const userList = await getUsers();
      // console.log("userList", userList);
      setdatas(userList);
    } catch (error) {
      // Handle error
      // console.error('Error:', error);
    }
  }
  const handleButtonUpdate = (record)=>{

  }

  const columns = [
    {
      title:"ID",
      dataIndex:"id"
    },
    {
      title: "Name",
      dataIndex: "username",
      
    },
    {
      title: "Email",
      dataIndex: "email",
      
    },
    {
      title: "Address",
      dataIndex: "address",
      
    },
    {
      title: "Phone",
      dataIndex: "phone",
      
    },
    {
      title: "Gender",
      dataIndex: "gender",
      
    },
    {
      title: "Date",
      dataIndex: "createdDate",
      
    },
    {
      title: "Update",
        render:(index, record)=>(
          <Button onClick={()=>handleButtonUpdate(record)}>update</Button>
        )
      
    },
 
  ];

  return (
    <div className="flex w-[100%] h-auto flex-col ">
      {/* <div className="w-[100%] h-[30px] rounded-xl bg-gray-300 flex flex-row justify-around items-center">
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Avatar
        </p>
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Id
        </p>
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Name
        </p>
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Email
        </p>
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Phone
        </p>
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Date
        </p>
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Gender
        </p>
        <p className="h-auto w-[10%] bg-orange-300 rounded-lg flex text-gray-700 text-base  px-4">
          Adress
        </p>
        <button className=" h-auto w-[10%] bg-red-600 rounded-lg flex text-gray-700 text-base  px-4">
          Delete
        </button>
        <button className=" h-auto w-[10%] bg-green-500 rounded-lg flex text-gray-700 text-base  px-4">
          Uppdet
        </button>
      </div> */}
      <Table dataSource={datas} columns={columns} />
      
    </div>
  );
};
export default ProfileDetail;
