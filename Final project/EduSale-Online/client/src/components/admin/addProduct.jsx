import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct, getProducts } from "../../services/api";


const AddProduct = () => {
  const navigate = useNavigate();

  const [datas, setdatas] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const gotoHome = ()=>{
    navigate('/home');
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
   
    const productData = {
      productName: name,
      description: description,
      // Thêm các thuộc tính người dùng khác
    };

    // console.log("errr", name,email,phone,role,password)
    const result = await createProduct(productData.productName, productData.productName);
    if (result.success === 200) {
      refreshData();
    
    } else {
      console.log("errr");
    }
  };
  const refreshData = async () => {
    try {
      const userList = await getProducts();
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
        <form onSubmit={handleSubmit} className="flex flex-col justify w-[80%] items-center">
          <input
            value={name}
            type="text"
          onChange={(e) => setName(e.target.value)}
            className="h-[40px] w-[80%] outline-none bg-white rounded-md m-4 "
            placeholder="your name"
          />
          <input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            className="h-[40px] w-[80%] outline-none bg-white rounded-md m-4 "
            placeholder="your email"
          />

          <button type="submit" className="bg-blue-600 hover:bg-blue-400 px-6 py-3 rounded-xl m-auto" onClick={gotoHome}>submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
