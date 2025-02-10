import React from "react";
import Sidebar from "./_local components/Sidebar";
import Header from "./_local components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="grid h-screen grid-cols-[20%_80%]">
      <aside className="bg-[#CBA3FF] h-full">
        <Sidebar />
      </aside>
      <main className="bg-[#EBEBEB] h-full flex flex-col gap-10">
        <Header />
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
