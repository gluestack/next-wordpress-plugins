import { createConfig, config as defaultConfig } from "@gluestack-ui/themed";
const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
    },
    space: {
      ...defaultConfig.theme.tokens.space,
      "0": 0,
      "0.5": 2,
      "1": 4,
      "1.5": 6,
      "2": 8,
      "2.5": 10,
      "3": 12,
      "3.5": 14,
      "4": 16,
      "4.5": 18,
      "5": 20,
      "6": 24,
      "7": 28,
      "8": 32,
      "9": 36,
      "10": 40,
      "11": 44,
      "12": 48,
      "16": 64,
      "20": 80,
      "24": 96,
      "32": 128,
      "35": 140,
      "40": 160,
      "48": 192,
      "56": 224,
      "64": 256,
      "72": 288,
      "80": 320,
      "96": 384,
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.666%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666%",
      "2/6": "33.333%",
      "3/6": "50%",
      "4/6": "66.666%",
      "5/6": "83.333%",
      full: "100%",
    },
    borderWidths: {
      ...defaultConfig.theme.tokens.borderWidths,
    },
    opacity: {
      ...defaultConfig.theme.tokens.opacity,
    },
  },
} as const);

export { config };

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module "@gluestack-ui/themed" {
  interface UIConfig extends ConfigType {}
}
