"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "antd";
const { Text } = Typography;
type profile = {
  firstName: string;
  lastName: string;
  email: string;
};
function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<profile>();
  const onSubmit = (data: profile) => {
    console.log(data);
  };
  return (
    <div className="w-[55%] border border-[#707070] rounded-md p-4">
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <h5 className="text-[16px] text-[#333333] font-[500]">First name</h5>
          <input
            type="text"
            {...register("firstName")}
            className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md border border-[#10182f]"
          />
          {errors.firstName?.message && (
            <Text type="danger">{errors.firstName?.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[16px] text-[#333333] font-[500]">Last name</h5>
          <input
            type="text"
            {...register("lastName")}
            className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md border border-[#10182f]"
          />
          {errors.lastName?.message && (
            <Text type="danger">{errors.lastName?.message}</Text>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="font-[500] text-[16px] text-[#333333]">Email</h5>
          <input
            type="text"
            {...register("email")}
            className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md border border-[#10182f]"
          />
          {errors.email?.message && (
            <Text type="danger">{errors.email?.message}</Text>
          )}
        </div>
        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="h-[40px] h-[50px] bg-[#10182f] border-0 text-white text-[14px] md:text-[16px] font-[500] hover:bg-[#10182f] focus:bg-[#10182f]"
        >
          Update profile
        </Button>
      </form>
    </div>
  );
}

export default Profile;
