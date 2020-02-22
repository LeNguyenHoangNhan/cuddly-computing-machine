module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["warn", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"]
  }
};
