'use strict';

module.exports = {
  
  "root": true,

  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "script"
  },

  "env": {
    "node": true,
    "mocha": true
  },

  "rules": {
    "consistent-return": "off",
    "newline-per-chained-call": "off",
    "object-curly-newline": "off",
    "no-underscore-dangle": "off",
    "padded-blocks": "off",
    "max-len": ["error", 140],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "never"],
    "no-param-reassign": "off",
    "linebreak-style": "off"
  },

  "overrides": [{
    files: "*.spec.js",
    rules: {
      "no-unused-expressions": "off"
    }
  }]
};
