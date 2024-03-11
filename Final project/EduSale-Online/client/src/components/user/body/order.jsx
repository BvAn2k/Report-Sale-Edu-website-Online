import React, { useState } from "react";
import { createOrder } from "../../../services/api";
import { FaCheckCircle } from "react-icons/fa";
import "./animation.css";



const Order = ({sucess,event,id})=>{
    const [success,setSuccess]= useState(false);


    const handleSucuess = (sucess)=>{
        setTimeout(() => {
            setSuccess(false);
          }, 3000);
          setSuccess(true);
    }

    const handleClikOrder = async (event,id)=>{

const result = await createOrder({},id)

    }


    return (
        <div>
            {success && (
        <div className="sucess-cart z-40 flex  flex-col  h-[200px] w-[300px] justify-center items-center rounded-lg">
          <FaCheckCircle className="text-green-500 text-2xl" />
          <p className="text-white font-bold text-base mt-5 ">
            Thêm vào thành công{" "}
          </p>
        </div>
      )}
        </div>
    )
}
export default Order;