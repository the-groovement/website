import { HTMLInputTypeAttribute } from "react";

type JoinInputProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  required: boolean;
  placeholder?: string;
};

export default function JoinInput({
  label,
  type,
  name,
  required,
  placeholder,
}: JoinInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <p>{label}</p>
      <input
        type={type}
        name={name}
        className="px-6 border py-3 text-gray-500 placeholder-gray-500 focus:outline-none rounded-2xl"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
