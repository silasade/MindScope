"use client";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
type dataType = {
  newPassword: string;
  oldPassword: string;
  confirmPassword: string;
};
const { Text } = Typography;

function ResetPassword() {
  const {
    control,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<dataType>();
  const onSubmit = (data: dataType) => {
    console.log(data)
  };
  return (
    <div className="flex flex-col justify-center w-100 gap-4 p-24 h-full">
      <h1 className="text-center text-[36px] font-[700] text-[#10182f]">
        Change password
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#333333] text-[16px] font-[500]">OldPassword</h5>
          <Controller
            name="oldPassword"
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
          {errors.oldPassword && (
            <Text type="danger">{errors.oldPassword.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#333333] text-[16px] font-[500]">
            New password
          </h5>
          <Controller
            name="newPassword"
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
          {errors.newPassword && (
            <Text type="danger">{errors.newPassword.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#333333] text-[16px] font-[500]">
            Confirm password
          </h5>
          <Controller
            name="confirmPassword"
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
          {errors.confirmPassword && (
            <Text type="danger">{errors.confirmPassword.message}</Text>
          )}
        </div>
        <Link
          href={"/forgot-password"}
          className="text-end text-[#9747ff] font-400 text-[14px]"
        >
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

export default ResetPassword;
