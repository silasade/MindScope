import React from "react";
import Header from "./Header";
import s from "./layout.module.scss";
import clsx from "clsx";
type prop = {
  children: React.ReactNode;
};
export default async function LandingPagelayout({ children }: prop) {
  return (
    <div className={clsx(s.wrapper)}>
      <Header />
      <div>{children}</div>
    </div>
  );
}

