import { InboxOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

// Define the allowed file types as a string union
type FileType = "audio" | "pdf";

// Define custom props for our component by omitting the conflicting props from UploadProps
type CustomUploadProps = Omit<UploadProps, 'onChange' | 'type'> & {
  title: string;
  hint: string;
  type: FileType; // our custom "type" for allowed file types
  onFileChange: (file: UploadFile | null) => void;
};

// Create a component that accepts both UploadProps (with omitted keys) and custom props
function UploadComponent({
  title,
  hint,
  type,
  onFileChange,
  ...rest
}: CustomUploadProps) {
  // Handle file change
  const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList[0]);
    }
    if (status === "done") {
      onFileChange(info.file);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
      onFileChange(null);
    }
  };

  // Validate file type before upload
  const beforeUpload = (file: UploadFile) => {
    const fileType = file.type;
    const isValidType =
      (type === "audio" && fileType?.startsWith("audio/")) ||
      (type === "pdf" && fileType === "application/pdf");

    if (!isValidType) {
      message.error(`Only ${type} files are allowed.`);
      return Upload.LIST_IGNORE; // Prevent upload
    }
    return true;
  };

  return (
    <Dragger
      {...rest} // Spread the remaining UploadProps here
      onChange={handleChange}
      beforeUpload={beforeUpload}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text text-[16px] text-[#333333] font-[500]">{title}</p>
      <p className="ant-upload-hint text-[14px] text-[#333333] font-[400]">{hint}</p>
    </Dragger>
  );
}

export default UploadComponent;
