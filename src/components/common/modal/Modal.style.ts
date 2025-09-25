import { style, keyframes } from "@vanilla-extract/css";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const scaleIn = keyframes({
  "0%": { transform: "scale(0.95)", opacity: 0 },
  "100%": { transform: "scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  "0%": { transform: "scale(1)", opacity: 1 },
  "100%": { transform: "scale(0.95)", opacity: 0 },
});

export const backdrop = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 50,
  animation: `${fadeIn} 0.2s ease-out`,
  selectors: {
    '&[data-state="closing"]': {
      animation: `${fadeOut} 0.2s ease-in`,
    },
  },
});

export const modal = style({
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  padding: "24px",
  maxWidth: "600px",
  width: "100%",
  position: "relative",
  animation: `${scaleIn} 0.2s ease-out`,
  selectors: {
    '&[data-state="closing"]': {
      animation: `${scaleOut} 0.2s ease-in`,
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  border: "none",
  background: "transparent",
  fontSize: "20px",
  cursor: "pointer",
  color: "#666",
  ":hover": {
    color: "#000",
  },
});
