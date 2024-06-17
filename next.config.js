const path = require('path');

module.exports = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    prependData: "@import 'variables.scss'; @import 'mixins.scss'; @import 'keyframes.scss';",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};
