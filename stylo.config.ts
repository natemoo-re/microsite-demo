import { Config } from "@stylo/core";

const theme = {
  space: {
    "2xs": "base / 4",
    xs: "base / 2",
    base: 8,
    sm: "base * 1",
    md: "base * 2",
    lg: "base * 4",
    xl: "base * 6",
    "2xl": "base * 8",
    "3xl": "base * 16",
    "4xl": "base * 24",
    "5xl": "base * 32",
  },
  sizes: {
    full: "100%",
  },
  widths: {
    screen: "100vw",
  },
  heights: {
    screen: "100vh",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 64,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  media: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
};

export const config: Config = {
  theme,
};

declare global {
  namespace Stylo {
    interface Types {
      Modes: never;
      Theme: typeof theme;
      Scale: keyof typeof theme;
    }
  }
}
