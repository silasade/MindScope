import React from "react";
function Postlayout(Props: {
  children: React.ReactNode;
  modal: React.ReactNode; // slot with intercepting route
}) {
  return (
    <div>
      {Props.children}
      {Props.modal}

    </div>
  );
}

export default Postlayout;
