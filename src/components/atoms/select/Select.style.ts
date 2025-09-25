import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  width: "200px",
});

export const trigger = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  background: "#fff",
  textAlign: "left",
  cursor: "pointer",
});

export const list = style({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  marginTop: "4px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  background: "#fff",
  zIndex: 10,
  maxHeight: "200px",
  overflowY: "auto",
});

export const option = style({
  padding: "0.5rem 0.75rem",
  cursor: "pointer",
  selectors: {
    "&:hover": { background: "#f0f0f0" },
  },
});
