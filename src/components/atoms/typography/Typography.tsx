import type { ReactNode, CSSProperties } from "react";
import * as clsx from "clsx";
import * as styles from "./Typography.style";

type Variant = "h1" | "h2" | "body" | "caption";

const variantStyles: Record<Variant, string> = {
  h1: styles.h1,
  h2: styles.h2,
  body: styles.body,
  caption: styles.caption,
};

interface TypographyProps {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  style?: CSSProperties; // ✅ props로 직접 스타일 받기
}

const Typography = ({
  as: Tag = "p",
  children,
  variant = "body",
  className,
  style,
}: TypographyProps) => {
  return (
    <Tag className={clsx(variantStyles[variant], className)} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;
