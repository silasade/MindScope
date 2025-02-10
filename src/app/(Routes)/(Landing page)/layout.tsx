import React from "react";
import Header from "./_local_component/Header";
import s from "./layout.module.scss";
import clsx from "clsx";
import Footer from "./_local_component/Footer";
type prop = {
  children: React.ReactNode;
};
export default async function LandingPagelayout({ children }: prop) {
  return (
    <div className={clsx(s.wrapper)}>
      <Header />
      <div className="pt-[100px]">{children}</div>
      <Footer/>
    </div>
  );
}

