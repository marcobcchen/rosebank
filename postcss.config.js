module.exports = {
  plugins: {
    autoprefixer: {
      // 加入各家瀏覽器的前綴詞
      overrideBrowserslist: [
        // 指定支援的瀏覽器版本
        'Chrome >= 52',
        'FireFox >= 44',
        'Safari >= 7',
        'Explorer >= 11',
        'last 2 Edge versions',
      ],
    },
  },
};