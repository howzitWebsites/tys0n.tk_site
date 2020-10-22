const heightExtend = require("./tailwind-extensions/height.extend");
const paddingExtend = require("./tailwind-extensions/padding.extend");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
        ...heightExtend,
        ...paddingExtend
    },
    stroke: {
      current: 'currentColor',
    }
  },
  variants: {},
  plugins: []
};
