module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
    jest: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint", //
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "react-native"],
  rules: {
    "react/jsx-uses-react": "error", // Remove the error when you import React for function Component
    "react/jsx-uses-vars": "error", // Make eslint understand the Components usage inside JSX
    "react-native/no-unused-styles": 2, //No unused styles

    indent: ["error", 2, { SwitchCase: 1 }], // 1 tab = 2 spaces
    quotes: ["error", "single"], // Always use 'string' over "string"
    semi: ["error", "always"],
    "comma-dangle": [
      "error",
      {
        arrays: "always",
        objects: "always",
        imports: "always",
        exports: "never",
        functions: "only-multiline"
      }
    ], // Trailing comma
    curly: ["error", "multi-line"],
    eqeqeq: ["error", "smart"], // Allow null, string literal, typeof compare
    "func-names": ["error", "as-needed"], // Force every function need to have a name for easier debugging
    "arrow-parens": ["error", "always"],
    "no-unused-vars": ["error", { ignoreRestSiblings: true }], // https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings
    "max-len": [
      2,
      101,
      2,
      {
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true
      }
    ]
  }
};
