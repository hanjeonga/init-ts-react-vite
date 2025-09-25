import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    secondary: "#e5e7eb",
    secondaryHover: "#d1d5db",
    text: "#111",
    textSecondary: "#666",
    background: "#fff",
    border: "#ccc",
  },
  font: {
    body: "14px",
    h1: "32px",
    h2: "24px",
    h3: "18px",
    caption: "12px",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
});
