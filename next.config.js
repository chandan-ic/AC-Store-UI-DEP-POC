const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};
