module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest/globals": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "react", "jest"
    ],
    "rules": {
      "indent": [
        "error",
          2
        ],
      //"linebreak-style": ["error","unix"],
      "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")], // https://stackoverflow.com/q/39114446/2771889
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "never"
      ],
      "eqeqeq": "error",
      'no-console': 'off',
      "no-trailing-spaces": "error",
      "object-curly-spacing": [
        "error", "always"
      ],
      "arrow-spacing": [
        "error", { "before": true, "after": true }
      ],
      "no-console": "error",
      "react/prop-types": 0
    }
  }