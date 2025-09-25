import type { InputHTMLAttributes, ReactNode } from "react";
import { wrapper, input, message } from "./Input.style";

type Status = keyof typeof message; // "error" | "success" | "helper"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  status?: Status;
  messageText?: ReactNode;
}

export const Input = ({ className, status, messageText, ...props }: InputProps) => {
  return (
    <div className={wrapper}>
      <input className={[input, className].filter(Boolean).join(" ")} {...props} />
      {status && messageText && <span className={message[status]}>{messageText}</span>}
    </div>
  );
};
