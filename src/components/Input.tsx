import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  inputSet: string;
}

interface PropsTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  inputSet: string;
}

export const Input: FC<PropsInput> = ({ label, id, inputSet, ...props }) => {
  return (
    <div className="mb-3">
      <label>{label}</label>
      <input
        id={id}
        className={`input input-bordered w-full bg-white ${inputSet}`}
        {...props}
      />
    </div>
  );
};

export const TextArea: FC<PropsTextArea> = ({
  label,
  id,
  inputSet,
  ...props
}) => {
  return (
    <div className="mb-3 ">
      <label>{label}</label>
      <textarea
        id={id}
        className={`textarea textarea-bordered w-full resize-none bg-white ${inputSet}`}
        {...props}
      ></textarea>
    </div>
  );
};
