"use client"
import toast from "react-hot-toast";


const successResponse = (response: any, redirect: string, router?: any) => {
  if (response && response?.data?.message) {
    toast.success(response?.data?.message);
    if (router) {
      router.push(redirect);
    }
  }
  return null;
};

export default successResponse;