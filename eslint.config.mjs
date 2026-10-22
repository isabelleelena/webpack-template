import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist/"] },
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.test.js"],
    languageOptions: { globals: globals.jest },
  },
  {
    files: ["*.config.js", "__mocks__/**/*.js"],
    languageOptions: { sourceType: "commonjs", globals: globals.node },
  },
];
