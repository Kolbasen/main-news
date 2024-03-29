module.exports = {
    "env": {
      "browser": true
    },
    "extends": ["plugin:react/recommended", "react-app", "plugin:wdio/recommended"],
    "plugins": ["react", "wdio"],
    "rules": {
      "camelcase": 2,
      "no-unused-vars": 2,
      "eqeqeq": 2,
      "no-console": [2, { "allow": ["warn", "error"] }],
      "indent": [2, 2],
      "max-len": 0,
      "quotes": [2, "single", "avoid-escape"],
      "semi": 2,
      "react/display-name": 2,
      "react/no-unescaped-entities": 0,
      "react/prop-types": 2,
      "react/jsx-no-bind": 2
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    }
  }