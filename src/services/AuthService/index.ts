"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userInfo: FieldValues) => {
  try {
    const res = await axiosInstance.post("/auth/register", userInfo);

    console.log(res.data);
  } catch (error: any) {
    throw new Error(error);
  }
};
