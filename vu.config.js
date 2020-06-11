module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    // 如果想要显示警告和错误：
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
