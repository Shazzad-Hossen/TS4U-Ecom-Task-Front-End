import { useSelector } from 'react-redux';

const axios = require('axios');
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };


export const publicPost= async(endPoint,data)=>{
    const res= await axios.post(`https://staging-be-ecom.techserve4u.com${endPoint}`,data);
    return res.data;

}

export const privatePost= async(endPoint,token)=>{
   
    config.headers.Authorization = `${token}`;
    const res= await axios.post(`https://staging-be-ecom.techserve4u.com${endPoint}`,{},config);
   
    return res.data;
    
}

export const publicGet = async(endPoint)=>{
  const res = await axios.get(`https://staging-be-ecom.techserve4u.com${endPoint}`);
  return res.data;

}