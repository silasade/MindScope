"use client";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
type dataType = {
  email: string;
  password: string;
};
const { Text } = Typography;

function Signin() {
  const {
    control,
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<dataType>();
  const onSubmit = (data: dataType) => {
    console.log(data)
  };
  return (
    <div className="flex flex-col justify-center w-100 gap-4 p-24 h-full">
      <h1 className="text-center text-[36px] font-[700] text-[#10182f]">Welcome back</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-2">
          <h5 className="text-[#333333] text-[16px] font-[500]">Email</h5>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md"
            {...register("email", { required: "Please enter your email" })}
          />
          {errors.email && <Text type="danger">{errors.email.message}</Text>}
          </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#333333] text-[16px] font-[500]">Password</h5>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md"
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                {...field}
              />
            )}
          />
          {errors.password && <Text type="danger">{errors.password.message}</Text>}
          </div>
        <Link href={"/forgot-password"} className="text-end text-[#9747ff] font-400 text-[14px]">
          Forgot password?
        </Link>
        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="h-[40px] h-[50px] bg-[#10182f] border-0 text-white text-[16px] font-[500] hover:bg-[#10182f] focus:bg-[#10182f]"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Signin;
