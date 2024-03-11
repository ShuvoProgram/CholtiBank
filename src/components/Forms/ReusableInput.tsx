import { Input } from "@nextui-org/react";
import { GiBleedingEye } from "react-icons/gi";
import { IoEyeOffSharp } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";

interface ReusableInputProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  errorMessage?:string
}

const ReusableInput: React.FC<ReusableInputProps> = ({
  label,
  name,
  placeholder,
  type,
  isRequired = false,
  isInvalid = false,
  startContent,
  endContent,
  errorMessage
}) => {
  return (
    <Input
      className="w-full"
      isRequired={isRequired}
      size="sm"
      label={label}
      name={name}
      variant="bordered"
      placeholder={placeholder}
      isInvalid={isInvalid}
      type={type}
      startContent={startContent}
      endContent={endContent}
      errorMessage={errorMessage}
      classNames={{
        mainWrapper: "rounded-none",
        innerWrapper: "rounded-none",
        inputWrapper: "rounded-none",
      }}
    />
  );
};

export default ReusableInput;
