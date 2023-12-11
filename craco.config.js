const path = require('path')
const tailwindcss = require('tailwindcss')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@hoc': path.resolve(__dirname, 'src/hoc'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  style: {
    postcssOptions: {
      plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
    },
    sass: {
      loaderOptions: (sassLoaderOptions) => ({
        ...sassLoaderOptions,
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src')],
        },
        additionalData: (content, loaderContext) => {
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)

          if (relativePath.endsWith('.module.scss')) {
            content =
              `
            @import 'styles/animation';
            @import 'styles/mixins';
            ${  content}`
          }

          return content
        },
      }),
    },
  },
}
