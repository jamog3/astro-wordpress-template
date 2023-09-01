module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/node_modules/**', '**/*.cjs'],
  overrides: [
    {
      files: ['src/**/*.{astro,jsx,tsx}'],
    },
  ],
  plugins: ['stylelint-prettier'],
  defaultSeverity: 'error',
  rules: {
    'prettier/prettier': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'font-family-no-missing-generic-family-keyword': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'selector-pseudo-element-colon-notation': 'double',
  },
}
