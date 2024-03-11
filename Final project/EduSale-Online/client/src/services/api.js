// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL
axios.defaults.baseURL = 'localhost'; // Replace with your backend API's base URL

// Add the following lines to set the CORS headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Replace '*' with the allowed origin(s) of your backend API
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Specify the allowed HTTP methods
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Specify the allowed headers

export const isAuthenticated = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      // Make an API request to find the user based on the token
      const response = await axios.get(`${API_URL}/user/findToken?token=${token}`, { withCredentials:true,
        
      },);
      const user = response.data.data;
      if (user) {
        // Additional checks if needed
        return true;
      } else {
        return false;
      }
    } catch (error) {
      // API request or validation failed
      return false;
    }
  }
  return false; // No token found
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      username,
      password,
    },{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Replace '*' with your server domain if known
      },
    });
    if(response.data.success === 200){
      console.log("AAAAAAAAAAAAAAAAAA");
      const token = response.data.message;
      localStorage.setItem("token", token);
      return response.data;
    }else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/findAll?token=${token}`);

    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getProducts = async ()=>{
  try{
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/product/getAllProduct?token=${token}`);
    return response.data.data;
  }
  catch (error){
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const createProduct = async (productData)=>{
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/product/create-product?token=${token}`,{productData})
    console.log('response in api', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  } 
 
  
}
export const createOrder = async ({orderData},id)=>{
  try{
    const token  = localStorage.getItem("token");
const respon = await axios.post(`${API_URL}/order/createOrder?token=${token}&id=${id}`,{orderData});
return respon.data.data;
  }
  catch(err){


console.log('errr;');
  }
}
export const getOrder = async ()=>{
  try {
     const token= localStorage.getItem("token")
  const respones = await axios.post(`${API_URL}/order/getAllOrder?token=${token}`)
  return respones.data.data;
  }
 catch(err){
console.log(err);
 }
}
export const deleteOrder = async (id)=>{
  try{
const token = localStorage.getItem("token");
const respon = await axios.post(`${API_URL}/order/deleteOrder?token=${token}&id=${id}`);
return respon.data.data;
  }
  catch(errr) {
console.log(errr);
  }
};
 
export const deleteProduct = async (id)=>{
  try{
const token = localStorage.getItem("token");
const reponse = await  axios.post(`${API_URL}/product/delete-product?token=${token}`,(id))
return reponse.data.data;
  }
  catch (error){
    console.error('Error fetching users:', error);
    throw error;
  }
}
export const getUserFromToken = async (token) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user/findByToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (useData) => {
  try {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const response = await axios.post(`${API_URL}/user/insert?token=${token}`,{useData});
    console.log("response", response)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const updateUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/update?token=${token}`, {
      withCredentials: true,
    }, userData)
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userID) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/delete?token=${token}&id=${userID}`, {
      withCredentials: true,
    })
    return response.data.data;
  } catch (error) {
    throw error;
  }
};


// Add more API functions as needed