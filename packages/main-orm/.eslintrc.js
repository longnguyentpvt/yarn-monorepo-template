module.exports = {
  extends : ["../dev-configs/base.eslintrc.json"],
  parserOptions : {
    project : "./tsconfig.json"
  },
  rules: {
    "import/no-unresolved": "off"
  },
  settings : {
    "import/resolver" : {
      typescript : {
        project : "./tsconfig.json"
      }
    }
  }
};
