"use client";

import Modal from "@/app/(Routes)/_global_components/Modal";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import PostForm from "../../_local component/PostForm";

function CreatePost() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.push("/Admin/post");
  };

  useEffect(() => {
    if (pathname === "/Admin/post") {
      return setOpen(false);
    }
    setOpen(true);
  }, [pathname]);

  return (
    <Modal
      open={open}
      handleCancel={handleClose}
      width={750}
      
    >
      <PostForm />
    </Modal>
  );
}

export default CreatePost;
