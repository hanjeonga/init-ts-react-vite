import { useState, useRef, useEffect } from "react";
import * as clsx from "clsx";
import * as styles from "./Select.style";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder, className }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={clsx(styles.wrapper, className)} ref={wrapperRef}>
      <button type="button" className={styles.trigger} onClick={() => setOpen((prev) => !prev)}>
        {selected ? selected.label : placeholder || "Select..."}
      </button>

      {open && (
        <div className={styles.list}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={styles.option}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
