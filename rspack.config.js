const rspack = require("@rspack/core");

const config = {
  entry: {
    main: "./src/main.tsx",
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    host: "localhost",
    port: 5173,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
        type: "css",
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
      favicon: "./public/logo.png",
    }),
  ].filter(Boolean),
};

module.exports = config;
