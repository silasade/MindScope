import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { UploadFile } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import Image from "next/image";

interface SingleImageUploaderProps {
  // Returns the file (or null if no image) to the parent
  onFileChange: (file: UploadFile | null) => void;
}

const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const SingleImageUploader: React.FC<SingleImageUploaderProps> = ({
  onFileChange,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [preview, setPreview] = useState<string>("");

  const handleChange = async (info: UploadChangeParam<UploadFile>) => {
    // Restrict to the most recent file
    const newFileList = info.fileList.slice(-1);
    setFileList(newFileList);

    if (newFileList.length > 0) {
      const file = newFileList[0];

      // Generate a base64 preview if not already available
      if (!file.url && !file.preview && file.originFileObj) {
        file.preview = await getBase64(file.originFileObj as File);
      }
      // Set preview image (either from file.url or file.preview)
      setPreview(file.url || file.preview || "");

      // Return the file via the callback
      onFileChange(file);
    } else {
      setPreview("");
      onFileChange(null);
    }
  };

  const uploadButton = (
    <button
      className="h-32 border border-[#10182f] rounded-lg bg-none max-w-[100%] w-[350px]"
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Blog image</div>
    </button>
  );

  return (
    <div>
      <Upload
        fileList={fileList}
        onChange={handleChange}
        maxCount={1} // Restrict to one file
        className="w-[100%]"
      >
        {fileList.length < 1 && uploadButton}
      </Upload>
      {/* Display the preview image if available */}
      {preview && (
        <Image
          src={preview}
          alt="Preview"
          fill
          className="mt-2 w-100 h-100 object-cover rounded-lg"
        />
      )}
    </div>
  );
};

export default SingleImageUploader;
