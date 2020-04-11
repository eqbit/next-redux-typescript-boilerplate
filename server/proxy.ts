const devProxy: { [key: string]: {} } = {
  '/api': {
    target: 'http://95.163.91.239:21800/api',
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }
};

export default devProxy;
