/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other configurations ...
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/assets/',
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;