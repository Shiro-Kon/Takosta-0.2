const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
 entry: './src/index.tsx', // вхідна точка програми
 output: {
 path: path.resolve(__dirname, 'dist'), // папка для складання
 filename: 'bundle.js', // ім'я вихідного файлу
 publicPath: '/', // публічний шлях
 },
 resolve: {
 extensions: ['.js', '.jsx', '.ts', '.tsx'], // розширення файлів, які webpack оброблятиме
 },
 module: {
 rules: [
 {
 test: /\.(js|jsx|ts|tsx)$/, // файли, що обробляються
 exclude: /node_modules/,
 use: {
 loader: 'babel-loader', // або 'ts-loader' для TypeScript
 options: {
 presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
 },
 },
 },
 {
 test: /\.(css|scss)$/, // обробка стилів
 use: [
 'style-loader',
 'css-loader',
 'postcss-loader', // якщо використовуєте PostCSS
 'sass-loader', // якщо використовуєте Sass
 ],
 },
 {
 test: /\.(png|jpg|gif|svg)$/, // обробка зображень
 use: [
 {
 loader: 'file-loader',
 options: {
 name: '[name].[ext]',
 outputPath: 'assets/images',
 },
 },
 ],
 },
 ],
 },
 plugins: [
 new BundleAnalyzerPlugin(), // додаємо плагін для аналізу складання
 ],
 devtool: 'source-map', // генерація sourcemaps для налагодження
 devServer: {
 contentBase: path.join(__dirname, 'dist'), // папка для файлів dev server
 compress: true, // включення стискування
 port: 3000, // порт сервера
 historyApiFallback: true, // HTML5 підтримка History API (для React Router)
 },
};