const setMethod = (method: L.Method) => (config: L.RequestConfig): L.RequestConfig => ({
  ...config,
  method,
});

export const setGET = setMethod('GET');
