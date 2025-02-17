"use client";
import Modals from "@/app/(Routes)/_global_components/Modal";
import React, { useState } from "react";

function CreatePost() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen((prev:boolean) => !prev);
  };
  return (
    <div>
      <Modals open={open} handleCancel={handleClose}>
        article form goes here
      </Modals>
    </div>
  );
}

export default CreatePost;
