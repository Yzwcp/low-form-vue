module.exports = {
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  // 配置解析vue文件
  parser: 'vue-eslint-parser',

  parserOptions: {
    // ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,

    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      modules: true,
      legacyDecorators: true,
    },
  },

  plugins: ['vue', '@typescript-eslint'],
  // 添加规则
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
  },
}
