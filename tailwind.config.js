const heightExtend = require("./tailwind/height.extend");
const paddingExtend = require("./tailwind/padding.extend");

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
