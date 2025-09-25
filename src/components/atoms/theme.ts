// export const theme = {
//   colors: {
//     primary: {
//       blue600: "#164EBA",
//       blue500: "#1F64CA",
//       blue400: "#2370E2",
//       blue300: "#4E9EFF",
//       blue200: "#4E9EFF",
//       blue100: "#D0E3FF",
//       blue50: "#F0F5FF",
//     },
//     background: {
//       white: "#FFFFFF",
//       bgItem: "#F9FAFC",
//       bgSurface: "#F4F6FA",
//     },
//     divider: {
//       deviderLine1: "#E0E6EE",
//       deviderLine2: "#CAD0DA",
//     },
//     text: {
//       textInactive: "#A8AFBD",
//       textDescription: "#7C8390",
//       textSub: "#636C77",
//       textMain: "#3E4345",
//       deepBlack: "#0E0F16",
//     },
//     icon: { iconInactive: "#A8AFBD", iconSub: "#7C8390", iconMain: "#636C77" },
//     secondary: {
//       text: { blue: "#2370E2", red: "#DA3843", yellow: "#D06F15", green: "#0D832F" },
//       solidS: {
//         blue: "#5390FF",
//         red: "#FF707A",
//         yellow: "#FFB100",
//         green: "#20C997",
//         purple: "#9775FA",
//         deepBlue: "#7384FD",
//       },
//       solidL: { blue: "#F0F5FF", red: "#FFF3F4", yellow: "#FFF8E4", green: "#E8F9EC" },
//     },
//   },
//   textColor: {
//     basic: {
//       deepBlack: "#0E0F16",
//       black: "#404040",
//       gray800: "#636C77",
//       gray700: "#7C8390",
//       gray600: "#A8AFBD",
//       white: "#FFFFFF",
//     },
//     primary: { blue: "#2370E2" },
//     functional: { error: "#DA3843", warning: "#D05815", success: "#D05815" },
//   },
//   font: {
//     heading1: `font-size:32px; font-weight:500; line-height:46px;`,
//     heading2: `font-size:28px; font-weight:500; line-height:40px;`,
//     title1: `font-size:20px; font-weight:600; line-height:32px;`,
//     title2: `font-size:16px; font-weight:600; line-height:24px;`,
//     title3: `font-size:14px; font-weight:600; line-height:20px;`,
//     body1: `font-size:16px; font-weight:400; line-height:24px;`,
//     body2: `font-size:14px; font-weight:400; line-height:22px;`,
//     bodyBold1: `font-size:16px; font-weight:600; line-height:24px;`,
//     bodyBold2: `font-size:14px; font-weight:600; line-height:20px;`,
//     button1: `font-size:16px; font-weight:500;`,
//     button2: `font-size:14px; font-weight:500;`,
//     smallText: `font-size:12px; font-weight:500; line-height:18px;`,
//   },
//   space: {
//     xxxxl: "8rem",
//     xxxl: "6rem",
//     xxl: "4rem",
//     xl: "3rem",
//     l: "2rem",
//     m: "1.5rem",
//     s: "1rem",
//     xs: "0.5rem",
//     xxs: "0.25rem",
//   },
//   shadow: {
//     basic: "box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 2px 6px 12px 0 rgba(0, 0, 0, 0.12);",
//     card1: "box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.20), 2px 2px 6px 0 rgba(0, 0, 0, 0.10);",
//     card2: "box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.10), 0 2px 8px 0 rgba(0, 0, 0, 0.10);",
//     tab: "box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.10), 2px 4px 12px 0 rgba(0, 0, 0, 0.10);",
//     float: "box-shadow: 4px 8px 28px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.16);",
//     strong:
//       "box-shadow: 0 24px 38px 0 rgba(0, 0, 0, 0.14), 0 9px 46px 0 rgba(0, 0, 0, 0.12), 0 11px 15px 0 rgba(0, 0, 0, 0.20);",
//   },
//   animation: {},
// };

import { createTheme, style } from "@vanilla-extract/css";

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
