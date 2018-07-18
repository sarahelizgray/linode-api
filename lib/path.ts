export default (path: string) => (config: L.RequestConfig): L.RequestConfig => ({
  ...config,
  path
});
