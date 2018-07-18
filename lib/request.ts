export default <T>(...fns: any[]) =>
  fns.reverse().reduce((result: T, fn) => fn(result), {});
