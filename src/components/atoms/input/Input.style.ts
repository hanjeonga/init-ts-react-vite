import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  width: "100%",
});

export const input = style({
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease",

  ":focus": {
    borderColor: "blue",
  },

  ":disabled": {
    backgroundColor: "#f5f5f5",
    cursor: "not-allowed",
  },
});

export const message = {
  error: style({
    fontSize: "12px",
    color: "red",
  }),
  success: style({
    fontSize: "12px",
    color: "green",
  }),
  helper: style({
    fontSize: "12px",
    color: "gray",
  }),
} as const;
