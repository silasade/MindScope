"use client";
import { Button, Input } from "antd";
import clsx from "clsx";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import s from "./NewsLetter.module.scss";
import { MailOutlined } from "@ant-design/icons";
type dataType = {
  email: string;
};
function NewsLetter() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<dataType>();
  const onSubmit = (data: dataType) => {
    console.log(data.email);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.titles}>
      <h2>Subscribe to our newsletter</h2>

        <h5>
          Never miss an update or a new feature release—stay ahead with the
          latest enhancements for a seamless blogging experience.
        </h5>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
          }}
          render={({ field }) => (
            <Input
              className={clsx({ [s.errorInput]: errors.email })}
              placeholder="Enter your email"
              suffix={<MailOutlined />}
              {...field}
            />
          )}
        />
        {errors.email && (
          <span className={clsx(s.errorMessage)}>{errors.email.message}</span>
        )}
        <Button htmlType="submit" className={s.btn}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewsLetter;
