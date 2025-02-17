"use client"
import React from "react";
import { TabsProps } from "antd";
import Profile from "./_local components/Profile";
import PasswordChange from "./_local components/PasswordChange";
import Tab from "@/app/(Routes)/_global_components/Tabs";
function Account() {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Profile",
      children: <Profile />,
    },
    {
      key: "2",
      label: "Password",
      children: <PasswordChange />,
    },
  ];
  return <div>
    <Tab onChange={onChange} items={items}  />
  </div>;
}

export default Account;
