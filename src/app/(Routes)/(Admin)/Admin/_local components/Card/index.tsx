import React from "react";
type Prop = {
  name: string;
  stat: string;
};
function Card({ name, stat }: Prop) {
  return (
    <div className="flex flex-col h-32 w-1/3 bg-white justify-between p-6 rounded-md">
      <h5 className="text-[#333333] text-[22px] font-[500]">{name}</h5>
      <p className="text-[#333333] text-[18px] font-[400]">{stat}</p>
    </div>
  );
}

export default Card;
