import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography, UploadFile } from "antd";
import SingleImageUploader from "@/app/(Routes)/_global_components/UploadImage";
import UploadComponent from "@/app/(Routes)/_global_components/UploadForm";
const { Text } = Typography;
type Inputs = {
  title: string;
  description: string;
};
function PostForm() {
  const [blogImage, setBlogImage] = useState<UploadFile | null>();
  const [blogDocument, setBlogDocument] = useState<UploadFile | null>();
  const [blogAudio, setBlogAudio] = useState<UploadFile | null>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
    console.log(blogAudio, blogDocument, blogImage);
  };
  const upLoadBlogImage = (file: UploadFile | null) => {
    setBlogImage(file);
  };
  const upLoadBlogDocument = (file: UploadFile | null) => {
    setBlogDocument(file);
  };
  const upLoadBlogAudio = (file: UploadFile | null) => {
    setBlogAudio(file);
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-100 gap-8"
      >
        <div className="flex gap-8 w-100 items-center h-fit">
          <div className="max-w-auto min-w-fit flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-100">
              <h5 className="font-[500] text-[16px] text-[#333333]">
                Blog title
              </h5>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter your blog title"
                className="h-[50px] border rounded-lg border-[#10182f] p-2"
              />
              {errors.title?.message && (
                <Text type="danger">{errors.title.message}</Text>
              )}
            </div>
            <div className="flex flex-col gap-2 w-100">
              <h5 className="font-[500] text-[16px] text-[#333333]">
                Description
              </h5>
              <input
                type="text"
                placeholder="Enter your blog title"
                className="h-[50px] border rounded-lg border-[#10182f] p-2"
              />
              <Text type="danger"></Text>
            </div>
            <div className="relative w-[350px] h-32">
              <SingleImageUploader onFileChange={upLoadBlogImage} />
            </div>
          </div>
          <div className="flex flex-col gap-4 h-full max-w-auto w-[50%]">
            <div className="h-50 w-100">
              <UploadComponent
                type="pdf"
                title="Upload your article"
                hint="It must be in pdf format"
                onFileChange={upLoadBlogDocument}
              />
            </div>
            <div className="h-50 w-100">
              <UploadComponent
                type="audio"
                title="Upload your article audio"
                hint="It must be a audio file"
                onFileChange={upLoadBlogAudio}
              />
            </div>
          </div>
        </div>
        <Button
          className="w-100 h-[50px] rounded-lg bg-[#10182f] text-white text-[16px] font-[500]"
          loading={isSubmitting}
        >
          Create post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
