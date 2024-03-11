import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { deleteProduct, getProducts } from "../../services/api";

const ProductList = ()=>{
    const [datas, setdatas] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          const data = await getProducts();
          setdatas(data);
          console.log(datas);
        };
        fetchData();
      }, []);
const handleButtonUpdate = ()=>{

}
const handleButtonDelete = (e)=>{

  
}
 const handleDelete = async (id) => {
    console.log('Delete clicked for ID:', id);
    const response = await deleteProduct(id);
    fetchData();
    console.log("delete:", response);
  };

  const fetchData = async () => {
    const data = await getProducts();
    setdatas(data);
    console.log(datas);
  };
      const columns = [
        {
          title:"ID",
          dataIndex:"productId"
        },
        {
          title: "Name",
          dataIndex: "productName",
          
        },
        {
          title: "Active",
          dataIndex: "isActive",
          
        },
        {
          title: "Desciption",
          dataIndex: "description",
          
        },
        
        {
          title: "Update",
            render:(index, record)=>(
              <Button onClick={()=>handleButtonUpdate(record)}>update</Button>
            )
          
        },
        {
          title: "DELETE",
            render:(index, record)=>(
              <Button onClick={()=>handleDelete(record.productId)}>Delete</Button>
            )
          
        },
      ];
      return (
        <div>
            <Table dataSource={datas} columns={columns}></Table>
        </div>
      )

}
export default ProductList;