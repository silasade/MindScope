"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Text } = Typography;

type dataType = {
  email: string;
};

function ForgotPassword() {
    const router= useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<dataType>();

  const onSubmit = (data: dataType) => {
    console.log("Submitted Data:", data);
    // Implement password reset logic here
    if(data.email){
        router.push("/reset-password")
    }
  };

  return (
    <div className="flex flex-col justify-center w-full gap-1 p-24 h-full">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-[18px] md:text-[36px] font-[700] text-[#10182f]">Forgot password</h1>
        <h3 className="text-[16px] md:text-[18px] font-[500] text-[#10182f]">
          Enter the email attached to your account
        </h3>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Text strong>Email</Text>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="example@email.com"
            className="h-[50px] px-4 border rounded-md"
          />
          {errors.email && <Text type="danger">{errors.email.message}</Text>}
        </div>
        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="w-full h-[40px] md:h-[50px] bg-[#10182f] border-0 text-white text-[14px] md:text-[16px] font-[500] hover:bg-[#10182f] focus:bg-[#10182f]"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
