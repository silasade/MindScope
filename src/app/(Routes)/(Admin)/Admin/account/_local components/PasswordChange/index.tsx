"use client";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input,Typography } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
const {Text}=Typography
type InputType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};
function PasswordChange() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<InputType>();

  const onSubmit=(data:InputType)=>{
    console.log(data)
  }
  return (
    <div className="w-[55%] border border-[#707070] rounded-md p-4">
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#333333] text-[14px] md:text-[16px] font-[500]">
            Old password
          </h5>
          <Controller
            name="oldPassword"
            control={control}
            render={({ field }) => (
              <Input.Password
                className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md border border-[#10182f]"
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
          <h5 className="text-[#333333] text-[14px] md:text-[16px] font-[500]">
            New password
          </h5>
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <Input.Password
                className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md border border-[#10182f]"
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
          <h5 className="text-[#333333] text-[14px] md:text-[16px] font-[500]">
            Confirm password
          </h5>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input.Password
                className="w-[100%] h-[40px] md:h-[50px] p-2 rounded-md border border-[#10182f]"
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
        
        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="h-[40px] h-[50px] bg-[#10182f] border-0 text-white text-[14px] md:text-[16px] font-[500] hover:bg-[#10182f] focus:bg-[#10182f]"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default PasswordChange;
