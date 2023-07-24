const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.resolve(__dirname, 'src/app/styles',)],
        prependData: `@import "_mixins.scss";`,
    },
}

module.exports = nextConfig


