import type { ReactNode } from "react";
import { button } from "./Button.style";

type Variant = keyof typeof button;

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  variant = "primary",
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[button[variant], disabled && "opacity-50 cursor-not-allowed", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};
