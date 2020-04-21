module.exports = function() {
  return {
    devServer: {
      host: '127.0.0.1',
      port: 8080,
      stats: 'errors-only',
      overlay: true,
    },
  };
};
