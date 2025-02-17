"use client"
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

type TabProp = TabsProps & {
  onChange: (key: string) => void;
};

function Tab({ onChange, items, ...rest }: TabProp) {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} {...rest} />;
}

export default Tab;
