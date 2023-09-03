module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-mixins": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      preserve: false,
      stage: 1,
    },
    "postcss-pxtorem": {},
  },
};
