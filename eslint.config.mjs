// eslint.config.mjs
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";

export default [
  // Ignore build artifacts
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },

  // Base config for JS/TS
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Next recommended + Core Web Vitals
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // Your overrides
      "no-console": "warn",
      "@next/next/no-img-element": "off",
    },
  },
];
