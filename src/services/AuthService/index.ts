"use server";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";

import axiosInstance from "@/src/lib/AxiosInstance";

export const registerUser = async (userInfo: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userInfo);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
    // console.log(res.data);
  } catch (error: any) {
    throw new Error(error);
  }
};


export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
