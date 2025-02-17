import React from "react";
import Card from "./_local components/Card";

function Overview() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[#9747ff] font-[700] text-[24px]">Welcome, Silas</h2>

      <div className="flex flex-row gap-2 flex-wrap">
        <Card name="New articles" stat="5" />
        <Card name="Total Draft" stat="5" />
        <Card name="Total articles" stat="5" />
      </div>
      <div>
        <h3 className="text-[#9747ff] font-[700] text-[18px]">Recent posts</h3>
      </div>
    </div>
  );
}

export default Overview;
