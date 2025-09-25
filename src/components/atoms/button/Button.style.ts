import { style } from "@vanilla-extract/css";

export const button = {
  primary: style({
    backgroundColor: "blue",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    ":hover": {
      backgroundColor: "darkblue",
    },
  }),

  secondary: style({
    backgroundColor: "gray",
    color: "black",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    ":hover": {
      backgroundColor: "darkgray",
    },
  }),

  outline: style({
    backgroundColor: "transparent",
    border: "2px solid blue",
    color: "blue",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    ":hover": {
      backgroundColor: "rgba(0, 0, 255, 0.1)",
    },
  }),
} as const;
